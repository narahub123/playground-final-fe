import { fireEvent, render, screen } from "@testing-library/react";
import Icon from "./Icon";

// #icons/index 모듈을 모킹
vi.mock("#icons/index", () => ({
  default: {
    backward: (props: any) => <svg data-testid="backward" {...props} />,
    wrong: (props: any) => <svg data-testid="wrong" {...props} />,
  },
}));

// @shared/@common/constants 모듈을 모킹
vi.mock("@shared/@common/constants", async (importOriginal) => {
  const actual = (await importOriginal()) as { [key: string]: any }; // 객체로 캐스팅
  return {
    ...actual, // 실제 내용 유지
    default: {
      ...actual.default, // `default` 내용 유지
      components: {
        ...actual.default.components, // 기존 컴포넌트 내용 유지
        wrongIcon: "mockedWrongIcon", // 필요한 부분 모킹
      },
    },
  };
});

describe("Icon", () => {
  it("아이콘 이름을 전달받으면 리액트 아이콘에 맞는 아이콘을 표시해야 함", () => {
    const { getByTestId } = render(
      <Icon iconName="backward" iconTitle="뒤로 가기" />
    );

    const icon = getByTestId("backward");
    const iconContainer = icon.parentElement as Element;

    expect(icon).toBeInTheDocument();
    expect(iconContainer).toHaveAttribute("title", "뒤로 가기");
  });

  it("유효하지 않은 아이콘 이름을 전달받으면 wrong 아이콘을 표시하고 유효하지 않은 이름을 전달 받음 표시해야 함", () => {
    const { getByTestId } = render(
      <Icon iconName="forward" iconTitle="앞으로 가기" />
    );

    const icon = getByTestId("wrong");
    const iconContainer = icon.parentElement as Element;

    expect(icon).toBeInTheDocument();
    expect(iconContainer).toHaveAttribute("title", "유효하지 않는 아이콘 이름");
  });

  it("아이콘 이름을 전달하지 않으면 잘못된 아이콘을 표시해야 함", () => {
    const { getByTestId } = render(
      <Icon iconName="" iconTitle="기본 아이콘" />
    );

    const icon = getByTestId("wrong");
    const iconContainer = icon.parentElement as Element;

    expect(icon).toBeInTheDocument();
    expect(iconContainer).toHaveAttribute("title", "유효하지 않는 아이콘 이름");
  });

  it("전달된 iconTitle이 아이콘의 title 속성으로 적용되어야 함", () => {
    const { getByTestId } = render(
      <Icon iconName="backward" iconTitle="뒤로 가기" />
    );

    const iconContainer = getByTestId("backward").parentElement as Element;

    expect(iconContainer).toHaveAttribute("title", "뒤로 가기");
  });

  it("handlClick이 있는 경우 아이콘을 클릭하는 경우 handleClick이 호출되어야 함 ", () => {
    const handleClick = vi.fn();
    render(
      <Icon
        iconName="backward"
        iconTitle="뒤로 가기"
        handleClick={handleClick}
      />
    );

    const iconContainer = screen.getByTestId("backward")
      .parentElement as Element;
    fireEvent.click(iconContainer);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("handlClick이 없는 경우 아이콘을 클릭하는 경우 handleClick이 호출되지 않음", () => {
    const handleClick = vi.fn();
    render(<Icon iconName="backward" iconTitle="뒤로 가기" />);

    const iconContainer = screen.getByTestId("backward")
      .parentElement as Element;
    fireEvent.click(iconContainer);

    expect(handleClick).toHaveBeenCalledTimes(0);
  });
});
