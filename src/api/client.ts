import axios from "axios";

const SPOTIFY_API_BASE = "https://api.spotify.com/v1";
const clientId = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
const clientSecret = import.meta.env.VITE_SPOTIFY_CLIENT_SECRET;

const removeAccessToken = () => {
  localStorage.removeItem("access_token");
};

const setAccessToken = (data: string) => {
  localStorage.setItem("access_token", data);
};

const getAccessToken = () => {
  return localStorage.getItem("access_token");
};

export const getNewAccessToken = async () => {
  const base64Credentials = btoa(`${clientId}:${clientSecret}`);
  const response = await axios.post(
    "https://accounts.spotify.com/api/token",
    "grant_type=client_credentials",
    {
      headers: {
        Authorization: `Basic ${base64Credentials}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }
  );

  return response.data;
};

export const axiosClient = axios.create({
  baseURL: SPOTIFY_API_BASE,
});

axiosClient.interceptors.request.use(
  async (config) => {
    try {
      const token = getAccessToken();

      if (token) {
        config.headers["Authorization"] = `Bearer ${token}`;
      }

      return config;
    } catch (error) {
      return Promise.reject(error);
    }
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const config = error?.config;
    const status = error?.response?.status;

    if (status === 401 && !config?.sent) {
      config.sent = true;

      try {
        const result = await getNewAccessToken();

        if (result) {
          const token = result.access_token;

          config.headers = {
            ...config.headers,
            authorization: `Bearer ${token}`,
          };

          setAccessToken(token);

          return axios(config);
        } else {
          removeAccessToken();
        }
      } catch (error) {
        removeAccessToken();
        return Promise.reject(error);
      }
    }

    return Promise.reject(error);
  }
);
