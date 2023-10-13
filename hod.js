function setBackgroundImages() {
  const idw = ["a1", "c1", "e1", "g1", "b2", "d2", "f2", "h2", "a3", "c3", "e3", "g3"];
  const imageUrlW = "url('img/sh-w.png')";

  const idr = ["b8", "d8", "f8", "h8", "a7", "c7", "e7", "g7", "b6", "d6", "f6", "h6"];
  const imageUrlR = "url('img/sh-r.png')";

  for (const id of idw) {
    const elementW = document.getElementById(id);
    if (elementW) {
      elementW.style.backgroundImage = imageUrlW;
    }
  }

  for (const id of idr) {
    const elementR = document.getElementById(id);
    if (elementR) {
      elementR.style.backgroundImage = imageUrlR;
    }
  }
}

setBackgroundImages();



function getElement(row, col) {
    return document.getElementById(`${row}${col}`);
}

for (let row = 1; row <= 8; row++) {
    for (let col = 'a'; col <= 'h'; col = String.fromCharCode(col.charCodeAt(0) + 1)) {
        window[`${col}${row}`] = getElement(col, row);
    }
}

function setClickHandler(target, elementsToChange) {
    target.addEventListener("click", function() {
        elementsToChange.forEach(function(element) {
            element.style.backgroundColor = "green";
        });
    });
}

setClickHandler(a1, [b2]);
setClickHandler(c1, [b2, d2]);
setClickHandler(e1, [f2, d2]);
setClickHandler(g1, [f2, h2]);

setClickHandler(b2, [a3, c3]);
setClickHandler(d2, [c3, e3]);
setClickHandler(f2, [e3, g3]);
setClickHandler(h2, [g3]);

setClickHandler(a3, [b4]);
setClickHandler(c3, [b4, d4]);
setClickHandler(e3, [f4, d4]);
setClickHandler(g3, [f4, h4]);

setClickHandler(b4, [a5, c5]);
setClickHandler(d4, [c5, e5]);
setClickHandler(f4, [e5, g5]);
setClickHandler(h4, [g5]);

setClickHandler(a5, [b6]);
setClickHandler(c5, [b6, d6]);
setClickHandler(e5, [f6, d6]);
setClickHandler(g5, [f6, h6]);

setClickHandler(b6, [a7, c7]);
setClickHandler(d6, [c7, e7]);
setClickHandler(f6, [e7, g7]);
setClickHandler(h6, [g7]);

setClickHandler(a7, [b8]);
setClickHandler(c7, [b8, d8]);
setClickHandler(e7, [f8, d8]);
setClickHandler(g7, [f8, h8]);