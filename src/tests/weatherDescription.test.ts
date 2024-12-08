import {describe, expect, it} from "bun:test"
import {getWeatherDescription} from "../utils/weatherDescription";

describe("getWeatherDescription", () => {
    it("should return the correct description for daytime with code 0", () => {
        const result = getWeatherDescription(0, 1);
        expect(result).toEqual({
            description: "Sunny",
            image: "http://openweathermap.org/img/wn/01d@2x.png"
        })
    })

    it("should return the correct description for nighttime with code 0", () => {
        const result = getWeatherDescription(0, 0); // 0 indicates nighttime
        expect(result).toEqual({
            description: "Clear",
            image: "http://openweathermap.org/img/wn/01n@2x.png"
        });
    });
})