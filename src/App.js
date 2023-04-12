const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '7c33ae505amsha6e0babdf8c8189p189ebejsn5d95476777dc',
    'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
  }
};

fetch('https://weatherapi-com.p.rapidapi.com/current.json?q=53.1%2C-0.13', options)
  .then(response => response.json())
  .then(data => {
    const temperature = data.current.temp_c;
    console.log(`Current temperature: ${temperature}°C`);
  })
  .catch(error => console.error(error));
