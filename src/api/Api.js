const OPEN_WEATHER_API_KEY = "76c066754b3109f283771146a63a3fee";

const extractJsonData = async (url) => {
    const data = await fetch(url)
    const dataJson = await data.json();

    return dataJson;
}

const getLatitudeAndLongitude = async (cityName) => {
    const encodedCityName = encodeURI(cityName);

    const data = await extractJsonData(`http://api.openweathermap.org/geo/1.0/direct?q=${encodedCityName}&limit=1&appid=${OPEN_WEATHER_API_KEY}`)

    const { lat, lon } = data[0];
    return { lat, lon }
}

export const getCurrentWeather = async (cityName) => {
    const { lat, lon } = await getLatitudeAndLongitude(cityName)

    const data = await extractJsonData(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${OPEN_WEATHER_API_KEY}`)

    // weatherMain = data.weather[0].main
    // weatherIMG = data.weather[0].icon
    // city = data.name
    // temp = data.main.temp
    // cloudliness = data.clouds.all

    return data;
}

export const getTodayWeather = async (cityName) => {
    const { lat, lon } = await getLatitudeAndLongitude(cityName)

    const data = await extractJsonData(``)
}