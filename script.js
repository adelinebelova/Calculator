const buttons = document.querySelectorAll('.button');
const input_display = document.getElementById('input');
const result_display = document.getElementById('result');
let toggle_switch = document.querySelector('#switch');
const mode = document.querySelector('#light-mode');
const back_mode = document.querySelector('#back-light');

let input = "";
let result= "";

//dark and light mode toggle
toggle_switch.addEventListener('click', ()=> {
    if(toggle_switch.checked){
        mode.setAttribute("id", "dark-mode");
        back_mode.setAttribute("id", "back-dark");
    }
    else {
        mode.setAttribute("id", "light-mode");
        back_mode.setAttribute("id", "back-light");
    }
       
})


for(let button of buttons){
    const value = button.dataset.key;

    button.addEventListener('click', ()=> {
        if (value == "clear"){
            input_display.innerHTML = "";
            result_display.innerHTML = "";
            input = "";
        }
        else if(value == "=" ){
            result = eval(input);
            result_display.innerHTML = result.toLocaleString("en-US");
        }
        else if (value == "delete"){
            input = input.slice(0, -1);
            input_display.innerHTML = input.toLocaleString("en-US");
        }
        else{
            input += value;
            input_display.innerHTML = input.toLocaleString("en-US");
        }
    })
}

