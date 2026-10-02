import { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import DistrictSelector from "../components/DistrictSelectorForm";
import districts from "../data/districts";
import WeatherDetails from "../components/WeatherDetails";
import ExtraData from "../components/ExtraData";
import Header from "../components/header";
import WeatherMain from "../components/WeatherMain";
import TopSection from "../components/TopSection";
import useFetch from "../hooks/useFectch";
import ForeCast from "../components/forecast";

function Home() {
  const [district, setSelectedDistrict] = useState("Kathmandu");

  const selectedDistrict = districts[district];

  const latitude = selectedDistrict?.latitude;
  const longitude = selectedDistrict?.longitude;
  const api = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,wind_speed_10m,relative_humidity_2m,weather_code&daily=temperature_2m_max,temperature_2m_min,weather_code`;

  const {
    data: weather,
    loading,
    error,
  } = useFetch({ body: { latitude: latitude, longitude: longitude } });
  if (loading) {
    return <p>Loading Weather...</p>;
  }
  if (error) {
    return <p>Failed to Load Weather</p>;
  }

  return (
    <>
      <Header />

      <div className="actual-data">
        <div className="middle-part">
          <TopSection weather={weather} />
          <DistrictSelector
            district={district}
            setSelectedDistrict={setSelectedDistrict}
          />
          <div>
            <ForeCast weather={weather} />
          </div>
          <div className="weather-main">
            <WeatherMain weather={weather} />
            <WeatherDetails weather={weather} />
          </div>

          <ExtraData district={district} weather={weather} />
        </div>
      </div>
    </>
  );
}

export default Home;
//FLOW AFTER CUSTOM HOOK
// User selects Lalitpur
//         ↓
// setSelectedDistrict("Lalitpur")
//         ↓
// Home re-renders
//         ↓
// district = "Lalitpur"
//         ↓
// latitude/longitude become Lalitpur's coordinates
//         ↓
// api becomes a new URL
//         ↓
// useFetch(api) receives the new URL
//         ↓
// useEffect sees api changed
//         ↓
// fetch()
//         ↓
// setData(result)
//         ↓
// useFetch's state changes
//         ↓
// Home gets the new weather value
//         ↓
// Home re-renders
//         ↓
// weather is passed to child components
//         ↓
// UI displays new weather
