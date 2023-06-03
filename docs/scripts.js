"use strict";
document.addEventListener("DOMContentLoaded", () => {
    const t = document.getElementById("title");
    const all_codepen_flex = document.querySelectorAll(".ejercicio-flex");
    const changeVal = (checkBox, ret = 1) => {
        if (checkBox.checked)
            return ret;
        return 0;
    };
    const changeState = (_val, idCodeFlex) => {
        if (_val === 0) {
            idCodeFlex.style.resize = "none";
        }
        if (_val === 1) {
            idCodeFlex.style.resize = "vertical";
        }
        if (_val === 2) {
            idCodeFlex.style.resize = "horizontal";
        }
        if (_val === 3) {
            idCodeFlex.style.resize = "both";
        }
    };
    all_codepen_flex.forEach((code_flex) => {
        const idCodeFlex = code_flex.id;
        const checkBoxVertical = document.getElementById(`${idCodeFlex}-v`);
        const checkBoxHorizontal = document.getElementById(`${idCodeFlex}-h`);
        const widthPrinter = document.getElementById(`${idCodeFlex}-width`);
        const heightPrinter = document.getElementById(`${idCodeFlex}-height`);
        const resizeFrame = document.getElementById(`${idCodeFlex}-iframe`);
        const iframeContainer = document.getElementById(`${idCodeFlex}-iframe-container`);
        if (resizeFrame !== null) {
            iframeContainer.addEventListener("mousemove", () => {
                widthPrinter.innerText = `${resizeFrame.clientWidth}`;
                heightPrinter.innerText = `${resizeFrame.clientHeight}`;
            });
        }
        checkBoxVertical.addEventListener("click", e => {
            const _val = changeVal(e.target, 1) + changeVal(checkBoxHorizontal, 2);
            changeState(_val, code_flex);
        });
        checkBoxHorizontal.addEventListener("click", e => {
            const _val = changeVal(e.target, 2) + changeVal(checkBoxVertical, 1);
            changeState(_val, code_flex);
        });
    });
    const all_iframes_container = document.querySelectorAll(".iframe-container");
    all_iframes_container.forEach(e => {
        const frameId = e.id.slice(0, "ex-00".length);
        const widthPrinter = document.getElementById(`${frameId}-width`);
        const heightPrinter = document.getElementById(`${frameId}-height`);
        const resizeFrame = document.getElementById(`${frameId}-iframe`);
        if (resizeFrame !== null) {
            e.addEventListener("mousemove", () => {
                widthPrinter.innerText = `${resizeFrame.clientWidth}`;
                heightPrinter.innerText = `${resizeFrame.clientHeight}`;
            });
        }
    });
});
function openTAB(evt, cityName) {
    // Declare all variables
    var i, tablinks;
    // Get all elements with class="tabcontent" and hide them
    let tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    // evt.target.classList.toggle("active");
    evt.target.classList.toggle("active");
}
