function showExp(value) {
    document.getElementById('result').value += (value)
}
function calculator() {
    document.getElementById('result').value = eval(document.getElementById('result').value)
}