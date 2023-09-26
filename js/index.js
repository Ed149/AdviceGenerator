'use strict'
let advice = document.getElementById('advice');
let adviceNumber = document.getElementById('adviceNumber')
let ranButton = document.getElementById('randomButton');
let url = "https://api.adviceslip.com/advice";

const getAdvice = async() =>{
    const res = await fetch(url);
    const data = await res.json();
    const obj = {
        id:data.slip.id,
        advice: data.slip.advice
    };
    return obj;
}
try{
    ranButton.addEventListener("click", async()=>{
        const advices= await getAdvice();
        adviceNumber.innerHTML = `Advice #${advices.id}`;
        advice.innerHTML = `"${advices.advice}"`;
    })
}catch(error){
    adviceNumber.innerHTML = "Waiting you...";
    advice.innerHTML = `Try Again`;
}

