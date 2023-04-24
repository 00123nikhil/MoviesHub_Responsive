
var swiper = new Swiper(".popular-content", {
    slidePerView: 1,
    spaceBetween: 10,
    autoplay: {
        delay: 755500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        280: {
            slidePerView: 1,
            spaceBetween: 10,
        },
        320: {
            slidePerView: 2,
            spaceBetween: 10,
        },
        510: {
            slidePerView: 2,
            spaceBetween: 10,
        },
        758: {
            slidePerView: 3,
            spaceBetween: 15,
        },
        900:{
            slidePerView: 4,
            spaceBetween: 20,
        }
    }
});


// Show video

let playButton = document.querySelector('.play-movie');
let video = document.querySelector('.video-container');
let closebtn = document.querySelector('.close-video');
let myvideo = document.querySelector('#myvideo');

playButton.onclick =() =>{
    video.classList.add("show-video");
//    Auto play the video
    myvideo.play();
};

closebtn.onclick =() =>{
//   close the video while playing
    video.classList.remove("show-video");
    myvideo.pause();
};

