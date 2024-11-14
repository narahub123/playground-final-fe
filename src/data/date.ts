import { DropdownListType } from "@/types";
import { getLastDateOfMonth } from "@pages/ProfilePage/util";

const year = new Date().getFullYear();
const month = new Date().getMonth();
const date = new Date().getDate();

// 년 목록
const yearsArr: DropdownListType[] = Array.from({
  length: year - 1900 + 1,
})
  .map((_, index) => {
    const year = 1900 + index;

    return {
      type: year,
      name: year,
    };
  })
  .reverse();

const monthsArr: DropdownListType[] = Array.from({ length: 12 }).map(
  (_, index) => ({
    type: index + 1,
    name: index + 1,
  })
);

const dateArr: (
  year: number | string,
  month: number | string
) => DropdownListType[] = (year: number | string, month: number | string) => {
  const lastDate = getLastDateOfMonth(year, month);

  return Array.from({ length: lastDate }).map((_, index) => ({
    type: index + 1,
    name: index + 1,
  }));
};

export { yearsArr, monthsArr, dateArr };
