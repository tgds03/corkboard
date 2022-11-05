    
// use simplemde : https://github.com/sparksuite/simplemde-markdown-editor
window.addEventListener('DOMContentLoaded', initCorkboard);

function initCorkboard() {
  initMDE(document.querySelector(".memo textarea"));
}

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