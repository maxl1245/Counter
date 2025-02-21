const decreaseBtn = document.getElementById("btn-decrease")
const resetBtn = document.getElementById("btn-reset")
const increaseBtn = document.getElementById("btn-increase")
const p = document.getElementById("number")

decreaseBtn.addEventListener("click",()=>{
    p.innerHTML -= 1;
    numberColor();
})

resetBtn.addEventListener("click",()=>{
    p.innerHTML = 0;
    numberColor();

})

increaseBtn.addEventListener("click",()=>{
    p.innerHTML = parseInt(p.innerHTML) + 1;
    numberColor();
})


const numberColor = () => {
    if(parseInt(p.innerHTML) > 0){
        p.style.color = "green";
    }else if(parseInt(p.innerHTML) < 0 ){
        p.style.color = "red";
    }else{
        p.style.color = "black";
    }
}