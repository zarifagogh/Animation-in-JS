window.onscroll = () => {
    if (window.scrollY > 0) {
        document.getElementById("text_h4").style.animation = "move 1.5s";
        document.getElementById("text_img").style.animation = "move 1.8s";
        document.getElementById("text_h1").style.animation = "move 2.3s";
        document.getElementById("text_h3").style.animation = "move 2.8s";
    } else if (window.scrollY > 1600) {
        document.getElementById("gray-box").style.animation = "gray_move 3s";
        document.getElementById("orange-box").style.animation = "orange_move 3s";
        document.getElementById("photo-box").style.animation = "photo_move 3.5s";
        document.getElementById("info").style.animation = "info_move 5s";
    } else if (window.scrollY > 3700) {
        document.getElementById("text").style.animation = "imove 3s";
    }
}