var d = document.querySelectorAll('*[style="height: auto; overflow: hidden auto;"]')[0];
var c = 0;
var timer = setInterval(function () { 
  d.scrollIntoView(false);
  var sel = d.querySelectorAll("a");
  if (c != sel.length) {
    for (var i=c; i<sel.length; i++) {
      setTimeout(function(x) {
        x.innerHTML = "☠";
      },Math.random()*2000,sel[i])
    }
    c = sel.length;
  } else {
    clearInterval(timer);
    var a = d.querySelectorAll("a");
    var l = [];
    for (var i = 0; i < a.length; i++) {
      let s = a[i].href.split("/");
      s = s[s.length - 2];
      if (!l.includes(s)) {
        l.push(s);
      }
    }
    l.sort();
    for (var i=0; i<l.length; i++) {
      document.write(l[i] + "<br>");
    }
    document.body.style.color = "white";
    document.body.style.backgroundColor = "black";
  }
}, 2000);