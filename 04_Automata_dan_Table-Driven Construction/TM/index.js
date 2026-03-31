const editorElement = document.getElementById("editor-kecil");
const charCountElement = document.getElementById("hf");

const countHb = document.getElementById("hb");
const countHk = document.getElementById("hk");

const buttonHb = document.getElementById("huruf-besar");
const buttonHk = document.getElementById("huruf-kecil");
const lightModeButton = document.getElementById("tombol-terang");
const darkModeButton = document.getElementById("tombol-gelap");
const sepiaModeButton = document.getElementById("tombol-sepia");

function updateCharCount(text) {
    charCountElement.textContent = text.length;

    let Hb = 0;
    let Hk = 0;

    for (const char of text) {
        if (char >= "A" && char <= "Z") {
            Hb++;
        }
        else if (char >= "a" && char <= "z") {
            Hk++;
        }
    }

    countHb.textContent = Hb;
    countHk.textContent = Hk;
};

editorElement.addEventListener("input", (event) => {
    updateCharCount(event.target.value);
});

buttonHb.addEventListener("click", () => {
    editorElement.value = editorElement.value.toUpperCase();
    updateCharCount(editorElement.value);
});

buttonHk.addEventListener("click", () => {
    editorElement.value = editorElement.value.toLowerCase();
    updateCharCount(editorElement.value);
}); 

lightModeButton.addEventListener("click", () => {
    document.body.classList.add("light-mode");
    document.body.classList.remove("dark-mode");
    document.body.classList.remove("sepia-mode");
});

darkModeButton.addEventListener("click", () => {
    document.body.classList.add("dark-mode");
    document.body.classList.remove("light-mode");
    document.body.classList.remove("sepia-mode");
});
sepiaModeButton.addEventListener("click", () => {
    document.body.classList.add("sepia-mode");
    document.body.classList.remove("light-mode");
    document.body.classList.remove("dark-mode");
});