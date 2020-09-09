var editorContainer = document.getElementById("editorDiv");
var toolbarContainer = document.getElementById("toolbarDiv");

var editor = new CanvasTools.Editor(editorContainer).api;
editor.addToolbar(toolbarContainer, CanvasTools.Editor.FullToolbarSet, "./node_modules/vott-ct/lib/icons/");