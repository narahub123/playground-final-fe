import { fireEvent, render, screen } from "@testing-library/react";
import ListModal from "./ListModal";
import { useState } from "react";

describe("ListModal", () => {
  const [showModal, setShowModal] = useState(false);
  // 전달 받은 데이터를 화면에 표시하는지 여부 확인
  it("전달 받은 리스트 데이터를 제대로 렌더링 해야 함", () => {
    const list = [
      { value: 1, text: "실패", cardTitle: "실패", iconName: "backward" },
    ];

    const handleClick = vi.fn();

    render(
      <ListModal
        list={list}
        handleClick={handleClick}
        setShowModal={setShowModal}
      />
    );

    const listItem = screen.getByText("실패");
    expect(listItem).toBeInTheDocument();
  });

  // 이벤트 호출 여부 확인
  it("클릭 이벤트 발생시 handleClick이 호출되어야 함", () => {
    const list = [
      { value: 1, text: "실패", cardTitle: "실패", iconName: "backward" },
    ];

    const handleClick = vi.fn();

    render(
      <ListModal
        list={list}
        handleClick={handleClick}
        setShowModal={setShowModal}
      />
    );

    const listItem = screen.getByText("실패");
    fireEvent.click(listItem);

    expect(handleClick).toHaveBeenCalled(); //호출 여부 확인
    expect(handleClick).toHaveBeenCalledWith(1); // "실패"의 value 값 확인
  });
});
