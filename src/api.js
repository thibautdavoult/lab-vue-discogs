import axios from "axios";

const discogs = axios.create({
  baseURL: "https://api.discogs.com",
  httpAgent: "Ironhack Paris rqr-/1.0 +http://localhost",
  params: {
    token: "RHdwDNDfKqRBOLYBmjmTToUILnIltLwkTTJPtvMn"
  }
});

const api = {
  getArtists: (query) => {
    return discogs.get(`/database/search?q=${query}&type=artist`).then(response => {
      return response.data.results;
    });
  },
  getAlbums: (id) => {
    return discogs.get(`/artists/${id}/releases`).then(response => {
      return response.data;
    });
  }
};

export default api;
