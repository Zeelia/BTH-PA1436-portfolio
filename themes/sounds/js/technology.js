/* when the script loads call function A in pure javascript */
window.onload = function() {
  bindBoxClick();
};

/* create a function in pure javascript to loop through divs with the class box. When the div is clicked, call function B */
function bindBoxClick() {
    var boxes = document.getElementsByClassName("box");
    for (var i = 0; i < boxes.length; i++) {
        boxes[i].onclick = function() {
            boxClick(this.getElementsByTagName("input")[0]);
        };
    }
}

function boxClick(link){
    window.location.href = link.value;
}