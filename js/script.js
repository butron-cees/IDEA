var nav=document.querySelector('nav');
window.addEventListener('scroll', function(){
if(window.pageYOffset>20){
    nav.style.backgroundColor='rgba(27, 40, 102, 1)';
    nav.classList.add('bg-gray', 'shadow');
    var navTextElements = nav.querySelectorAll('a'); 
    for (var i = 0; i < navTextElements.length; i++) {
      navTextElements[i].style.color = 'rgba(255, 255, 255, 1)'; 
    }
}else{
    nav.classList.remove('bg-gray', 'shadow')
}
})
AOS.init({
    easing: 'ease-out-back',
    duration: 1000
})