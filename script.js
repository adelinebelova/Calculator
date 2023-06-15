const buttons = document.querySelectorAll('.button');
const input_display = document.getElementById('input');
const result_display = document.getElementById('result');

let input = "";
let result= "";


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
            if(count(result) >= 12 ){
                
                result.toFixed(12);
            }
            
                result_display.innerHTML = result;
        }
        else if (value == "delete"){
            input = input.slice(0, -1);
            input_display.innerHTML = input;
        }
        else{
            input += value;
            input_display.innerHTML = input;
        }
    })
}

function count(result) {
    const converted = result.toString();
    if (converted.includes('.')) {
       return converted.split('.')[1].length;
    };
    return 0;
}
