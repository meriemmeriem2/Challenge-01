function appendToDisplay(value) {
    document.getElementById("display").value += value;
}
  
function clearDisplay() {
    document.getElementById("display").value = "";
}
  
function calculateResult() {
    try {
        let input = document.getElementById("display")
        let operations = input.value
        let result = eval(operations);
        document.getElementById("display").value = result;
    } catch (e) {
        document.getElementById("display").value = "Error";
    }
}
