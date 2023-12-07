import styled from "styled-components";
import TrackCard from "./TrackCard";
import { TTrack } from "../api/spotifySearchApi";
import { FC } from "react";

type TracksContainerProps = {
  tracks: TTrack[];
  areTopTracks?: boolean;
};

const TracksContainer: FC<TracksContainerProps> = ({
  tracks,
  areTopTracks = false,
}) => {
  return (
    <Container>
      <Title>{areTopTracks && "Top"} Tracks</Title>
      {tracks.length ? (
        tracks.map((track) => <TrackCard key={track.id} track={track} />)
      ) : (
        <NotFound>No tracks found</NotFound>
      )}
    </Container>
  );
};

export default TracksContainer;

const Title = styled.h1`
  padding-bottom: 20px;
`;

const Container = styled.div`
  width: 100%;
`;

const NotFound = styled.h2`
  text-align: center;
`;
