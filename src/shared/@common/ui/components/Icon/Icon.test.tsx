import { render } from "@testing-library/react";
import Icon from "./Icon";

// #icons/index 모듈을 모킹
vi.mock("#icons/index", () => ({
  default: {
    backward: (props: any) => <svg data-testid="backward" {...props} />,
    wrong: (props: any) => <svg data-testid="wrong" {...props} />,
  },
}));

// @shared/@common/constants 모듈을 모킹
vi.mock("@shared/@common/constants", () => ({
  components: {
    icon: {
      wrongIcon: {
        iconName: "wrong",
        iconTitle: "유효하지 않는 아이콘 이름",
      },
    },
  },
}));

describe("Icon", () => {
  it("아이콘 이름을 전달받으면 리액트 아이콘에 맞는 아이콘을 표시해야 함", () => {
    const { getByTestId } = render(
      <Icon iconName="backward" iconTitle="뒤로 가기" />
    );

    const icon = getByTestId("backward");

    expect(icon).toBeInTheDocument();
    expect(icon).toHaveAttribute("title", "뒤로 가기");
  });

  it("유효하지 않은 아이콘 이름을 전달받으면 wrong 아이콘을 표시하고 유효하지 않은 이름을 전달 받음 표시해야 함", () => {
    const { getByTestId } = render(
      <Icon iconName="forward" iconTitle="앞으로 가기" />
    );

    const icon = getByTestId("wrong");

    expect(icon).toBeInTheDocument();
    expect(icon).toHaveAttribute("title", "유효하지 않는 아이콘 이름");
  });
});
