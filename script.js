const colors = ["red","green","yellow","pink","blue","black","violet","gray","babypink"];

let color =  document.getElementById('color');
let btn =  document.getElementById('btn');
// let container = document.getElementsByClassName('container');
const fn = ()=>{
   let random =  Math.floor(Math.random()*9);
   document.querySelector('.container').style.backgroundColor=colors[random];
    // color.textContent = colors[2];
    color.innerHTML=colors[random];
}
btn.addEventListener('click',fn);