import "./pages/index.css";

let offset = 0;
const sliderLine = document.querySelector('.slider-line');
document.querySelector('.button-right').addEventListener('click', ()=>{
    offset += document.querySelector('.slider-line_block').clientWidth;
    if (offset > document.querySelector('.slider-line_block').clientWidth*2){
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
});

document.querySelector('.button-left').addEventListener('click', ()=>{
    offset -= document.querySelector('.slider-line_block').clientWidth;
    if (offset < 0){
        offset = document.querySelector('.slider-line_block').clientWidth*2;
    }
    sliderLine.style.left = -offset + 'px';
});