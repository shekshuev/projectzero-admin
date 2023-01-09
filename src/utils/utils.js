export function jsonToFile(json, filename) {
    var a = document.createElement("a");
    var file = new Blob([JSON.stringify(json)], { type: "application/json" });
    a.href = URL.createObjectURL(file);
    a.download = filename;
    a.click();
}
