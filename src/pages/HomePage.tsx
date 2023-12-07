import styled from "styled-components";
import { device } from "../styles/BreakPoints";
import { useState } from "react";
import useDebounce from "../hooks/useDebounce";
import { useSpotifySearch } from "../api/spotifySearchApi";
import LoadingIndicator from "../components/LoadingIndicator";
import SearchInput from "../components/SearchInput";
import TracksContainer from "../components/TracksContainer";
import ArtistsContainer from "../components/ArtistsContainer";
import AlbumsContainer from "../components/AlbumsContainer";
import ErrorMessage from "../components/ErrorMessage";

const HomePage = () => {
  const [search, setSearch] = useState<string>("");
  const debouncedSearch = useDebounce(search.trim(), 500);

  const { data, isLoading, error } = useSpotifySearch(debouncedSearch);

  const searchInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <Wrapper>
      <Heading>Spotify search for tracks, albums and artists </Heading>
      <SearchInput
        value={search}
        onChange={searchInputHandler}
        placeholder="Enter track, artist or album"
      />
      {error && <ErrorMessage value={error.message} />}
      {isLoading && <LoadingIndicator />}
      {data && (
        <ContnetContainer>
          <ArtistsContainer artists={data.artists.items} />
          <AlbumsContainer albums={data.albums.items} />
          <TracksContainer tracks={data.tracks.items} />
        </ContnetContainer>
      )}
    </Wrapper>
  );
};

export default HomePage;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 80px;
  padding: 40px;
  max-width: 1280px;

  @media ${device.md} {
    gap: 30px;
    padding-inline: 10px;
  }
`;

const ContnetContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Heading = styled.h1`
  font-size: 52px;
  text-align: center;
  @media ${device.md} {
    font-size: 32px;
  }
`;
