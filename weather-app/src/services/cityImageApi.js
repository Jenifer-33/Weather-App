const API_KEY = import.meta.env.VITE_UNSPLASH_KEY;

const getCityImage = async (city) => {
  
console.log("Unsplash key:", import.meta.env.VITE_UNSPLASH_KEY);
  const response = await fetch(
    `https://api.unsplash.com/search/photos?query=${city}+landmark&per_page=1&orientation=landscape`,
    {
      headers: {
        Authorization: `Client-ID ${API_KEY}`,
      },
    }
  );
  const data = await response.json();
  return data.results[0]?.urls?.regular || "";
};

export default getCityImage;