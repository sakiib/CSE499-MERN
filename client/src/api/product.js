import axios from "axios";

export const createProduct = async (formData) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const response = await axios.post("/api/product", formData, config);

  return response;
};
