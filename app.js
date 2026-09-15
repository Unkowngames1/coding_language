// Initialize CodeMirror editor
const editor = CodeMirror(document.getElementById("editor"), {
    value: `complete DomainExpansion Demo {

    chakra_focus CT main() {
        manifest msg = "Hello Dragon"
        manifest name = "Your Anime Language Works!"
        print("Starting Execution...")
        release msg
        release name
    }
}`,
    mode: "javascript",
    lineNumbers: true,
    matchBrackets: true,
    autoCloseBrackets: true,
    theme: "default"
});

// Run button logic
document.getElementById("runBtn").onclick = () => {
    const code = editor.getValue();
    runJJK(code, document.getElementById("console"));
};
