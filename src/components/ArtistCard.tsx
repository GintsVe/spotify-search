import { FC } from "react";
import { TSearchArtist } from "../api/spotifySearchApi";
import styled from "styled-components";
import { Link } from "react-router-dom";

type ArtistCardProps = {
  artist: TSearchArtist;
};

const ArtistCard: FC<ArtistCardProps> = ({ artist }) => {
  const image = artist?.images?.[0]?.url ?? "";

  return (
    <Link to={`/artist/${artist.id}`}>
      <Container>
        {image ? <ArtistImage src={image} /> : <></>}
        <ArtistName>{artist.name}</ArtistName>
        <FollowerCount>Followers: {artist.followers.total}</FollowerCount>
      </Container>
    </Link>
  );
};

export default ArtistCard;

const Container = styled.div`
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

const ArtistName = styled.h4`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
`;

const ArtistImage = styled.img`
  width: 100%;
  height: 70%;
  border-radius: 7px;
  object-fit: cover;
`;

const FollowerCount = styled.h5`
  color: ${({ theme }) => theme.colors.secondaryText};
`;
