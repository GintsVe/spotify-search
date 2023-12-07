import { useNavigate, useParams } from "react-router-dom";
import {
  useSpotifyArtist,
  useSpotifyArtistTracks,
} from "../api/spotifyArtistApi";
import ErrorScreen from "../components/ErrorScreen";
import PageLoadingIndicator from "../components/PageLoadingIndcator";
import styled from "styled-components";
import { device } from "../styles/BreakPoints";
import BackButton from "../components/BackButton";
import OpenAppButton from "../components/OpenAppButton";
import TracksContainer from "../components/TracksContainer";

const ArtistPage = () => {
  const navigator = useNavigate();
  const { id } = useParams();
  const {
    data: artistData,
    isLoading: artistLoading,
    error: artistError,
  } = useSpotifyArtist(id);
  const {
    data: artistTracksData,
    isLoading: artistTracksLoading,
    error: artistTracksError,
  } = useSpotifyArtistTracks(id);

  const backButtonClickHandler = () => {
    navigator(-1);
  };

  const image = artistData?.images?.[0]?.url ?? "";

  if (artistLoading || artistTracksLoading) {
    return <PageLoadingIndicator />;
  }

  if (artistError) {
    return (
      <ErrorScreen
        error={artistError.message}
        onBackButtonClick={backButtonClickHandler}
      />
    );
  }

  if (artistTracksError) {
    return (
      <ErrorScreen
        error={artistTracksError.message}
        onBackButtonClick={backButtonClickHandler}
      />
    );
  }

  return (
    <>
      {artistData && (
        <Wrapper>
          <BackButton onClick={backButtonClickHandler} />
          <AlbumDetailsContainer>
            <Image src={image} />
            <AlbumDetails>
              <Title>
                {artistData.name} - {artistData.type}
              </Title>
              <Detail>Genres: {artistData.genres.join(", ")}</Detail>
              <Detail>Followers: {artistData.followers.total}</Detail>
            </AlbumDetails>
            <OpenAppButton url={artistData.uri} />
          </AlbumDetailsContainer>
          {artistTracksData && (
            <TracksContainer
              tracks={artistTracksData.tracks}
              areTopTracks={true}
            />
          )}
        </Wrapper>
      )}
    </>
  );
};

export default ArtistPage;

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
