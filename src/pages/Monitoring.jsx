import { Box, Grid, Typography } from "@mui/material";
import { CardCustom } from "../components/organism/CardCustom";
import { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { showErrorNotification } from "../utils/myToast";
import axios from "axios";

export const Monitoring = () => {
  const [weatherData, setWeatherData] = useState({});
  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await axios.get(
          "https://api.open-meteo.com/v1/forecast",
          {
            params: {
              latitude: 1.36,
              longitude: 103.82,
              minutely_15:
                "temperature_2m,relative_humidity_2m,sunshine_duration,wind_speed_10m,wind_direction_10m,wind_gusts_10m,shortwave_radiation,direct_radiation",
              daily:
                "daylight_duration,sunshine_duration,rain_sum,snowfall_sum",
              timezone: "Asia/Singapore",
              past_minutely_15: 6,
              forecast_minutely_15: 24,
            },
          }
        );
        setWeatherData(response.data);
      } catch (err) {
        showErrorNotification(err.response.data.reason);
      }
    };

    fetchWeatherData();
  }, []);

  const dailyData = weatherData.daily?.time.map((time, index) => ({
    time: time,
    daylight_duration: weatherData.daily.daylight_duration[index],
    sunshine_duration: weatherData.daily.sunshine_duration[index],
    rain_sum: weatherData.daily.rain_sum[index],
    snowfall_sum: weatherData.daily.snowfall_sum[index],
  }));
  const windData = weatherData.minutely_15?.time.map((time, index) => ({
    time: time,
    wind_speed_10m: weatherData.minutely_15.wind_speed_10m[index],
    wind_direction_10m: weatherData.minutely_15.wind_direction_10m[index],
    wind_gusts_10m: weatherData.minutely_15.wind_gusts_10m[index],
  }));
  const sunshineData = weatherData.minutely_15?.time.map((time, index) => ({
    time: time,
    temperature_2m: weatherData.minutely_15.temperature_2m[index],
    relative_humidity_2m: weatherData.minutely_15.relative_humidity_2m[index],
    sunshine_duration: weatherData.minutely_15.sunshine_duration[index],
    shortwave_radiation: weatherData.minutely_15.shortwave_radiation[index],
    direct_radiation: weatherData.minutely_15.direct_radiation[index],
  }));
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <Typography sx={{ fontSize: "1.7rem", fontWeight: 600 }}>
        Monitoring Dashboard
      </Typography>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
          alignContent: "start",
        }}
      >
        <Box>
          <Typography>Latitude : {weatherData.latitude}</Typography>
          <Typography>Longitude : {weatherData.longitude}</Typography>
          <Typography>
            Timezone : {weatherData.timezone} (
            {weatherData.timezone_abbreviation})
          </Typography>
          <Typography>Elevation : {weatherData.elevation}</Typography>
        </Box>
        <CardCustom>
          <div>
            <Typography variant="h6">Current Weather Forecast</Typography>
            <Typography sx={{ fontSize: "2rem", fontWeight: 700 }}>
              Sunny Cloudy
            </Typography>
          </div>
        </CardCustom>
      </Box>

      <CardCustom>
        <Typography variant="h6" gutterBottom>
          Daily Weather
        </Typography>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={dailyData}>
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="time" tick={{ fontSize: 10 }} />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="daylight_duration"
              stroke="#82ca9d"
              name="Daylight Duration (s)"
              dot={false}
            />
            <Line
              type="monotone"
              dataKey="sunshine_duration"
              stroke="#8d82ca"
              name="Sunshine Duration (s)"
              dot={false}
            />
            <Line
              type="monotone"
              dataKey="rain_sum"
              stroke="#cac982"
              name="Rain Sum (mm)"
              dot={false}
            />
            <Line
              type="monotone"
              dataKey="snowfall_sum"
              stroke="#ca8282"
              name="Snowfall Sum (cm)"
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardCustom>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <CardCustom>
            <Typography variant="h6" gutterBottom>
              Wind Data/6h
            </Typography>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={windData}>
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey="time" tick={{ fontSize: 10 }} />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="wind_speed_10m"
                  stroke="#82ca9d"
                  name="Wind Speed (km/h)"
                  dot={false}
                />
                <Line
                  type="monotone"
                  dataKey="wind_direction_10m"
                  stroke="#8d82ca"
                  name="Wind Direction (deg)"
                  dot={false}
                />
                <Line
                  type="monotone"
                  dataKey="wind_gusts_10m"
                  stroke="#ca8282"
                  name="Wind Gust (Km/h)"
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardCustom>
        </Grid>

        <Grid item xs={12} md={6}>
          <CardCustom>
            <Typography variant="h6" gutterBottom>
              Sunshine Weather
            </Typography>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={sunshineData}>
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey="time" tick={{ fontSize: 10 }} />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="temperature_2m"
                  stroke="#82ca9d"
                  name="Temperature (deg)"
                  dot={false}
                />
                <Line
                  type="monotone"
                  dataKey="relative_humidity_2m"
                  stroke="#8d82ca"
                  name="Humidity (%)"
                  dot={false}
                />
                <Line
                  type="monotone"
                  dataKey="sunshine_duration"
                  stroke="#ca8282"
                  name="Sunshine Duration (s)"
                  dot={false}
                />
                <Line
                  type="monotone"
                  dataKey="shortwave_radiation"
                  stroke="#ca82b2"
                  name="Shortwave Radiation (W/m2)"
                  dot={false}
                />
                <Line
                  type="monotone"
                  dataKey="direct_radiation"
                  stroke="#cabf82"
                  name="Direct Radiation (W/m2)"
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardCustom>
        </Grid>
      </Grid>
    </Box>
  );
};
