import config from "../config";

export const getPlayer = async (name) => {
  try {
    const res = await fetch(`${config.BASE_URL}/players?search=${name}`);
    const data = await res.json();
    return data;
  } catch (err) {
    console.error("API error:", err);
  }
};

export const getMatch = async () => {
  try {
    const res = await fetch(`${config.BASE_URL}/matches`);
    return await res.json();
  } catch (err) {
    console.error(err);
  }
};