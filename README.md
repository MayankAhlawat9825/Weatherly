# Weather App

A simple and elegant weather application built with React and Vite that fetches real-time weather data and provides city-wise information, including temperature, sunrise, sunset, cloudiness, wind speed, and overall sky conditions.

## Features

- Search weather by city name
- Displays temperature, wind speed, and cloud conditions
- Shows sunrise and sunset times
- Provides real-time weather updates
- Clean and user-friendly UI

## Technologies Used

- **React + Vite** – Frontend framework and build tool
- **OpenWeather API** (or any weather API of your choice) – For fetching weather data
- **CSS/Tailwind** – For styling

## Installation & Setup

1. Clone the repository:

   ```sh
   git clone https://github.com/yourusername/weather-app.git
   cd weather-app
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Get an API key from [OpenWeatherMap](https://openweathermap.org/api) and create a `.env` file in the root directory:

   ```env
   VITE_WEATHER_API_KEY=your_api_key_here
   ```

4. Start the development server:

   ```sh
   npm run dev
   ```

5. Open the application in your browser:

   ```sh
   http://localhost:5173
   ```

## Usage

- Enter the city name in the search bar to get weather details.
- The app displays real-time weather updates including temperature, cloud conditions, wind speed, and sunrise/sunset timings.

## Deployment

You can deploy this app using:

- **Vercel**
- **Netlify**
- **GitHub Pages**

To build the app for production:

```sh
npm run build
```

Then, deploy the `dist` folder to your hosting service.

## Contributing

Contributions are welcome! Feel free to fork the repository and submit a pull request.

---

Made with ❤️ using React and Vite.

