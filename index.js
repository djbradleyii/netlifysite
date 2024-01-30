const fetchBtn = document.getElementById("fetchFunction");
fetchBtn.addEventListener("click", () => {
  fetch("https://www.dreamcloudjourney.com/hello").then((resp) => {
    const data = resp.text();
    const responseTextArea = document.getElementById("btnResponse");
    responseTextArea.textContent = data;
  });
});
