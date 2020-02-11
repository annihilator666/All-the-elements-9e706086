const src = document.querySelector('title').innerText;
const element = document.querySelector('h1');
const para = document.querySelectorAll('p');

element.innerText = src;

element.classList = 'text';
para.forEach(addClass);
function addClass(para){
    para.classList = 'paragraph';
}