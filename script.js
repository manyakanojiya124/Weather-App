const apiKey = process.env.WHEATHERAPI;

async function getWeather() {
  const location = document.getElementById("locationInput").value;
  const resultDiv = document.getElementById("weatherResult");

  if (!location) {
    resultDiv.innerHTML = "❗ Please enter a location.";
    return;
  }

  try {
    const response = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=yes`
    );

    if (!response.ok) throw new Error("City not found");

    const data = await response.json();
    const temp = data.current.temp_c;
    const city = data.location.name;
    const country = data.location.country;

    resultDiv.innerHTML = `🌍 Location: <strong>${city}, ${country}</strong><br>
    🌡️ Temperature: <strong>${temp}°C</strong>`;
  } catch (error) {
    resultDiv.innerHTML = `❌ Error: ${error.message}`;
  }
}
