// script.js
async function translateText() {
  const text = document.getElementById("text").value;
  const direction = document.getElementById("direction").value;
  const resultDiv = document.getElementById("result");

  resultDiv.textContent = "Translating...";

  try {
    const response = await fetch("https://lugandatranslationapi.onrender.com/translate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": "demo-key-123"
      },
      body: JSON.stringify({ text, direction })
    });

    const data = await response.json();

    if (response.ok) {
      resultDiv.textContent = data.translation || data.result || "Translation not found";
    } else {
      resultDiv.textContent = data.detail || "Error occurred";
    }
  } catch (error) {
    resultDiv.textContent = "Network error";
  }
}
