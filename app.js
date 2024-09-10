const images =document.querySelectorAll('.image-container img'); 
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

let currentindex =0;

prevButton.addEventListener('click', ()=>{
    images[currentindex].classList.remove('active');
    currentindex =(currentindex -1)% images.length;
    images[currentindex].classList.add('active');
});

nextButton.addEventListener('click', ()=>{
    images[currentindex].classList.remove('active');
    currentindex =(currentindex +1)% images.length;
    images[currentindex].classList.add('active');
});