import { useEffect, useState } from "react";

function useFetch({ body }) {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const baseurl = `https://api.open-meteo.com/v1/`;
  const weatherUrl = `forecast?latitude=${body.latitude}&longitude=${body.longitude}&current=temperature_2m,wind_speed_10m,relative_humidity_2m,weather_code&daily=temperature_2m_max,temperature_2m_min,weather_code`;
  const endpoint = `${baseurl}/${weatherUrl}`;
  useEffect(() => {
    const fetchData = async () => {
      setError(null);
      try {
        const response = await fetch(endpoint);
        if (!response.ok) {
          throw new Error("Failed to fetch the weather data");
        }

        const result = await response.json();

        setData(result);
      } catch (e) {
        console.log("There is a error fetching the api", e);
        setError(e);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [endpoint]);
  return { data, loading, error };
}
export default useFetch;
//flow kasari data aaauxa
// Response object
// ↓
// response.json()
// ↓
// read response body + parse JSON
// ↓
// JavaScript object
