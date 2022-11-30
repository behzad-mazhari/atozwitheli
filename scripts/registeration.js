const flags = document.getElementsByClassName("flag");
for (let i = 0; i < flags.length; i++) {
    flags[i].style.filter = "grayscale(0%)";
    flags[i].style.cursor = "pointer";
    // flags[i].addEventListener("click", () => picklang(flags[i]));
}

function picklang(image) {
    console.log('in');
    for (let i = 0; i < flags.length; i++) {
        flags[i].style.filter = "grayscale(100%)";
    }
    image.style.filter = "grayscale(0%)";
}

function islanguagepicked() {
    if (document.getElementById('name').value.length > 0) {
        if (document.getElementById('contact')) {
            if (!document.getElementById('english').checked) {
                if (!document.getElementById('french').checked) {
                    if (!document.getElementById('italy').checked) {
                        confirm("Please choose your desired language by picking a flag!");
                    }
                }
            }
        }
    }
}