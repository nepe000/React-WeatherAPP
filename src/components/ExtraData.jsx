function ExtraData({ district, weather }) {
  return (
    <div className="extra-data">
      <h3>
        Latitude of {district} : {weather?.latitude}
      </h3>

      <h3>
        Longitude of {district}: {weather?.longitude}
      </h3>

      <p>
        Timezone of {district}: {weather?.timezone}
      </p>

      <p>Current Time : {weather?.current?.time}</p>

      <p>Interval : {weather?.current?.interval}ms</p>

      <p>
        Wind Speed : {weather?.current?.wind_speed_10m}{" "}
        {weather?.current_units?.wind_speed_10m}
      </p>

      <p className="same-css">
        Relative Humidity : {weather?.current?.relative_humidity_2m}%
      </p>

      <p>
        Temperature (Celcius) : {weather?.current?.temperature_2m}
        &deg;
      </p>
    </div>
  );
}

export default ExtraData;
