document.addEventListener("DOMContentLoaded",(function(){["slider1","slider2","slider3","slider4","slider5"].forEach((function(e){var n=document.getElementById(e);if(n){var t=n.querySelectorAll(".slider-img"),r=0,o=n.querySelector(".slider-prev"),i=n.querySelector(".slider-next");o?o.addEventListener("click",(function(){c(r=0===r?t.length-1:r-1)})):console.error("Prev button not found in slider ".concat(e)),i?i.addEventListener("click",(function(){c(r=r===t.length-1?0:r+1)})):console.error("Next button not found in slider ".concat(e))}function c(e){t.forEach((function(e){return e.classList.remove("active")})),t[e].classList.add("active")}}))}));
//# sourceMappingURL=index.ae99cca3.js.map
