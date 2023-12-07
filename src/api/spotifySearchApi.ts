import { AxiosResponse } from "axios";
import { axiosClient } from "./client";
import { useQuery } from "@tanstack/react-query";

export type TSearchResponse = {
  albums: { items: TAlbum[] };
  artists: { items: TSearchArtist[] };
  tracks: { items: TTrack[] };
};

export type TAlbum = {
  id: string;
  name: string;
  artists: TSearchArtist[];
  images: TImage[];
  release_date: string;
};

export type TSearchArtist = {
  id: string;
  name: string;
  images: TImage[] | null;
  followers: { total: number };
};

export type TTrack = {
  id: string;
  name: string;
  artists: TSearchArtist[];
  duration_ms: number;
  album: TAlbum;
  uri: string;
};

export type TImage = {
  height: number;
  width: number;
  url: string;
};

export const spotifySearch = async (query: string) => {
  const url = `/search?q=${encodeURIComponent(
    query
  )}&type=album%2Cartist%2Ctrack&limit=5`;
  const { data }: AxiosResponse<TSearchResponse> = await axiosClient.get(url);

  return data;
};

export const useSpotifySearch = (query: string) => {
  return useQuery({
    queryKey: ["spotifySearch", query],
    queryFn: () => spotifySearch(query),
    enabled: !!query,
    retry: 5,
  });
};
