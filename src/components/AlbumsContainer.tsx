import { FC } from "react";
import { TAlbum } from "../api/spotifySearchApi";
import styled from "styled-components";
import AlbumCard from "./AlbumCard";

type AlbumsContainerProps = {
  albums: TAlbum[];
};

const AlbumsContainer: FC<AlbumsContainerProps> = ({ albums }) => {
  return (
    <Container>
      <Title>Albums</Title>
      <AlbumsWrapper>
        {albums.length ? (
          albums.map((album) => <AlbumCard key={album.id} album={album} />)
        ) : (
          <h2>No albums found</h2>
        )}
      </AlbumsWrapper>
    </Container>
  );
};

export default AlbumsContainer;

const Container = styled.div`
  width: 100%;
`;

const Title = styled.h1`
  padding-bottom: 20px;
`;

const AlbumsWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;
`;
