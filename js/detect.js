function isMobileBrowser() {
    // 使用正则表达式匹配用户代理字符串
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    return /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini|symbian|windows phone|tablet|mobile/i.test(userAgent);
  }
  
  // 调用函数检查是否是手机浏览器
  if (isMobileBrowser()) {
    // 如果是手机浏览器，则跳转到手机网站
    window.location.href = "../";
  } else {
  }