const editor = document.getElementById("editor");
const highlight = document.getElementById("highlight");

editor.addEventListener("input", () => {
    highlight.innerHTML = highlightCode(editor.value);
});
