let counter = 0;

document.getElementById('value').textContent = counter;
document.getElementById("btn decrease").onclick = function () { 
    counter--;
    document.getElementById('value').textContent = counter;
}

document.getElementById("btn increase").onclick = function () {
  counter++;
  document.getElementById('value').textContent = counter;
}

document.getElementById("btn reset").onclick = function () {
  counter = 0;
  document.getElementById('value').textContent = counter;
}