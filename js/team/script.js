document.addEventListener("DOMContentLoaded", function() {
  var lazyBackgrounds = document.querySelectorAll('.lazy-background');
  
  let observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        var lazyBackground = entry.target;
        var bgImage = lazyBackground.getAttribute('data-bg');
        lazyBackground.style.backgroundImage = "url('" + bgImage + "')";
        lazyBackground.style.opacity = 1; // 使元素可见

        // 根据元素的不同，应用不同的动画
        if (lazyBackground.classList.contains('header')) {
          lazyBackground.style.animation = 'mov-down 1s ease forwards';
          lazyBackground.style.top = '0'; // 设置最终位置
        } else if (lazyBackground.classList.contains('footer')) {
          lazyBackground.style.animation = 'mov-up 1s ease forwards';
          lazyBackground.style.bottom = '0'; // 设置最终位置
          lazyBackground.style.right='0';
        } else if (lazyBackground.classList.contains('aside')) {
          lazyBackground.style.animation = 'mov-right 1s ease forwards';
          lazyBackground.style.left = '0'; // 设置最终位置
          lazyBackground.style.bottom = '0';
        } else if (lazyBackground.classList.contains('main')) {
          lazyBackground.style.animation = 'mov-left 1s ease forwards';
          lazyBackground.style.right = '0'; // 设置最终位置
        }

        observer.unobserve(lazyBackground);
      }
    });
  }, {
    rootMargin: '-260px',
    threshold: 0.8 
  });

  lazyBackgrounds.forEach(function(lazyBackground) {
    observer.observe(lazyBackground);
  });
});