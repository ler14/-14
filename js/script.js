let body = document.querySelector("body");

if (localStorage.getItem("theme") == "dark") {
    body.classList.add("dark-theme");
} else if (localStorage.getItem("theme") == "light") {
    body.classList.remove("dark-theme");
}

function change() {
    let btnTheme = document.querySelector(".theme");

    btnTheme.addEventListener("click", changeTheme);

    function changeTheme() {
        body.classList.toggle("dark-theme");

        if (body.classList.contains("dark-theme")) {
            localStorage.setItem("theme", "dark");
        } else {
            localStorage.setItem("theme", "light");
        }
       
    }

    let timeText = document.querySelector(".time");

    let date = new Date();
    let time = date.toLocaleTimeString();
    timeText.innerHTML = time;

    function changeTime() {
        let date = new Date();
        let time = date.toLocaleTimeString();
        timeText.innerHTML = time;
    }
    setInterval(changeTime, 1000);
    
    const timeBlock = document.querySelector(".time-block");

    const redInputBg = document.querySelector("#redBg");
    const greenInputBg = document.querySelector("#greenBg");
    const blueInputBg = document.querySelector("#blueBg");

    redInputBg.addEventListener("input", changeBackground);
    greenInputBg.addEventListener("input", changeBackground);
    blueInputBg.addEventListener("input", changeBackground);

    let rBg;
    let gBg;
    let bBg;
    if (localStorage.getItem("r") != null) {
        rBg = parseInt(localStorage.getItem("r"));
        gBg = parseInt(localStorage.getItem("g"));
        bBg = parseInt(localStorage.getItem("b"));
        redInputBg.value = rBg;
        greenInputBg.value = gBg;
        blueInputBg.value = bBg;
    } else {
        rBg = redInputBg.value;
        gBg = greenInputBg.value;
        bBg = blueInputBg.value;
    }
    
    timeBlock.style.background = `rgb(${rBg} ${gBg} ${bBg})`;
    function changeBackground() {
        localStorage.setItem("r", redInputBg.value);
        localStorage.setItem("g", greenInputBg.value);
        localStorage.setItem("b", blueInputBg.value);
        if (localStorage.getItem("r") != null) {
            rBg = parseInt(localStorage.getItem("r"));
            gBg = parseInt(localStorage.getItem("g"));
            bBg = parseInt(localStorage.getItem("b"));
        }
        timeBlock.style.background = `rgb(${rBg} ${gBg} ${bBg})`;
    }


    const redInputText = document.querySelector("#redText");
    const greenInputText = document.querySelector("#greenText");
    const blueInputText = document.querySelector("#blueText");

    redInputText.addEventListener("input", changeTextColor);
    greenInputText.addEventListener("input", changeTextColor);
    blueInputText.addEventListener("input", changeTextColor);

    let rText;
    let gText;
    let bText;
    if (localStorage.getItem("rText") != null) {
        rText = parseInt(localStorage.getItem("rText"));
        gText = parseInt(localStorage.getItem("gText"));
        bText = parseInt(localStorage.getItem("bText"));
    }else{
        redInputText.value = rText;
        greenInputText.value = gText;
        blueInputText.value = bText;
    }
    function changeTextColor() {
        localStorage.setItem("rText", redInputText.value);
        localStorage.setItem("gText", greenInputText.value);
        localStorage.setItem("bText", blueInputText.value);
    }
    if (localStorage.getItem("r") != null) {
        rText = parseInt(localStorage.getItem("rText"));
        gText = parseInt(localStorage.getItem("gText"));
        bText = parseInt(localStorage.getItem("bText"));
    }
    timeBlock.style.color = `rgb(${rText} ${gText} ${bText})`;

    changeTextColor();


    const btnChangeText = document.querySelector("#typeColor");
    const btnChangeBg = document.querySelector("#typeBg");
    const blockChangeText = document.querySelector("#typeTextBlock");
    const blockChangeBg = document.querySelector("#typeBgBlock");

    btnChangeText.addEventListener("click", changeTypeColor);
    btnChangeBg.addEventListener("click", changeTypeColor);

    function changeTypeColor() {
        if(btnChangeText.checked) {
            blockChangeText.classList.contains("disabled") ? blockChangeText.classList.remove("disabled") : true;
            blockChangeBg.classList.contains("disabled") ? true : blockChangeBg.classList.add("disabled");
        } else if(btnChangeBg.checked) {
            blockChangeBg.classList.contains("disabled") ? blockChangeBg.classList.remove("disabled") : true;
            blockChangeText.classList.contains("disabled") ? true : blockChangeText.classList.add("disabled");
        }
    }
}
change();

