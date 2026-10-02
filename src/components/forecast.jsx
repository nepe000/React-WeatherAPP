import getWeatherIcon from "../utils/getWeatherIcons";
function ForeCast({ weather }) {
  const weatherUpdates = weather?.daily?.time;
  const weatherMax = weather?.daily?.temperature_2m_max;
  const weatherMin = weather?.daily?.temperature_2m_min;
  const weatherCode = weather?.daily?.weather_code;

  return (
    <section className="forecast-section">
      <div className="forecast-header">
        <h2>7-Day Forecast</h2>
        <span>Daily weather</span>
      </div>

      <div className="forecast-container">
        {weatherUpdates?.map((date, index) => {
          return (
            <div className="forecast-card" key={date}>
              <p className="forecast-day">
                {index === 0
                  ? "Today"
                  : new Date(date).toLocaleDateString("en-US", {
                      weekday: "short", //sat
                    })}
              </p>

              <p className="forecast-date">
                {new Date(date).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric", // oct3
                })}
              </p>

              <div className="forecast-icon">
                <i
                  className={`fa-solid ${getWeatherIcon(weatherCode[index])}`}
                ></i>
              </div>

              <div className="forecast-temperature">
                <strong>{Math.round(weatherMax[index])}°</strong>
                <span>{Math.round(weatherMin[index])}°</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default ForeCast;
