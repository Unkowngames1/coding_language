function runJJK(code, consoleBox) {
    consoleBox.innerHTML = "";

    const mainMatch = code.match(/CT\s+main\s*\(\s*\)\s*\{([\s\S]*?)\}/);
    if (!mainMatch) {
        consoleBox.innerHTML = "Error: CT main() not found.";
        return;
    }

    const body = mainMatch[1].trim().split("\n");
    const env = {};

    function log(msg) {
        consoleBox.innerHTML += msg + "<br>";
    }

    body.forEach(line => {
        line = line.trim();

        let m = line.match(/^manifest\s+([a-zA-Z_]\w*)\s*=\s*(.+)$/);
        if (m) {
            const name = m[1];
            let value = m[2].trim();
            if (value.startsWith("\"") && value.endsWith("\"")) {
                value = value.slice(1, -1);
            }
            env[name] = value;
            return;
        }

        m = line.match(/^release\s+([a-zA-Z_]\w*)$/);
        if (m) {
            const name = m[1];
            log(env[name] ?? "undefined");
            return;
        }

        m = line.match(/^print\((.+)\)$/);
        if (m) {
            let value = m[1].trim();
            if (value.startsWith("\"") && value.endsWith("\"")) {
                value = value.slice(1, -1);
            }
            log(value);
            return;
        }
    });
}

document.getElementById("runBtn").onclick = () => {
    runJJK(editor.value, document.getElementById("console"));
};
