(function(){
  const map = ['۰','۱','۲','۳','۴','۵','۶','۷','۸','۹'];
  function toPersianDigits(str){
    return str.replace(/\d/g, d => map[d]);
  }
  function walk(node){
    const walker = document.createTreeWalker(node, NodeFilter.SHOW_TEXT, null, false);
    let current;
    while(current = walker.nextNode()){
      current.nodeValue = toPersianDigits(current.nodeValue);
    }
  }
  window.toPersianDigits = toPersianDigits;
  window.addEventListener('DOMContentLoaded', () => walk(document.body));
})();
