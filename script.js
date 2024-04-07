let outputScreen=document.querySelector("#screen");
function itsNumber(a){
    
    outputScreen.innerHTML=outputScreen.innerHTML+a;
}

function allClear(){
    outputScreen.innerHTML="";
}

function openParanthesis(){
    outputScreen.innerHTML=outputScreen.innerHTML+" ( ";
}


function closeParanthesis(){
    outputScreen.innerHTML=outputScreen.innerHTML+" ) ";
}

function backSpace(){
    if(outputScreen.innerHTML=="Error" ||outputScreen.innerHTML=="undefined")
       allClear();
    else
      outputScreen.innerHTML=outputScreen.innerHTML.slice(0,-1);
}


    function calculate() {
        try {
            const expression = outputScreen.innerHTML;
            const result = math.evaluate(expression);
            outputScreen.innerHTML = result;
        } catch (error) {
            outputScreen.innerHTML = "Error";
        }
    }

    document.addEventListener("keydown",handleKeyboardInput);
    function handleKeyboardInput(event){
        const key=event.key;
        const button = document.querySelector(`[data-key="${key}"]`);
        if (button) {

            if(key=="Delete")
            {
                button.classList.add("delete-pressed");
                setTimeout(() => {
                    button.classList.remove("delete-pressed");
                },100 );
            }
            else if(key=="Backspace")
            {
                button.classList.add("backspace-pressed");
                setTimeout(()=>{
                    button.classList.remove("backspace-pressed");
                },100);   
            }
            else if(key=="Enter")
            {  
                button.classList.add("enterpressed");
                setTimeout(()=>{
                    button.classList.remove("enter-pressed");
                },100);
            }
            else{
                button.classList.add("number-pressed");
                setTimeout(() => {
                    button.classList.remove("number-pressed");
                },100 );
            }   
            
        }      
    if(/^[0-9.]$/.test(key))
           itsNumber(key);
    else if(["*","+","-","(",")","/"].includes(key))
         itsNumber(" "+key+" ");
    else if(key=="Backspace")
         backSpace();
    else if(key=="Delete")
         allClear();
    else if(key=="Enter")
        calculate(); 

    }
   
    