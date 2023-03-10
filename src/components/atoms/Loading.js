import styled, { keyframes } from "styled-components";

const Loading = () => {
  return (
    <Container>
      <LodingBox>
        <div></div>
      </LodingBox>
    </Container>
  );
};

const Container = styled.div`
  min-height: calc(100vh - 56px);
  width: 100%;
  background-color: black;
  position: relative;
  padding-bottom: 32px;
`;

const spin = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }

`;
const LodingBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 1;
  transform: translate(-50%, -50%);
  div {
    width: 120px;
    height: 120px;
    border: 16px solid #212121;
    border-radius: 50%;
    border-top: 16px solid red;
    animation: ${spin} 2s linear infinite;
  }
`;

export default Loading;
