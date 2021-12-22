var screen = document.getElementById("screen");

function getValue(num) {
    screen.value += num;
}

function clearValue(){
    screen.value = '';
}

function calValue(){
    screen.value = eval(screen.value)
}

function delValue() {
    screen.value = screen.value.slice(0,-1);
}