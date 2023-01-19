const OPEN_WEATHER_API_KEY = "3b26e5ea8067a3c819afadcfb7040620";
const WEATHER_API_KEY = "d9b23100090f4317a35185021231301"

const extractJsonData = async (url) => {
    const data = await fetch(url)
    const dataJson = await data.json();

    return dataJson;
}

const getLatitudeAndLongitude = async (cityName) => {
    const encodedCityName = encodeURI(cityName);

    const data = await extractJsonData(`https://api.openweathermap.org/geo/1.0/direct?q=${encodedCityName}&limit=1&appid=${OPEN_WEATHER_API_KEY}`)
    const { lat, lon } = data[0];
    return { lat, lon }
}

export const getCurrentWeather = async (cityName) => {
    const { lat, lon } = await getLatitudeAndLongitude(cityName);

    const data = await extractJsonData(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${OPEN_WEATHER_API_KEY}`)

    // weatherMain = weather[0].main
    // weatherIMG = weather[0].icon
    // city = name
    // temp = main.temp
    // cloudliness = clouds.all

    return data;
}

export const getTodayWeather = async (cityName) => {
    const { lat, lon } = await getLatitudeAndLongitude(cityName);

    const data = await extractJsonData(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&cnt=8&appid=${OPEN_WEATHER_API_KEY}`)

    // list.map()
    // weatherIMG = weather[0].icon
    // weatherDescription = weather[0].description
    // temp = main.temp
    // time = dt_txt

    return data;
}

export const getDaysWeather = async (cityName) => {
    const { lat, lon } = await getLatitudeAndLongitude(cityName);

    const data = await extractJsonData(`https://api.weatherapi.com/v1/forecast.json?key=${WEATHER_API_KEY}&q=${lat},${lon}&days=7`)

    // forecast.forecastday.map()
    // date = date
    // minTemp = day.mintemp_c
    // maxTemp = day.maxtemp_c
    // weatherDescription = day.condition.text
    // weatherIMG = day.condition.icon

    return data;
}


export const getAirCondition = async (cityName) => {
    const { lat, lon } = await getLatitudeAndLongitude(cityName);

    const data = await extractJsonData(`https://api.weatherapi.com/v1/current.json?key=${WEATHER_API_KEY}&q=${lat},${lon}`);

    // current.map()
    // fellsLikeTemp = feelslike_c
    // CurrentWind = wind_kph
    // PrecipitationMilimeters = precip_mm
    // uvIndex = uv

    return data;
}
