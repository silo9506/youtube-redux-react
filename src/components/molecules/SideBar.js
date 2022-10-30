import styled from "styled-components";
import { miniList, sidebarList } from "../../data/sidebar";
import Sidebaritem from "../atoms/Sidebaritem";

const SideBar = ({ showSidebar }) => {
  return (
    <Container>
      {showSidebar ? (
        <Big>
          <Contents>
            <List>
              {sidebarList
                .filter((itme, index) => index < 6)
                .map(({ icon, name }, index) => (
                  <Itemwrapper key={index}>
                    <Sidebaritem icon={icon} name={name} sidebar={24} />
                  </Itemwrapper>
                ))}
            </List>
            <List>
              {sidebarList
                .filter((itme, index) => 6 <= index && index < 12)
                .map(({ icon, name }, index) => (
                  <Itemwrapper key={index}>
                    <Sidebaritem icon={icon} name={name} sidebar={24} />
                  </Itemwrapper>
                ))}
            </List>
            <List>
              <Title>구독</Title>
              {sidebarList
                .filter((itme, index) => index === 12)
                .map(({ icon, name }, index) => (
                  <Itemwrapper key={index}>
                    <Sidebaritem icon={icon} name={name} sidebar={24} />
                  </Itemwrapper>
                ))}
            </List>
            <List>
              <Title>YOUTUBE 더보기</Title>
              {sidebarList
                .filter((itme, index) => 12 < index && index < 18)
                .map(({ icon, name }, index) => (
                  <Itemwrapper key={index}>
                    <Sidebaritem icon={icon} name={name} sidebar={24} />
                  </Itemwrapper>
                ))}
            </List>
            <List>
              {sidebarList
                .filter((itme, index) => 18 <= index && index)
                .map(({ icon, name }, index) => (
                  <Itemwrapper key={index}>
                    <Sidebaritem icon={icon} name={name} sidebar={24} />
                  </Itemwrapper>
                ))}
            </List>
          </Contents>
        </Big>
      ) : (
        <Mini>
          {miniList.map(({ icon, name }, index) => (
            <Item key={index}>
              <Icon>{icon()}</Icon>
              <Name>{name}</Name>
            </Item>
          ))}
        </Mini>
      )}
    </Container>
  );
};

const Container = styled.div`
  background-color: #212121;
  position: fixed;
  top: 56px;
  left: 0;
  height: 100%;
  z-index: 1;
`;

const Big = styled.div`
  width: 250px;
  & > :first-child {
    padding-left: 16px;
  }
`;

const Contents = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  overflow: auto;
  &::-webkit-scrollbar-track {
    background-color: #212121;
  }
  &::-webkit-scrollbar {
    width: 10px;
  }
  &:hover {
    &::-webkit-scrollbar-thumb {
      background-color: gray;
      border-radius: 10px;
    }
  }
`;
const List = styled.ul`
  list-style: none;
  padding: 12px 0px;
  margin: 0px;
  border-bottom: 1px solid rgba(133, 120, 120, 0.356);
`;
const Itemwrapper = styled.div`
  padding: 0 24px;
  height: 40px;
  display: flex;
  align-items: center;
  &:hover {
    background-color: #353232;
  }
`;
const Title = styled.div`
  color: #aaa;
  padding: 8px 24px;
`;

//

const Mini = styled.div`
  width: 72px;
  background-color: #202020;
  @media screen and (max-width: 810px) {
    display: none;
  }
`;

const Item = styled.div`
  padding: 16px 0 14px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Name = styled.div`
  text-align: center;
  width: 100%;
  font-size: 10px;
  color: white;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-top: 6px;
`;
const Icon = styled.div`
  width: 24px;
  height: 24px;
`;

export default SideBar;
