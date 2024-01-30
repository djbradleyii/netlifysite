const fetchBtn = document.getElementById("fetchFunction");
fetchBtn.addEventListener("click", () => {
  fetch("https://www.dreamcloudjourney.com/hello")
    .then((resp) => resp.text())
    .then((data) => {
      const responseTextArea = document.getElementById("btnResponse");
      responseTextArea.textContent = data;
    });
});
