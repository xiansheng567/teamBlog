function isMobileBrowser() {
    // 使用正则表达式匹配用户代理字符串
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    return /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini|symbian|windows phone|tablet|mobile/i.test(userAgent);
  }
  
  
  if (isMobileBrowser()) {
    window.location.href = "../teamBlog/html/detect.html";
  } else {
  }
