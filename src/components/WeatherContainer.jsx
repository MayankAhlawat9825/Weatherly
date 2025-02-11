import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

function WeatherContainer() {
    const searchQuery = useSelector((state) => state.data);
    const [locData, setLocData] = useState(null);

    useEffect(() => {
        if (!searchQuery) return;

        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchQuery}&appid=f00c38e0279b7bc85480c3fe775d518c&units=metric`)
            .then((response) => response.json())
            .then((locationData) => setLocData(locationData))
            .catch((error) => console.error("Error fetching weather:", error));
    }, [searchQuery]);

    // Function to get background color based on weather
    const getWeatherBackground = () => {
        if (!locData) return "bg-gray-800"; // Default
        const mainWeather = locData.weather[0].main.toLowerCase();
        if (mainWeather.includes("cloud")) return "bg-blue-500";
        if (mainWeather.includes("rain")) return "bg-gray-700";
        if (mainWeather.includes("clear")) return "bg-yellow-400";
        return "bg-gray-800";
    };

    // Convert UNIX timestamp to readable time
    const formatTime = (timestamp) => {
        const date = new Date(timestamp * 1000);
        return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });
    };

    return (
        <div className={`flex justify-center items-center h-screen ${getWeatherBackground()} transition-all duration-500`}>
            <div className="bg-white/10 backdrop-blur-lg shadow-lg rounded-3xl p-8 w-3/4 max-w-4xl text-white text-center border border-white/20">
                {locData ? (
                    <div>
                        {/* City Name & Weather Description */}
                        <h2 className="text-4xl font-bold">{locData.name}</h2>
                        <p className="text-xl italic">{locData.weather[0].description}</p>

                        {/* Weather Icon */}
                        <div className="flex justify-center my-6">
                            <img
                                src={`https://openweathermap.org/img/wn/${locData.weather[0].icon}@2x.png`}
                                alt="Weather Icon"
                                className="w-24 h-24"
                            />
                        </div>

                        {/* Weather Data Grid */}
                        <div className="grid grid-cols-3 gap-6 text-lg">
                            <div className="bg-white/20 p-4 rounded-lg">
                                <p className="font-semibold">Temp</p>
                                <p className="text-2xl">{locData.main.temp}°C</p>
                            </div>
                            <div className="bg-white/20 p-4 rounded-lg">
                                <p className="font-semibold">Humidity</p>
                                <p className="text-2xl">{locData.main.humidity}%</p>
                            </div>
                            <div className="bg-white/20 p-4 rounded-lg">
                                <p className="font-semibold">Wind</p>
                                <p className="text-2xl">{locData.wind.speed} m/s</p>
                            </div>
                            <div className="bg-white/20 p-4 rounded-lg">
                                <p className="font-semibold">Pressure</p>
                                <p className="text-2xl">{locData.main.pressure} hPa</p>
                            </div>
                        </div>

                        {/* Sunrise & Sunset */}
                        <div className="mt-8 flex justify-center gap-12 text-lg">
                            <div className="flex flex-col items-center">
                                <span className="text-4xl">🌅</span>
                                <p className="font-semibold">Sunrise</p>
                                <p className="text-xl">{formatTime(locData.sys.sunrise)}</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <span className="text-4xl">🌇</span>
                                <p className="font-semibold">Sunset</p>
                                <p className="text-xl">{formatTime(locData.sys.sunset)}</p>
                            </div>
                        </div>

                    </div>
                ) : (
                    <p className="text-xl">Fetching Weather Data...</p>
                )}
            </div>
        </div>
    );
}

export default WeatherContainer;
