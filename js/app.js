window.addEventListener('DOMContentLoaded', function() {
    let loadElement = document.getElementById('load');
    loadElement.style.display = 'flex';
    let viewWidth = window.innerWidth;
    let intervalId = setInterval(function() {
        let loadWidth = parseFloat(window.getComputedStyle(loadElement).width);
        if (loadWidth >= viewWidth-2) {
            loadElement.style.display = 'none';
            clearInterval(intervalId); // 停止定时器
        }
    }, 2500);
});
