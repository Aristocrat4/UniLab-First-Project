const navBtn = document.querySelector('.menu-icon');
const navBar = document.querySelector('.mobile-navigation');
const transparent = document.querySelector('.transparent');
navBtn.addEventListener('click', function (){
    navBar.classList.toggle('clicked');
    transparent.classList.toggle('appear');
})
transparent.addEventListener('click', function(){
    navBar.classList.toggle('clicked');
    transparent.classList.toggle('appear');
})
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const postNum = document.querySelector('.post-num');
const postTitle = document.querySelector('.post-title');
const post = document.querySelector('.post-p');
const randomBtn = document.querySelector('.random-post');
let counter = 1;
postNum.textContent = `Post #${counter}`;

function renderPost () {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'GET'
    })
    .then (function(response){
        if(response.status !==200){
            throw 'error';
        }
        return response.json();
    })
    .then (function(responseInfo){
        postTitle.textContent = responseInfo[counter-1].title;
        post.textContent = responseInfo[counter-1].body;
        prevBtn.addEventListener('click', function(){
            counter--;
            if (counter < 1) {
                counter = responseInfo.length - 1;
            }
            postNum.textContent = `Post #${counter}`;
            postTitle.textContent = responseInfo[counter-1].title;
            post.textContent = responseInfo[counter-1].body;
    })
        nextBtn.addEventListener('click', function(){
            counter++;
            if (counter > responseInfo.length - 1){
                counter = 1;
            }
            postNum.textContent = `Post #${counter}`;
            postTitle.textContent = responseInfo[counter].title;
            post.textContent = responseInfo[counter].body;
        })
        randomBtn.addEventListener('click', function (){
            counter = Math.trunc(Math.random()*responseInfo.length);
            postNum.textContent = `Post #${counter}`;
            postTitle.textContent = responseInfo[counter].title;
            post.textContent = responseInfo[counter].body;
        })
    })
    .catch (function(error){
        console.log(error);
    })
    
}
renderPost();