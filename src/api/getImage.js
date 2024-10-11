import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com";

export const getImage = async (page, query) => {
  const response = await axios.get("/search/photos", {
    params: {
      client_id: "Ovms8XjiuykomHPmT-kAddixjb8iwbU1Pp9TN1axWMI",
      query: `${query}`,
      page,
      per_page: 12,
    },
  });

  return response.data;
};
