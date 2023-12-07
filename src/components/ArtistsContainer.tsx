import { FC } from "react";
import { TSearchArtist } from "../api/spotifySearchApi";
import styled from "styled-components";
import ArtistCard from "./ArtistCard";

type ArtistsContainerProps = {
  artists: TSearchArtist[];
};

const ArtistsContainer: FC<ArtistsContainerProps> = ({ artists }) => {
  return (
    <Container>
      <Title>Artists</Title>
      <ArtistsWrapper>
        {artists.length ? (
          artists.map((artist) => (
            <ArtistCard key={artist.id} artist={artist} />
          ))
        ) : (
          <h2>No artists found</h2>
        )}
      </ArtistsWrapper>
    </Container>
  );
};

export default ArtistsContainer;

const Container = styled.div`
  width: 100%;
`;

const Title = styled.h1`
  padding-bottom: 20px;
`;

const ArtistsWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;
`;
