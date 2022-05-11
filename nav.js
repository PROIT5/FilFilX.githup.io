let btnopen=document.getElementById('open');
let btclose=document.getElementById('close');
let btnav=document.querySelector('.navbarjs');
btnclose.onclick=function(){
    btnav.classlist.add('hide');
    btnclose.classlist.add('hide'); 
    btnopen.classlist.remove('hide');
}
