let value = document.getElementById("value");
let count = 0

const increment = () => {
     count++;
    value.innerHTML = count;
    if(count > 0){
  document.getElementById("value").style.color = "green";
}
  if(count === 0){
  document.getElementById("value").style.color = "black";
}
}

const decrement = () => {
        count--;
        value.innerHTML = count;
        if(count < 0){
  document.getElementById("value").style.color = "red";
}
  if(count === 0){
  document.getElementById("value").style.color = "black";
}
}

const reset = () => {
    if(count !== 0){
        count = 0;
        value.innerHTML = count;
  if(count === 0){
  document.getElementById("value").style.color = "black";
}
    }
}
