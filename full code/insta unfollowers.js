var d = document.querySelectorAll('*[style="height: auto; overflow: hidden auto;"]')[0];
var c = 0;
var timer = setInterval(function () { 
  d.scrollIntoView(false);
  if (c != d.querySelectorAll("a").length) {
    c = d.querySelectorAll("a").length;
  } else {
    clearInterval(timer);
    var a = d.querySelectorAll("a");
    var l = [];
    for (var i = 0; i < a.length; i++) {
      let s = a[i].href.split("/");
      console.log(s);
      s = s[s.length - 2];
      if (!l.includes(s)) {
        l.push(s);
      }
    }
    l.sort();
    for (var i=0; i<l.length; i++) {
      document.write(l[i] + "<br>");
    }
  }
}, 2000);