import { styled } from '../styled-system/jsx';

const SubTitle = styled.h2`
  font-weight: bold;
`

// color: ${(props) => props.color}; // 自前で定義したプロパティは使えない

export default function Content() {
  return (
    <div>
      <h1>Hello, World!</h1>
      <SubTitle color="red">red</SubTitle>
      <SubTitle color="blue">blue</SubTitle>
    </div>
  );
}