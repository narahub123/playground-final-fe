import { render } from "@testing-library/react";
import Icon from "./Icon";

// ../../icons 모듈을 모킹
vi.mock("../../icons", () => ({
  default: {
    backward: (props: any) => <svg data-testid="backward" {...props} />,
  },
}));

describe("Icon", () => {
  it("아이콘 이름을 전달받으면 리액트 아이콘에 맞는 아이콘을 표시해야 함", () => {
    const { getByTestId } = render(<Icon iconName="backward" />);
    expect(getByTestId("backward")).toBeInTheDocument();
  });

  it("유효하지 않은 아이콘 이름을 전달받으면 유효하지 않은 이름을 전달 받음 표시해야 함", () => {
    const { getByText } = render(<Icon iconName="FORWARD" />);
    expect(getByText("유효하지 않은 아이콘 이름")).toBeInTheDocument();
  });
});
