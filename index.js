fetch("https://www.dreamcloudjourney.com/hello")
  .then((data) => {
    console.log(data);
    console.log(data.json());
    return data.json();
  })
  .then((response) => console.log(response));
