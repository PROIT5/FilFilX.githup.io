
let naci=document.querySelector('.naci');
let clo=document.querySelector('.close');
let contio=document.querySelector('contio');


clo.onclick = function(){

contio.classlist.add('hide');
clo.classList.add('hide');
naci.classList.remove('hide');

}
