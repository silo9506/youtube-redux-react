import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Videoitem from "../atoms/Videoitem";
import { getPopularVideos } from "../../redux/slice/popularSlice";
import Loading from "../atoms/Loading";

const Index = () => {
  const { channels, videos, loading } = useSelector(
    (state) => state.popularSlice.popularVideos
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPopularVideos({ chart: "mostPopular" }));
  }, [dispatch]);

  return (
    <Container>
      {loading ? (
        <Loading />
      ) : (
        <List>
          {videos.map((video) => {
            const channel = channels.find((channel) => {
              return channel.id === video.snippet.channelId;
            });
            return (
              <Link to={`/watch/${video.id}`} key={video.id}>
                <Videoitem data={video} channel={channel} />
              </Link>
            );
          })}
        </List>
      )}
    </Container>
  );
};

const Container = styled.div`
  padding-top: 24px;
  background-color: black;
`;

const List = styled.div`
  margin: 0 16px;
  display: grid;
  grid-gap: 15px;
  grid-template-columns: repeat(4, 1fr);
  @media screen and (max-width: 1150px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (max-width: 880px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 510px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export default Index;
