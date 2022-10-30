import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import SearchVideoItem from "../atoms/SearchVideoItem";
import { getSearchVideos } from "../../redux/slice/searchSlice";
import Loading from "../atoms/Loading";

const Search = () => {
  const { q } = useParams();
  const { loading } = useSelector((state) => state.searchSlice);
  const { videos, channels } = useSelector((state) => state.searchSlice.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSearchVideos({ q }));
  }, [q, dispatch]);

  return (
    <Container>
      {loading ? (
        <Loading />
      ) : (
        videos.map((item, index) => {
          const channel = channels.find((data) => {
            return data.id === item.snippet.channelId;
          });
          return (
            <Link to={`/watch/${item.id}`} key={index}>
              <SearchVideoItem data={item} channel={channel} />
            </Link>
          );
        })
      )}
    </Container>
  );
};

const Container = styled.div`
  padding: 16px 48px;
  max-width: 1400px;
  margin: auto;
  @media screen and (max-width: 800px) {
    padding: 16px 0px;
    margin: 0;
  }
`;

export default Search;
