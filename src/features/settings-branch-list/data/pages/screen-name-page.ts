import {
  CHAR_SET,
  NUMBER_SET,
  USERID_MAX,
  NUMOFRECUSERIDS,
} from "@shared/@common/constants";
import { getUserByIdAPI } from "@shared/@common/model/apis";
import { alphabetGeneratorModeType } from "@shared/@common/types";

const alphabetGenerator = () => {
  let currentLength = 1;
  let indexArray = Array(currentLength).fill(0);
  let mode: alphabetGeneratorModeType = "numbers";

  function getNextString() {
    let result = "";

    // 현재 조합 생성
    if (mode === "mixed") {
      result = Array(currentLength + 1)
        .fill(0)
        .map((idx, i) => {
          // 짝수 인덱스에는 숫자, 홀수 인덱스에는 문자 배치
          const setToUse = i % 2 === 0 ? NUMBER_SET : CHAR_SET;
          return setToUse[idx % setToUse.length];
        })
        .join("");
    } else {
      const setToUse = mode === "numbers" ? NUMBER_SET : CHAR_SET;
      result = indexArray
        .map((idx) => setToUse[idx % setToUse.length])
        .join("");
    }

    // 다음 조합으로 업데이트
    for (let i = currentLength - 1; i >= 0; i--) {
      const setToUseLength =
        mode === "mixed"
          ? i % 2 === 0
            ? NUMBER_SET.length
            : CHAR_SET.length
          : mode === "numbers"
          ? NUMBER_SET.length
          : CHAR_SET.length;

      if (indexArray[i] < setToUseLength - 1) {
        indexArray[i]++;
        return result; // 현재 조합 반환
      } else {
        indexArray[i] = 0; // 자리 올림
      }
    }

    // 모든 조합을 소진한 경우 자리수 증가
    currentLength++;
    indexArray = Array(currentLength).fill(0);

    return result; // 현재 조합 반환
  }

  function getMode() {
    return mode;
  }

  function setMode(newMode: alphabetGeneratorModeType) {
    if (["numbers", "letters", "mixed"].includes(newMode)) {
      mode = newMode;
    } else {
      throw new Error("Invalid mode");
    }
  }

  return { getNextString, getMode, setMode };
};

const generateNewUserId = async (
  userId: string,
  mode: "numbers" | "letters" | "mixed",
  maxCount: number,
  resultIds: string[] = []
) => {
  const generator = alphabetGenerator();
  generator.setMode(mode);
  let count = 0;

  while (count < maxCount) {
    const str = generator.getNextString();
    const trialUserId = userId + str;

    if (trialUserId.length > USERID_MAX) {
      break;
    }

    const result = await getUserByIdAPI(trialUserId);

    if (!result) {
      resultIds.push(trialUserId); // 유효한 ID를 배열에 추가
      count++;
    }
  }
};

const getNewUserIds = async (
  userId: string,
  maxCount: number = NUMOFRECUSERIDS // 총 개수
) => {
  const resultIds: string[] = []; // 유효한 ID들을 저장할 배열

  const modeOrder: alphabetGeneratorModeType[] = [
    "numbers",
    "letters",
    "mixed",
  ];

  for (let mode of modeOrder) {
    const modeCount = maxCount;

    await generateNewUserId(
      userId,
      mode,
      modeCount / modeOrder.length,
      resultIds
    );

    if (resultIds.length >= maxCount) {
      break;
    }
  }
  return resultIds; // 여러 개의 ID를 반환
};

const createNewUserIdByIds = async (
  userId: string,
  maxCount: number = NUMOFRECUSERIDS // 총 개수
): Promise<string[] | undefined> => {
  let resultIds: string[] = [];

  if (userId.length < USERID_MAX) {
    resultIds = await getNewUserIds(userId);
  } else {
    for (let i = 1; i < USERID_MAX; i++) {
      const truncatedUserId = userId.slice(USERID_MAX - 1 - i);
      const newUserIds = await getNewUserIds(truncatedUserId);

      if (newUserIds.length !== 0) {
        resultIds.push(...newUserIds);
      }

      if (resultIds.length > maxCount) {
        break;
      }
    }
  }

  return resultIds.length > 0 ? resultIds : undefined; // 중복된 아이디만 존재하면 undefined 반환
};

export { createNewUserIdByIds };
