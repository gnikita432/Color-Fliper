const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
let color =  document.getElementById('color');
let btn =  document.getElementById('btn');
// let container = document.getElementsByClassName('container');
const fn = ()=>{
 let hexcolor ="#";
 for(i=0;i<6;i++){
     hexcolor+=hex[ Math.floor(Math.random()*hex.length)];
 }
 document.querySelector('.container').style.backgroundColor=hexcolor;
 color.innerHTML=hexcolor;
}
btn.addEventListener('click',fn);