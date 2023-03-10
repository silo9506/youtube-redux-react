import styled from "styled-components";
import { ReactComponent as YoutubeLogo } from "../../assets/svg/logo01.svg";
import { ReactComponent as Hamburgericon } from "../../assets/svg/hamburger01.svg";
import { ReactComponent as Searchicon } from "../../assets/svg/search01.svg";
import { ReactComponent as Recording } from "../../assets/svg/recording01.svg";
import { ReactComponent as Dotmenu } from "../../assets/svg/dotmenu01.svg";
import { ReactComponent as Alarm } from "../../assets/svg/alarm01.svg";
import { ReactComponent as Avatar } from "../../assets/svg/avatar01.svg";

const Topnav = ({ params, toggle, changeQ, goHome, goSearch }) => {
  const onChangeValue = (e) => {
    changeQ(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (params === "") return;
    goSearch();
  };

  const onClickLogo = () => {
    goHome();
  };

  return (
    <Container>
      <LogoBox>
        <HamburgerBtn onClick={toggle}>
          <Hamburgericon />
        </HamburgerBtn>
        <Logo onClick={onClickLogo}>
          <YoutubeLogo />
          <span>KR</span>
        </Logo>
      </LogoBox>

      <Searchbar onSubmit={onSubmit}>
        <InputWrapper>
          {/* <IconBtn>
            <Searchicon />
          </IconBtn> */}
          <input
            placeholder="검색"
            onChange={onChangeValue}
            value={params}
          ></input>
        </InputWrapper>
        <button type="submit">
          <Searchicon />
        </button>
      </Searchbar>

      <IconMenu>
        <IconBtn>
          <Recording />
        </IconBtn>
        <IconBtn>
          <Dotmenu />
        </IconBtn>
        <IconBtn>
          <Alarm />
        </IconBtn>
        <IconBtn>
          <Avatar />
        </IconBtn>
      </IconMenu>
    </Container>
  );
};
const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 56px;
  padding: 0 16px;
  display: flex;
  background-color: #202020;
  justify-content: space-between;
  z-index: 100;
  @media screen and (max-width: 350px) {
    padding: 0px;
  }
`;

const LogoBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const IconBtn = styled.div`
  width: 24px;
  height: 24px;
  margin: 0 8px;

  cursor: pointer;
`;

const HamburgerBtn = styled.div`
  width: 24px;
  height: 24px;
  margin: 0 8px;
  cursor: pointer;
  @media screen and (max-width: 350px) {
    display: none;
  }
`;
const Logo = styled.div`
  cursor: pointer;
  position: relative;
  padding: 18px 14px 18px 16px;
  height: 100%;
  width: 127px;
  span {
    position: absolute;
    color: #aaa;
    font-size: 10px;
    top: 0px;
    right: 0px;
    transform: translateX(-50%);
    margin-top: 10px;
  }
  @media screen and (max-width: 350px) {
    padding-left: 0px;
  }
`;

const Searchbar = styled.form`
  justify-content: center;
  width: 100%;
  max-width: 600px;
  display: flex;
  align-items: center;
  flex: 1;
  button {
    cursor: pointer;
    height: 40px;
    width: 64px;
    background-color: #313131;
    padding: 1px 6px;
    border: none;
  }
`;
const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 2px 6px;
  height: 40px;
  background-color: #181818;
  border: 1px solid #313131;
  input {
    margin-right: 31px;
    border: none;
    background-color: unset;
    font-size: 16px;
    color: white;
    outline: none;
    width: 100%;
  }
`;

const IconMenu = styled.div`
  display: flex;
  align-items: center;
  div {
    width: 30px;
    height: 30px;
    margin: 0 15px;
  }
  & div:last-child {
    width: 34px;
    height: 34px;
    svg {
      fill: white;
    }
  }
  @media screen and (max-width: 700px) {
    display: none;
  }
`;

export default Topnav;
