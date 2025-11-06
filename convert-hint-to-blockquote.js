const fs = require("fs");
const path = require("path");

// Path to your repo root or resources folder
const ROOT_DIR = path.join(__dirname, "resources");

function processFile(filePath) {
let content = fs.readFileSync(filePath, "utf-8");

// Replace {% hint style="info" %} ... {% endhint %} with Markdown blockquote
content = content.replace(/{%\s*hint.*?%}([\s\S]*?){%\s*endhint\s*%}/gi, (match, p1) => {
    // Split into lines and add "> " to each
    return p1
        .split("\n")
        .map(line => line.trim() ? `> ${line}` : ">")
        .join("\n");
});

fs.writeFileSync(filePath, content, "utf-8");
console.log(`Processed: ${filePath}`);

}

function walkDir(dir) {
fs.readdirSync(dir).forEach(file => {
const fullPath = path.join(dir, file);
if (fs.statSync(fullPath).isDirectory()) {
walkDir(fullPath);
} else if (fullPath.endsWith(".md")) {
processFile(fullPath);
}
});
}

walkDir(ROOT_DIR);
console.log("All files processed!");