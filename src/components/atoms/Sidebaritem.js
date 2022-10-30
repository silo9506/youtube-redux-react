import styled from "styled-components";
const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;
const Name = styled.div`
  font-size: 14px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  flex: 1;
  color: white;
  margin-left: ${({ marginLt }) => marginLt || 16}px;
`;
const Icon = styled.div`
  width: 24px;
  height: 24px;
`;
const Sidebaritem = ({ icon, name, sidebar }) => {
  return (
    <Container>
      <Icon>{icon()}</Icon>
      <Name marginLt={sidebar}>{name}</Name>
    </Container>
  );
};

export default Sidebaritem;
