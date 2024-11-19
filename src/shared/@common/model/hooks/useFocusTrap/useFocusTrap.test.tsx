import { fireEvent, render, screen } from "@testing-library/react";
import { useRef } from "react";
import useFocusTrap from "./useFocusTrap";

const TestComponent = ({ showModal, onEscapeFocusTrap }: any) => {
  const ref = useRef<HTMLDivElement>(null);
  useFocusTrap({
    ref,
    location: "test component",
    showModal,
    onEscapeFocusTrap,
  });

  return (
    <div ref={ref}>
      <button>처음</button>
      <button>둘째</button>
      <button>셋째</button>
    </div>
  );
};

describe("useFocusTrap Hook", () => {
  it("초기 로드 시 첫 번째 요소에 포커스 설정되어야 함", () => {
    render(<TestComponent showModal={true} onEscapeFocusTrap={vi.fn()} />);
    const firstButton = screen.getByText("처음");

    // expect(document.activeElement).toBe(firstButton);
    expect(firstButton).toHaveFocus();
  });

  it("Tab 키가 마지막 요소에서 첫 번째 요소로 순환해야 함", async () => {
    const { getByText } = render(
      <TestComponent showModal={true} onEscapeFocusTrap={vi.fn()} />
    );

    const firstButton = getByText("처음");
    const lastButton = getByText("셋째");

    lastButton.focus(); // 마지막 요소에 포커스
    expect(lastButton).toHaveFocus(); // 포커스 확인

    // Tab 키 이벤트 트리거
    fireEvent.keyDown(lastButton, { key: "Tab", code: "Tab" });

    expect(firstButton).toHaveFocus(); // 첫번째 요소로 포커스 이동 확인
  });

  it("Shift + Tab 키가 첫번째 요소에서 마지막 요소로 순환해야 함", async () => {
    const { getByText } = render(
      <TestComponent showModal={true} onEscapeFocusTrap={vi.fn()} />
    );

    const firstButton = getByText("처음");
    const lastButton = getByText("셋째");

    firstButton.focus(); // 첫번째 요소에 포커스
    expect(firstButton).toHaveFocus(); // 포커스 확인

    // Tab 키 이벤트 트리거
    fireEvent.keyDown(firstButton, { key: "Tab", code: "Tab", shiftKey: true });

    expect(lastButton).toHaveFocus(); // 첫번째 요소로 포커스 이동 확인
  });

  it("escape 버튼을 누르면 onEscapeFocusTrap 호출해야 함", async () => {
    const onEscapeFocusTrap = vi.fn();
    const { getByText } = render(
      <TestComponent showModal={true} onEscapeFocusTrap={onEscapeFocusTrap} />
    );

    const firstButton = getByText("처음");

    firstButton.focus(); // 첫번째 요소에 포커스
    expect(firstButton).toHaveFocus(); // 포커스 확인

    // Tab 키 이벤트 트리거
    fireEvent.keyDown(firstButton, { key: "Escape", code: "Escape" });

    expect(onEscapeFocusTrap).toHaveBeenCalledTimes(1);
  });
});
