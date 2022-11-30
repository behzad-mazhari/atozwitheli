
window.onload = function() {
    const name = "Cold Weather";
    
    const xhttp_ita = new XMLHttpRequest();
    const xhttp_eng = new XMLHttpRequest();
    const xhttp_fre = new XMLHttpRequest();

    xhttp_ita.onload = function() {
        document.getElementById("text-ita").innerHTML =
        this.responseText;
    }
    xhttp_ita.open("GET", `videos/${name}/${name}-ita.txt`);
    xhttp_ita.send();

    xhttp_eng.onload = function() {
        document.getElementById("text-eng").innerHTML =
        this.responseText;
    }
    xhttp_eng.open("GET", `videos/${name}/${name}-eng.txt`);
    xhttp_eng.send();

    xhttp_fre.onload = function() {
        document.getElementById("text-fre").innerHTML =
        this.responseText;
    }
    xhttp_fre.open("GET", `videos/${name}/${name}-fre.txt`);
    xhttp_fre.send();

    const xhttp_vid_ita = new XMLHttpRequest();
    const xhttp_vid_eng = new XMLHttpRequest();
    const xhttp_vid_fre = new XMLHttpRequest();

    xhttp_vid_ita.onload = function() {
            document.getElementById("video-ita").children[0].setAttribute('src', this.responseURL);
            document.getElementById("video-ita").load();
        }
    xhttp_vid_ita.open("GET", `videos/${name}/${name}-ita.mp4`);
    xhttp_vid_ita.send();

    xhttp_vid_eng.onload = function() {
            document.getElementById("video-eng").children[0].setAttribute('src', this.responseURL);
            document.getElementById("video-eng").load();
        }
    xhttp_vid_eng.open("GET", `videos/${name}/${name}-eng.mp4`);
    xhttp_vid_eng.send(); 

    xhttp_vid_fre.onload = function() {
            document.getElementById("video-fre").children[0].setAttribute('src', this.responseURL);
            document.getElementById("video-fre").load();
        }
    xhttp_vid_fre.open("GET", `videos/${name}/${name}-fre.mp4`);
    xhttp_vid_fre.send();

    }



    function ClickDoc() {
    const name = event.target.innerHTML;
    
    const xhttp_ita = new XMLHttpRequest();
    const xhttp_eng = new XMLHttpRequest();
    const xhttp_fre = new XMLHttpRequest();

    xhttp_ita.onload = function() {
        document.getElementById("text-ita").innerHTML =
        this.responseText;
    }
    xhttp_ita.open("GET", `videos/${name}/${name}-ita.txt`);
    xhttp_ita.send();

    xhttp_eng.onload = function() {
        document.getElementById("text-eng").innerHTML =
        this.responseText;
    }
    xhttp_eng.open("GET", `videos/${name}/${name}-eng.txt`);
    xhttp_eng.send();

    xhttp_fre.onload = function() {
        document.getElementById("text-fre").innerHTML =
        this.responseText;
    }
    xhttp_fre.open("GET", `videos/${name}/${name}-fre.txt`);
    xhttp_fre.send();
    
    const xhttp_vid_ita = new XMLHttpRequest();
    const xhttp_vid_eng = new XMLHttpRequest();
    const xhttp_vid_fre = new XMLHttpRequest();

    xhttp_vid_ita.onload = function() {
            document.getElementById("video-ita").children[0].setAttribute('src', this.responseURL);
            document.getElementById("video-ita").load();
        }
    xhttp_vid_ita.open("GET", `videos/${name}/${name}-ita.mp4`);
    xhttp_vid_ita.send();

    xhttp_vid_eng.onload = function() {
            document.getElementById("video-eng").children[0].setAttribute('src', this.responseURL);
            document.getElementById("video-eng").load();
        }
    xhttp_vid_eng.open("GET", `videos/${name}/${name}-eng.mp4`);
    xhttp_vid_eng.send(); 

    xhttp_vid_fre.onload = function() {
            document.getElementById("video-fre").children[0].setAttribute('src', this.responseURL);
            document.getElementById("video-fre").load();
        }
    xhttp_vid_fre.open("GET", `videos/${name}/${name}-fre.mp4`);
    xhttp_vid_fre.send(); 
    }