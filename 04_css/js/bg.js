jQuery(document).ready(function ($) {
    var pg_number = parseInt(window.location.href.split('?')[1].split('=')[1]);
    var tema_pagina;

    // localStorage.clear();

    if (pg_number == 1) {
        document.body.style.backgroundImage = "url('./imgs/bg1.png')";
        document.body.style.backgroundAttachment = "fixed";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundSize = "cover";
    } else if (pg_number == 2) {
        document.body.style.backgroundImage = "url('./imgs/bg2.png')";
        document.body.style.backgroundAttachment = "fixed";
    } else if (pg_number == 3) {
        document.body.style.backgroundImage = "url('./imgs/bg3.png')";
        document.body.style.backgroundAttachment = "fixed";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundSize = "cover";
    }
});
