//Colors for background BEHIND quote box
var bgColors = ['#FFC0E9', '#E4C0FF', '#C0D5FF', '#C0FBFF', '#C0FFCB', '#F5FFC0', '#FFD4C0', '#FFC0C0'];
function inFrame() {
  try {
    return window.self !== window.top;
  }
  catch(e){
    return true;
  }
}
function openURL(url){
  window.open(url, 'Share', 'width=550, height=400, toolbar=0, scrollbars=1, location=0, statusbar=0, menubar=0,resizeable=0');
}
var currentQuote = '', currentAuthor = '';
fucntion getQuote() {
  
}
