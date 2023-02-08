// Get the elements
const inputText = document.getElementById("inputText");
const submitBtn = document.getElementById("submitBtn");
const output = document.getElementById("output");

// Add an event listener to the submit button
submitBtn.addEventListener("click", function() {
  // Get the value from the input text
  const inputValue = inputText.value;

  // Update the text in the output element
  output.innerHTML = "You entered: " + inputValue;
});
