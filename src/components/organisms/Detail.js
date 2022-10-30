import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import Channelinfo from "../atoms/Channelinfo";
import Videoinfo from "../atoms/Videoinfo";
import Videoitem from "../atoms/Videoitem";
import { getDetailVideos } from "../../redux/slice/detailSlice";
import { handlesliceAtion } from "../../redux/slice/handleSlice";
import Loading from "../atoms/Loading";

const Detail = () => {
  const { id } = useParams();
  const { channels: popularChannels, videos: popularVideos } = useSelector(
    (state) => state.popularSlice.popularVideos
  );
  const { video, channel } = useSelector((state) => state.detailSlice.value);
  const { loading } = useSelector((state) => state.detailSlice);
  const { moredetails } = useSelector((state) => state.handleSlice);
  const { toggledetails } = handlesliceAtion;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDetailVideos({ id }));
  }, [dispatch, id]);

  return (
    <Container>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Vediobox>
            <Vedio>
              <div className="player"></div>
              {
                <iframe
                  title="youtube"
                  width="100%"
                  height="100%"
                  loading="lazy"
                  // src={`//www.youtube.com/embed/${video.id}`}
                  // src={`http://www.youtube.com/embed/${video.id}?enablejsapi=1&origin=http://example.com`}
                  src={`https://www.youtube-nocookie.com/embed/${video.id}`}
                  frameBorder="none"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>
              }
            </Vedio>
            <Videoinfo data={video} channel={channel} />
            <Channelinfo
              data={video}
              channel={channel}
              moredetails={moredetails}
              toggledetails={() => dispatch(toggledetails())}
            />
          </Vediobox>

          <Minilist>
            {popularVideos.map((video) => {
              const channel = popularChannels.find((channel) => {
                return channel.id === video.snippet.channelId;
              });
              return (
                <Link to={`/watch/${video.id}`} key={video.id}>
                  <Videoitem data={video} channel={channel} ismini={true} />
                </Link>
              );
            })}
          </Minilist>
        </>
      )}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  padding: 0 40px;
  padding-top: 24px;
  /* max-width: 1300px; */
  min-width: 0px;
  background-color: black;
  @media screen and (max-width: 400px) {
    padding: 24px 0px;
  }
`;
const Vediobox = styled.div`
  flex: 1;
  padding-right: 24px;
  @media screen and (max-width: 810px) {
    width: 100%;
    height: 100%;
  }
  @media screen and (max-width: 400px) {
    padding: 0px;
  }
`;
const Vedio = styled.div`
  width: 100%;
  height: 500px;
  @media screen and (max-width: 1000px) {
    height: 400px;
  }
  @media screen and (max-width: 800px) {
    height: 300px;
  }
  @media screen and (max-width: 400px) {
    height: 200px;
  }
`;
const Minilist = styled.div`
  flex: 0.5;

  @media screen and (max-width: 1200px) {
    width: 100%;
    min-width: 0px;
    max-width: 350px;
  }
  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

export default Detail;
