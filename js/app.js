// Main Js file
document.addEventListener("DOMContentLoaded", function(){
    window.addEventListener('scroll', function() {
        if (window.scrollY > 70) {
            document.getElementById('navbar_top').classList.add('sticky');
        } else {
            document.getElementById('navbar_top').classList.remove('sticky');
        } 
    });
}); 