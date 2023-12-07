import { FC } from "react";
import { TAlbum } from "../api/spotifySearchApi";
import styled from "styled-components";
import { Link } from "react-router-dom";

type AlbumCardProps = {
  album: TAlbum;
};

const AlbumCard: FC<AlbumCardProps> = ({ album }) => {
  const image = album?.images?.[0]?.url ?? "";

  return (
    <Link to={`/album/${album.id}`}>
      <Container>
        {album.images ? <AlbumImage src={image} /> : <></>}
        <ArtistName>{album.name}</ArtistName>
        <ArtistsContainer>
          {album.artists.map((artist) => (
            <Artist key={artist.id}>{artist.name}</Artist>
          ))}
        </ArtistsContainer>
      </Container>
    </Link>
  );
};

export default AlbumCard;

const Container = styled.div`
  z-index: 5;
  display: flex;
  gap: 10px;
  flex-direction: column;
  width: 200px;
  height: 250px;
  padding: 5px;
  padding-bottom: 20px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.primary}20;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary}30;
    cursor: pointer;
  }
`;

const AlbumImage = styled.img`
  width: 100%;
  height: 70%;
  border-radius: 7px;
  object-fit: cover;
`;

const Artist = styled.h5`
  color: ${({ theme }) => theme.colors.secondaryText};
`;

const ArtistsContainer = styled.div`
  display: flex;
  gap: 10px;
  z-index: 10;
`;

const ArtistName = styled.h4`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
`;
