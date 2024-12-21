let currentIndex = 0;

function changeSlide(direction) {
    const images = document.querySelectorAll('.swift-img img');
    images[currentIndex].classList.remove('active');
    
    currentIndex = (currentIndex + direction + images.length) % images.length; // 循环索引
    images[currentIndex].classList.add('active');
}

// 自动播放
setInterval(() => {
    changeSlide(1);
}, 3000); // 每3秒自动切换
