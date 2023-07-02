const display = document.querySelector('.display')
const buttons = document.querySelectorAll('button')

btnsArray = Array.from(buttons)

let result  = ''

btnsArray.forEach(button => {
    button.addEventListener('click', (e)=>{
        if(e.target.innerHTML == "="){
            result = eval(result);
            display.value = result;
        } else if(e.target.innerHTML=='AC'){
             result = ''
             display.value = result
        
        } else if(e.target.innerHTML == "DEL"){
           result = result.slice(0, (result.length)-1)
           display.value = result
        }
        else{
            result += e.target.innerHTML;
            display.value = result
    }
    })
 
});