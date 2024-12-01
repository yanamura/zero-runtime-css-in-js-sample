import { styled } from '@linaria/react';

const SubTitle = styled.h2`
  font-weight: bold;
  color: ${(props) => props.color || 'black'};
`;

export default function Content() {
  return (
    <div>
      <h1>Hello, World!</h1>
      <SubTitle color="red">red</SubTitle>
      <SubTitle color="blue">blue</SubTitle>
    </div>
  );
}