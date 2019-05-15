var doc = document;
// Всплывающий хэдэр
doc.addEventListener('DOMContentLoaded', function() {
    let nav = doc.querySelector('#header');
    let h = nav.style.height;
    console.log(h)
    window.onscroll = function(){
        if (window.pageYOffset > h) {
            nav.classList.add('hidden');
        }
        if (window.pageYOffset > h+50) { 
            nav.classList.remove('hidden');
            nav.classList.add('fixed');
        }
        if (window.pageYOffset < h+50) {
            nav.classList.remove('fixed');
            nav.classList.remove('hidden');
        }
    }
});