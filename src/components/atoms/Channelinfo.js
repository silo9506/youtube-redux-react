import { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  color: white;
  border-top: 1px solid #353535f5;
  border-bottom: 1px solid #353535f5;
  padding: 16px 0px;
  font-size: 14px;
`;
const Info = styled.div``;
const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
`;
const Title = styled.div`
  flex: 1;
`;
const Name = styled.div``;
const Meta = styled.div`
  font-size: 12px;
  color: #aaa;
  padding-top: 5px;
`;
const Avater = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  margin-right: 16px;
`;
const Btn = styled.button`
  background-color: #cc0000;
  border: none;
  color: white;
  border-radius: 2px;
  padding: 10px 16px;
  min-width: 70px;
`;
const Description = styled.div`
  padding-left: 60px;
`;
const Text = styled.div`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: ${({ isShow }) => (isShow === false ? 3 : "none")};
  overflow: hidden;
  white-space: pre-wrap;
`;
const Moretext = styled.div`
  font-size: 12px;
  color: #aaa;
  padding-top: 5px;
  cursor: pointer;
`;
const Channelinfo = ({ data, channel, moredetails, toggledetails }) => {
  const text = data.snippet.localized.description;

  const Counter = (str) => {
    if (str === undefined) return;
    let result = "구독자" + str + "명";
    if (result.length === 4) {
      result = "구독자" + result.slice(0, -3) + "천명";
    }
    if (result.length > 4) {
      result = "구독자" + result.slice(0, -4) + "만명";
    }

    return result;
  };
  return (
    <Container>
      <Info>
        <TitleWrapper>
          <Avater src={channel.snippet.thumbnails.high.url} />
          <Title>
            <Name>{channel.snippet.localized.title}</Name>
            <Meta>{Counter(channel.statistics.subscriberCount)}</Meta>
          </Title>
          <Btn>구독</Btn>
        </TitleWrapper>
      </Info>
      <Description>
        <Text isShow={moredetails}>{text}</Text>
        <Moretext onClick={() => toggledetails()}>
          {moredetails ? "간략히" : "더보기"}
        </Moretext>
      </Description>
    </Container>
  );
};

export default Channelinfo;
