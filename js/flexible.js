/*
* @Author: Administrator
* @Date:   2018-03-20 10:24:07
* @Last Modified by:   Administrator
* @Last Modified time: 2018-03-21 15:37:56
*/
!function(a, b) {
    var c = a.documentElement
      , d = "orientationchange"in window ? "orientationchange" : "resize"
      , e = function() {
        var a = c.clientWidth;
        if (a > 750)
            c.style.fontSize = "75px",
            c.style.width = "750px",
            c.style.height = "100%",
            c.style.margin = "0 auto",
            c.style.position = "relative",
            c.style.overflow = "auto";
        else {
            if (!a)
                return;
            c.style.fontSize = 1 * (a / 10) + "px",
            c.style.fontFamily = "Î¢ÈíÑÅºÚ"
        }
    };
    e(),
    a.addEventListener && (b.addEventListener(d, e, !1),
    a.addEventListener("DOMContentLoaded", e, !1))
}(document, window);
