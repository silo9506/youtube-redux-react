import styled, { css } from "styled-components";
import { ReactComponent as Dotmenu } from "../../assets/svg/dotmenu02.svg";

const Videoitem = ({ ismini, data, channel }) => {
  const publishedAt = () => {
    const now = () => {
      let date = new Date();
      let year = date.getFullYear();
      let month =
        date.getMonth() + 1 > 9
          ? date.getMonth() + 1
          : "0" + (date.getMonth() + 1);
      let day = date.getDate();
      return `${year}-${month}-${day}`;
    };
    const date1 = new Date(now());
    const date2 = new Date(data.snippet.publishedAt.split("T")[0]);

    const caldate = date1.getTime() - date2.getTime();
    const at = Math.abs(caldate / (1000 * 3600 * 24));

    if (at < 7) {
      if (Math.floor(at) === 0) return "1일전";
      return `${Math.floor(at) + 1}일전`;
    } else if (at > 365) {
      return `${Math.floor(at / 365)}년전`;
    } else if (7 < at < 365) {
      return `${Math.floor(at / 7)}주전`;
    }
  };

  const Counter = (str) => {
    let result = str;
    if (result.length === 4) {
      result = result.slice(0, -3) + "천";
    }
    if (result.length > 4) {
      result = result.slice(0, -4) + "만";
    }
    return result;
  };

  return (
    <Container ismini={ismini}>
      <Thumbnail ismini={ismini} src={data.snippet.thumbnails.medium.url} />
      <Videoinfo>
        {!ismini && <Avater src={channel.snippet.thumbnails.medium.url} />}

        <Textbox ismini={ismini}>
          <Title>{data.snippet.title}</Title>
          <Metadata>{data.snippet.channelTitle}</Metadata>
          <Metadata>
            조회수 {Counter(data.statistics.viewCount)}회 • {publishedAt()}
          </Metadata>
        </Textbox>
        <Iconwrapper>
          <Icon>
            <Dotmenu />
          </Icon>
        </Iconwrapper>
      </Videoinfo>
    </Container>
  );
};
const Container = styled.div`
  cursor: pointer;
  color: white;
  margin: 0px 8px 40px;
  @media screen and (max-width: 650px) {
    padding-bottom: 5px;
    /* border-bottom: 5px solid #202020; */
    margin-bottom: 20px;
    padding-bottom: 20px;
  }

  ${({ ismini }) =>
    ismini &&
    css`
      display: flex;
      margin: 0px;
      margin-bottom: 8px;
    `}
`;
const Thumbnail = styled.img`
  width: 100%;
  margin-bottom: 12px;
  ${({ ismini }) =>
    ismini &&
    css`
      margin-right: 8px;
      height: 94px;
      width: 168px;
      margin-bottom: 0px;
    `}
`;
const Videoinfo = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  flex: 1;
`;

const Avater = styled.img`
  height: 36px;
  border-radius: 50%;
  margin-right: 12px;
`;
const Textbox = styled.div`
  padding-right: 24px;

  font-size: 14px;
  width: 100%;
  ${({ ismini }) =>
    ismini &&
    css`
      margin: 0px;
    `}
`;
const Iconwrapper = styled.div`
  border-radius: 50%;
  position: absolute;
  top: 0px;
  right: 4px;
  transform: translate(50%);
`;
const Title = styled.div`
  position: relative;
  margin-bottom: 6px;
  font-size: 16px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  width: 100%;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;
const Metadata = styled.div`
  font-size: 13px;
  color: #aaa;
  margin-top: 5px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`;
const Icon = styled.div`
  width: 24px;
  height: 24px;
`;

export default Videoitem;
