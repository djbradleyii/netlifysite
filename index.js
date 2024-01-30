fetch("https://www.dreamcloudjourney.com/hello")
  .then((data) => data.json())
  .then((response) => console.log(response));
