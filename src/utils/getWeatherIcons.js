const getWeatherIcon = (code) => {
  switch (code) {
    case 0:
      return "fa-sun";

    case 1:
    case 2:
      return "fa-cloud-sun";

    case 3:
      return "fa-cloud";

    case 45:
    case 48:
      return "fa-smog";

    case 51:
    case 53:
    case 55:
    case 56:
    case 57:
      return "fa-cloud-rain";

    case 61:
    case 63:
    case 65:
    case 66:
    case 67:
      return "fa-cloud-rain";

    case 71:
    case 73:
    case 75:
    case 77:
    case 85:
    case 86:
      return "fa-snowflake";

    case 80:
    case 81:
    case 82:
      return "fa-cloud-showers-heavy";

    case 95:
    case 96:
    case 97:
    case 99:
      return "fa-cloud-bolt";

    default:
      return "fa-cloud";
  }
};

export default getWeatherIcon;
