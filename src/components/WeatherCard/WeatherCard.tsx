import {CurrentWeather} from "../../App";
import {getWeatherDescription} from "../../utils/weatherDescription";
import './weatherCard.css'



interface WeatherCardProps {
    weather: CurrentWeather;
}

const WeatherCard = ({ weather }: WeatherCardProps)  => {
const { temperature_2m, weather_code, is_day } = weather;
const weatherDetails = getWeatherDescription(weather_code, is_day);

    return (
      <figure className={"weather-card"}>
          <img src={weatherDetails?.image} alt={weatherDetails?.description} width="100" height="100"  className={"weather-card__img"} />
          <figcaption className={"weather-card__description"}>
              <p>
                  <strong>{weatherDetails?.description}</strong>
              </p>
              <p>Temperature: {temperature_2m}</p>
          </figcaption>
      </figure>
    )
}

export default WeatherCard;