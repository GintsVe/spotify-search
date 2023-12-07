import { useQuery } from "@tanstack/react-query";
import { axiosClient } from "./client";
import { TImage, TTrack } from "./spotifySearchApi";
import { AxiosResponse } from "axios";

type SpotifyArtistResponse = {
  id: string;
  followers: { total: number };
  genres: string[];
  images: TImage[];
  name: string;
  uri: string;
  type: string;
};

type SpotifyArtistTopTracksResponse = {
  tracks: TTrack[];
};

export const spotifyArtist = async (id: string | undefined) => {
  const url = `/artists/${id}`;
  const { data }: AxiosResponse<SpotifyArtistResponse> = await axiosClient.get(
    url
  );

  return data;
};

export const spotifyArtistTopTracks = async (id: string | undefined) => {
  const url = `/artists/${id}/top-tracks?market=LV`;
  const { data }: AxiosResponse<SpotifyArtistTopTracksResponse> =
    await axiosClient.get(url);

  return data;
};

export const useSpotifyArtist = (id: string | undefined) => {
  return useQuery({
    queryKey: ["spotifyArtist", id],
    queryFn: () => spotifyArtist(id),
    enabled: !!id,
    retry: 5,
  });
};

export const useSpotifyArtistTracks = (id: string | undefined) => {
  return useQuery({
    queryKey: ["spotifyArtistTopTracks", id],
    queryFn: () => spotifyArtistTopTracks(id),
    enabled: !!id,
    retry: 5,
  });
};
