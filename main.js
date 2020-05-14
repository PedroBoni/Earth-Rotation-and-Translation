date1 = new Date('2020/01/01');
date2 = new Date();
let diferenca = Math.abs(date1 - date2); //diferença em milésimos e positivo
let dia = 1000*60*60*24; // milésimos de segundo correspondente a um dia
let total = Math.round(diferenca/dia); //valor total de dias arredondado 
//conta para definir posição x do planeta terra
let r = 250,c = 1570.79632679,cEarth=251.327412287,angulo = 1.14,x,y,z,w,Rot,d

angulo = ((c/360)/365) * total;
x = r * Math.cos(angulo);
y = r * Math.sin(angulo);
z = r + x + 50;
w = r + y + 50;
//Rot = (cEarth/360) * 15 * hour

const day = document.querySelector('#day');
const hour  = document.querySelector('#hour');
const circle = document.querySelector('#earth');
circle.style.cx = z;
circle.style.cy = w;  

d = date2.toString();
day.innerHTML = `${d.slice(4, 11)}, ${d.slice(11, 15)}`
d = date2.toLocaleString()
hour.innerHTML = `${d.slice(11,15)} ${d.slice(19,21)}`
    
  //circle.style.transform = `rotate(${Rot}deg)`;
    

    