const screen = document.querySelector('.screen');

const videos = document.querySelectorAll('.videos');

videos.forEach(element => {
    console.log("yolo");

    element.addEventListener('click', function(){
        screen.src = `/data/videos/${element.innerText}.mp4`;
        screen.play();
    })
});
