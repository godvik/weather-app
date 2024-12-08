import WeatherCard from "./components/WeatherCard/WeatherCard";
import {useQuery} from "@tanstack/react-query";

export interface Weather {
    current: CurrentWeather;
}

export interface CurrentWeather {
    temperature_2m: number,
    is_day: number,
    weather_code: number,
}


function App() {
    const {isPending, isError, data, error} = useQuery({
        queryKey: ['weatherData'],
        queryFn: async (): Promise<CurrentWeather> => {
            const response = await fetch("https://api.open-meteo.com/v1/forecast?latitude=60.397076&longitude=5.324383&current=temperature_2m,is_day,weather_code&forecast_days=1")
            if (!response.ok) {
                throw new Error('Unable to fetch data')
            }
            const weather: Weather = await response.json();
            return weather.current;
        }
    });

    if (isPending) {
        return <span>Loading...</span>
    }

    if (isError) {
        return <span>Error: {error?.message}</span>
    }

    return (
        <>
            <main>
                <h1>The current weather at Bryggen, Bergen</h1>
                <WeatherCard weather={data}/>
            </main>
        </>
    )
}

export default App
