let value = document.getElementById("value");
let count = 0

const increment = () => {
     count++;
    value.innerHTML = count;
}

const decrement = () => {
    if(count > 0){
        count--;
        value.innerHTML = count;
    }
}

const reset = () => {
    if(count !== 0){
        count = 0;
        value.innerHTML = count;
    }
}