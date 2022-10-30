import { useDispatch, useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { handlesliceAtion } from "../../redux/slice/handleSlice";
import { searchAction } from "../../redux/slice/searchSlice";
import SideBar from "../molecules/SideBar";
import Topnav from "../molecules/Topnav";

const Layout = () => {
  const { showSidebar } = useSelector((state) => state.handleSlice);
  const { toggleSidebar } = handlesliceAtion;
  const navigate = useNavigate();
  const { params } = useSelector((state) => state.searchSlice);
  const { change } = searchAction;
  const dispatch = useDispatch();
  return (
    <Container showSidebar={showSidebar}>
      <Topnav
        toggle={() => dispatch(toggleSidebar())}
        params={params}
        goHome={() => navigate("/")}
        goSearch={() => navigate(`search/${params}`)}
        changeQ={(q) => dispatch(change(q))}
      />
      <SideBar showSidebar={showSidebar} />
      <Outlet />
    </Container>
  );
};

const Container = styled.div`
  min-width: 0px;
  top: 56px;
  bottom: 0;
  left: 0;
  right: 0;
  position: fixed;
  justify-content: center;
  background-color: black;
  overflow-y: scroll;
  margin-left: ${({ showSidebar }) => (showSidebar ? 246 : 72)}px;
  @media screen and (max-width: 810px) {
    margin-left: 0;
  }

  &::-webkit-scrollbar {
    width: 10px;
    background-color: black;
  }
  &::-webkit-scrollbar-thumb {
    background-color: gray;
    border-radius: 10px;
  }
`;

export default Layout;
