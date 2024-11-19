import { useEffect } from "react";

const useClickOutside = (
  containerRef: React.RefObject<HTMLElement | null>,
  setToggle: React.Dispatch<React.SetStateAction<boolean>>
) => {
  // containerRef 생성 전에는 실행이 안되도록 막아줌

  useEffect(() => {
    // 클릭한 위치를 찾아내서 모달 내부인 여부 확인하는 함수
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      // 클릭한 곳이 모달 창 내부가 아니라면 모달 창을 닫음
      if (containerRef.current && !containerRef.current?.contains(target)) {
        setToggle(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => document.removeEventListener("click", handleClickOutside);
  }, [containerRef, setToggle]);
};

export default useClickOutside;
