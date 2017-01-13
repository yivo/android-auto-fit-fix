/*!
 * android-auto-fit-fix 1.0.2 | https://github.com/yivo/android-auto-fit-fix | MIT License
 */

// http://www.matt-helps.com/android-browser-auto-fit-fix/

(function() {
  var ua                     = navigator.userAgent.toLowerCase();
  var is4xAndroid            = ua.indexOf('android 4.') > -1;
  var isNativeAndroidBrowser = ua.indexOf('mozilla/5.0') > -1 && 
                               ua.indexOf('android ') > -1 && 
                               ua.indexOf('applewebkit') > -1 && 
                               ua.indexOf('chrome') < 0;

  if (is4xAndroid && isNativeAndroidBrowser) {
    var head = document.getElementsByTagName('head')[0];
    if (head != null) {
      var style = document.createElement('style');
      style.setAttribute('type', 'text/css');
      
      // https://developer.mozilla.org/ru/docs/Web/HTML/Block-level_elements
      var blockElements = 'address,article,aside,audio,blockquote,canvas,' +
                          'dd,div,dl,fieldset,figcaption,figure,figure,figcaption,' +
                          'footer,form,h1,h2,h3,h4,h5,h6,header,hgroup,hr,li,main,' +
                          'nav,noscript,ol,output,p,pre,section,table,tfoot,ul,video';
      
      var imageDataURI  = 'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==';
      
      style.innerHTML   = blockElements + '{' + 
                            'background-image:  url(' + imageDataURI + ');' + 
                            'background-repeat: repeat; ' +
                          '}';
      head.appendChild(style);
    }
  }
})();
