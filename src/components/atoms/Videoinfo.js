import styled from "styled-components";
import { ReactComponent as Like } from "../../assets/svg/like01.svg";
import { ReactComponent as Hate } from "../../assets/svg/hate01.svg";
import { ReactComponent as Playlist } from "../../assets/svg/playlist01.svg";
import { ReactComponent as Share } from "../../assets/svg/share01.svg";
import { ReactComponent as Dotmenu } from "../../assets/svg/dotmenu03.svg";

const Container = styled.div`
  color: white;
  padding: 20px 0px 8px 0px;
`;
const Tag = styled.span`
  font-size: 12px;
  color: #3ea6ff;
`;
const Title = styled.div`
  font-size: 18px;

  @media screen and (max-width: 800px) {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }
`;
const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Meta = styled.div`
  color: #aaa;
  font-size: 14px;
  flex: 1;
  @media screen and (max-width: 650px) {
    font-size: 12px;
  }
  @media screen and (max-width: 610px) {
    font-size: 10px;
  }
  @media screen and (max-width: 580px) {
    display: none;
  }
`;
const Iconbox = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 650px) {
    margin-right: auto;
  }
`;
const Iconwrapper = styled.div`
  padding: 6px;
  margin-left: 6px;
`;
const Icon = styled.div`
  width: 24px;
  height: 24px;
`;

const Videoinfo = ({ data }) => {
  const publishedAt = data.snippet.publishedAt.split("T");
  const viewCount = data.statistics.viewCount.replace(
    /(\d)(?=(?:\d{3})+(?!\d))/g,
    "$1,"
  );

  const Counter = (str) => {
    if (str === undefined) return;
    let result = str;
    if (result.length > 4) {
      result = result.slice(0, -4) + "만";
    }
    if (result.length > 3) {
      result = result.slice(0, -3) + "천";
    }
    return result;
  };

  return (
    <Container>
      {data.snippet.tags !== undefined &&
        data.snippet.tags
          .filter((itme, index) => index < 6)
          .map((item, index) => <Tag key={index}>#{item}</Tag>)}

      <Title>{data.snippet.title}</Title>
      <Info>
        <Meta>
          조회수{viewCount}회 • {publishedAt[0]}
        </Meta>
        <Iconbox>
          <Iconwrapper>
            <Icon>
              <Like />
            </Icon>
          </Iconwrapper>
          {Counter(data.statistics.likeCount)}
          <Iconwrapper>
            <Icon>
              <Hate />
            </Icon>
          </Iconwrapper>
          싫어요
          <Iconwrapper>
            <Icon>
              <Playlist />
            </Icon>
          </Iconwrapper>
          공유
          <Iconwrapper>
            <Icon>
              <Share />
            </Icon>
          </Iconwrapper>
          저장
          <Iconwrapper>
            <Icon>
              <Dotmenu />
            </Icon>
          </Iconwrapper>
        </Iconbox>
      </Info>
    </Container>
  );
};

export default Videoinfo;
