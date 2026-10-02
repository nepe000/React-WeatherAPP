function WeatherMain({ weather }) {
  return (
    <div className="weather-left">
      <div className="sunny-icon">
        <i className="fa-solid fa-cloud-sun"></i>
      </div>

      <div className="temp-text">
        <div className="main-temperature">
          <span>{weather?.current?.temperature_2m}</span>

          <sup>&deg;</sup>

          <small>{weather?.current_units?.temperature_2m}</small>
        </div>

        <p>Relative Humidity : {weather?.current?.relative_humidity_2m}%</p>
      </div>
    </div>
  );
}

export default WeatherMain;
