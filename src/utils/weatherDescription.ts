import weatherDescriptions from '../api/weatherDescriptions.json' assert { type: 'json' };

interface WeatherDescription {
    description: string;
    image: string;
}

interface WeatherDescriptions {
    [key: number]: {
        day: WeatherDescription;
        night: WeatherDescription;
    };
}

const weatherDescriptionsTyped: WeatherDescriptions = weatherDescriptions;

export function getWeatherDescription(weather_code: number, is_day: number): WeatherDescription | null {
    const timeOfDay = is_day ? "day" : "night";
    const weatherData = weatherDescriptionsTyped[weather_code];
    if (weatherData && weatherData[timeOfDay]) {
        return weatherData[timeOfDay];
    }
    return null;
}