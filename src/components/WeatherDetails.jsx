function WeatherDetails({ weather }) {
  return (
    <div className="weather-details">
      <div className="detail-row">
        <span>Wind</span>

        <strong>
          {weather?.current?.wind_speed_10m}{" "}
          {weather?.current_units?.wind_speed_10m}
        </strong>
      </div>

      <div className="detail-row">
        <span>Relative Humidity</span>

        <strong>{weather?.current?.relative_humidity_2m}%</strong>
      </div>

      <div className="detail-row">
        <span>Latitude</span>

        <strong>{weather?.latitude}</strong>
      </div>

      <div className="detail-row">
        <span>Longitude</span>

        <strong>{weather?.longitude}</strong>
      </div>
    </div>
  );
}

export default WeatherDetails;
