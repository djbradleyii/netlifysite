const fetchBtn = document.getElementById("fetchFunction");
fetchBtn.addEventListener("click", () => {
  fetch("https://www.dreamcloudjourney.com/hello").then((data) => {
    const responseTextArea = document.getElementById("btnResponse");
    responseTextArea.textContent = data;
  });
});
