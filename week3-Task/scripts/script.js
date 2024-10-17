let moviePoster = document.querySelector('.movie-poster');

let modal = document.querySelector('#myModal');

let closedBtn = document.querySelector('.closeBtn');

let modalImage = document.querySelector('.movie-poster-modal');

moviePoster.addEventListener('click', ()=> {
    modal.style.display = 'block';
    modalImage.src = moviePoster.src; 
});

closedBtn.addEventListener('click', () =>{
    modal.style.display = 'none'; 

});

window.addEventListener('click', (event) => {
    if(event.target === modal) {
        modal.style.display = 'none';
    }
});
