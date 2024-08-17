

export function DailyWeatherCard( {day} ) {

    const date = new Date(day.dt * 1000).toLocaleDateString([], {weekday: 'long', month: 'short', day: 'numeric'})

    return(
        <div className="bg-white shadow-lg rounded-lg p-4
        flex flex-col items-center text-center min-w-56"
        >
            <p className="text-lg font-semibold text-black">{date}</p>
            <div className="bg-blue-100 rounded-full p-2">
                <img src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
                    alt="Weather Icon"
                    className="w-12 h-12"
                />
            </div>
            <p className="text-2xl font-bold my-4">{day.temp.day.toFixed(1)}°F</p>
            <p className="text-sm text-gray-600">{day.summary}</p>
            <div className="flex justify-between w-full mt-2">
                <p className="text-sm text-gray-600">Min: {day.temp.min.toFixed(1)}°F</p>
                <p className="text-sm text-gray-600">Max: {day.temp.max.toFixed(1)}°F</p>
            </div>
        </div>
    )
}