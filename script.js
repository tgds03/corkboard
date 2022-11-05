window.addEventListener("DOMContentLoaded", initCorkboard)

function initCorkboard() {
  initDnDFeature();
  initMDE(document.querySelector(".memo textarea"));
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

// use simplemde : https://github.com/sparksuite/simplemde-markdown-editor
function initMDE($textarea) {
  new SimpleMDE({ 
    element: $textarea,
    hideIcons: true,  //disable wysiwyg
    status: false,    //hide status bar
    spellChecker: false,  //disable spelling check (which use for eng)

    shortcuts: {
      "toggleSideBySide": null,
      "toggleFullScreen": null
    }
  });
};
