import { FC } from "react";
import { TTrack } from "../api/spotifySearchApi";
import styled from "styled-components";
import { formatMs } from "../utils/utils";
import { Link } from "react-router-dom";

type TrackCardsProps = {
  track: TTrack;
};

const TrackCard: FC<TrackCardsProps> = ({ track }) => {
  const formatedTime = formatMs(track.duration_ms);
  const image = track?.album?.images?.[0]?.url ?? "";

  return (
    <Container>
      <Image src={image} />
      <DescriptionContainer>
        <h4>{track.name}</h4>
        <ArtistsContainer>
          {track.artists.map((artist) => (
            <Link key={artist.id} to={`/artist/${artist.id}`}>
              <Artist key={artist.id}>{artist.name}</Artist>
            </Link>
          ))}
        </ArtistsContainer>
      </DescriptionContainer>
      <PlayContainer>
        <h4>{formatedTime}</h4>
        <PlayButton to={track.uri}>Play</PlayButton>
      </PlayContainer>
    </Container>
  );
};

export default TrackCard;

const Container = styled.div`
  display: flex;
  padding: 10px 15px;
  border-radius: 10px;
  justify-content: space-between;
  height: 70px;
  width: 100%;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary}20;
  }
`;

const Image = styled.img`
  border-radius: 10px;
`;

const DescriptionContainer = styled.div`
  width: 100%;
  padding-inline: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const PlayButton = styled(Link)`
  background-color: #1bd407;
  text-align: center;
  border-radius: 10px;
  padding: 5px;

  &:hover {
    background-color: #15a605;
  }
`;

const PlayContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Artist = styled.h5`
  color: ${({ theme }) => theme.colors.secondaryText};
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const ArtistsContainer = styled.div`
  display: flex;
  gap: 10px;
`;
