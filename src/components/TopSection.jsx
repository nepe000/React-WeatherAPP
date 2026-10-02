function TopSection({ weather }) {
  return (
    <div className="weather-time">
      <p>CURRENT WEATHER</p>

      <p>{weather?.current?.time}</p>
    </div>
  );
}

export default TopSection;
