window.addEventListener("DOMContentLoaded", initCorkboard)

function initCorkboard() {
  initDnDFeature();
}

function initDnDFeature() {
  //copy from https://ko.javascript.info/mouse-drag-and-drop
  let $memobox = document.querySelector(".memo")

  $memobox.ondragstart = () => {return false;}
  $memobox.onmousedown = function drag(e) {

    let shiftX = e.clientX - $memobox.getBoundingClientRect().left;
    let shiftY = e.clientY - $memobox.getBoundingClientRect().top;
    
    $memobox.style.position = 'absolute';
    $memobox.style.zindex = 1000;
  
    document.body.append($memobox);
  
    function moveAt(pageX, pageY) {
      $memobox.style.left = pageX - shiftX + 'px';
      $memobox.style.top = pageY - shiftY + 'px';
    }
    moveAt(e.pageX, e.pageY);
  
    function onMouseMove(e) {
      moveAt(e.pageX, e.pageY);
    }
    document.addEventListener('mousemove', onMouseMove);
  
    $memobox.onmouseup = function drop() {
      document.removeEventListener('mousemove', onMouseMove);
      $memobox.onmouseup = null;
    };
  }
}