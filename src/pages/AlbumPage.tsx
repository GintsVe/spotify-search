import { Link, useNavigate, useParams } from "react-router-dom";
import { useSpotifyAlbum } from "../api/spotifyAlbumApi";
import styled from "styled-components";
import TracksContainer from "../components/TracksContainer";
import PageLoadingIndicator from "../components/PageLoadingIndcator";
import OpenAppButton from "../components/OpenAppButton";
import { device } from "../styles/BreakPoints";
import BackButton from "../components/BackButton";
import ErrorScreen from "../components/ErrorScreen";

const AlbumPage = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useSpotifyAlbum(id);
  const navigator = useNavigate();

  const image = data?.images?.[0]?.url ?? "";

  const backButtonClickHandler = () => {
    navigator(-1);
  };

  if (isLoading) {
    return <PageLoadingIndicator />;
  }

  if (error) {
    return (
      <ErrorScreen
        error={error.message}
        onBackButtonClick={backButtonClickHandler}
      />
    );
  }

  return (
    <>
      {data && (
        <Wrapper>
          <BackButton onClick={backButtonClickHandler} />
          <AlbumDetailsContainer>
            <Image src={image} />
            <AlbumDetails>
              <Title>
                {data.name} - {data.type}
              </Title>
              <AlbumsArtistsContainer>
                Artists:
                {data.artists.map((artist) => (
                  <Link key={artist.id} to={`/artist/${artist.id}`}>
                    <Detail>{artist.name}</Detail>
                  </Link>
                ))}
              </AlbumsArtistsContainer>
              <Detail>Total tracks: {data.total_tracks}</Detail>
              <Detail>Release date: {data.release_date}</Detail>
            </AlbumDetails>
            <OpenAppButton url={data.uri} />
          </AlbumDetailsContainer>
          <TracksContainer tracks={data.tracks.items} />
        </Wrapper>
      )}
    </>
  );
};

export default AlbumPage;

const Wrapper = styled.div`
  padding-top: 40px;
  padding-inline: 15px;
`;

const AlbumDetailsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
  gap: 50px;
  width: 100%;
  padding-bottom: 20px;

  @media ${device.sm} {
    flex-wrap: wrap;
    gap: 10px;
  }
`;

const AlbumDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const AlbumsArtistsContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const Detail = styled.h4`
  font-weight: 300;
`;

const Image = styled.img`
  width: 25vw;
  height: 25vw;
  object-fit: cover;

  @media ${device.sm} {
    width: 50vw;
    height: 50vw;
  }

  @media ${device.xs} {
    width: 100vw;
    height: 100vw;
  }
`;

const Title = styled.h1`
  padding-bottom: 10px;

  @media ${device.sm} {
    font-size: 20px;
  }
`;
