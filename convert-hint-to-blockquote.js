const fs = require("fs");
const path = require("path");

const ROOT_DIR = path.join(__dirname, "resources");
function processFile(filePath) {
    let content = fs.readFileSync(filePath, "utf-8");

    // Convert {% hint %} blocks to Markdown blockquotes
    content = content.replace(
        /{%\s*hint.*?%}([\s\S]*?){%\s*endhint\s*%}/gi,
        (match, p1) => {
            return p1
                .split("\n")
                .map(line => (line.trim() ? `> ${line}` : ">"))
                .join("\n");
        }
    );

    // Convert {% embed url="..." %} blocks to a Markdown link
    content = content.replace(
        /{%\s*embed\s+url="(.*?)".*?%}/gi,
        (match, url) => {
            return `[Embedded content](${url})`;
        }
    );

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
