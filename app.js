let btn=document.querySelector("button");
let h2=document.querySelector("h2")
btn.addEventListener("click",()=>{
    let min=parseInt(document.querySelector("#Min").value);
    let max=parseInt(document.querySelector("#Max").value);

    if (isNaN(min) || isNaN(max) ||min >=max){
        alert("enter valid minimum and maximum number");
        return;
    }
    
    let randomNumber=Math.floor(Math.random()*(max-min+1))+min;
    h2.innerText=randomNumber;
    console.log("Generate")



})