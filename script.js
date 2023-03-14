const form = document.getElementById("prediction-form");
const result = document.getElementById("prediction-result");

const json = {};

form.addEventListener("submit", event => {
  event.preventDefault();

  const data = new FormData(event.target);
  const json = {};

  formData["data"] = Array.from(data.values()).join(",");
  });

  const endpoint = "https://0gj0kr498d.execute-api.us-east-2.amazonaws.com/predict_price"
  const options = {
    method: "POST",
    body: JSON.stringify(json),
    headers: {
      "Content-Type": "application/json",
    },
  };

  await fetch(endpoint, options)
    .then((response) => response.text())
    .then((data) => {
      const resultDiv = document.getElementById("prediction-result");
      if (resultDiv) {
        resultDiv.innerText = data;
      }
    })
    .catch((error) => {
      console.error(error);
      const resultDiv = document.getElementById("prediction-result");
      if (resultDiv) {
        resultDiv.innerText = "An error occurred while predicting the housing price.";
      }
    });
