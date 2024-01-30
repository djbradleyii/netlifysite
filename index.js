fetch("https://www.dreamcloudjourney.com/hello").then((data) => {
  console.log(data);
  console.log(data.body.json());
});
