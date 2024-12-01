import { styled } from "@kuma-ui/core";

const SubTitle = styled.h2`
  font-weight: bold;
`;

// color: ${(props) => props.color}; // 自前で定義したプロパティは使えない

export default function Content() {
  return (
    <div>
      <h1>Hello, World!</h1>
      <SubTitle color="red">red</SubTitle>{/** colorはKumaUIのUtility Props(https://www.kuma-ui.com/docs/Components/UtilityProps#color) */}
      <SubTitle color="blue">blue</SubTitle>
    </div>
  );
}