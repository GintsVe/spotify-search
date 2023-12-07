import { useQuery } from "@tanstack/react-query";
import { axiosClient } from "./client";
import { TImage, TSearchArtist, TTrack } from "./spotifySearchApi";
import { AxiosResponse } from "axios";

type SpotifyAlbumResponse = {
  id: string;
  images: TImage[];
  name: string;
  label: "";
  total_tracks: number;
  tracks: { items: TTrack[] };
  release_date: string;
  artists: TSearchArtist[];
  uri: string;
  type: string;
};

export const spotifyAlbum = async (id: string | undefined) => {
  const url = `/albums/${id}`;
  const { data }: AxiosResponse<SpotifyAlbumResponse> = await axiosClient.get(
    url
  );

  return data;
};

export const useSpotifyAlbum = (id: string | undefined) => {
  return useQuery({
    queryKey: ["spotifyAlbum", id],
    queryFn: () => spotifyAlbum(id),
    enabled: !!id,
    retry: 5,
  });
};
