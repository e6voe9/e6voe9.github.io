let o_o = () => document.querySelector('.background_preloader').style = "opacity:0;";
let o_i = () => document.querySelector('.background_preloader').style = "display:none;";
let d_n = () => {
    document.querySelector('.background_preloader-1').style = "display:none;";
    document.querySelector('.background_preloader-2').style = "display:flex;";
}
setTimeout(d_n, 10000);
setTimeout(o_o, 16000);
setTimeout(o_i, 17200);
let about = document.getElementById('navbar-about'),
    portfolio = document.getElementById('navbar-portfolio');

function asf() {
    document.getElementById('splat').style = "display:none;";
}

function fff() {
    document.querySelector('.first').style = "display:flex;";
    document.querySelector('.about').style = "display:none;";
    document.querySelector('.portfolio').style = "display:none;";
}

function aaa() {
    document.querySelector('.first').style = "display:none;";
    document.querySelector('.about').style = "display:flex;";
    document.querySelector('.portfolio').style = "display:none;";
}

function ppp() {
    document.querySelector('.first').style = "display:none;";
    document.querySelector('.about').style = "display:none;";
    document.querySelector('.portfolio').style = "display:flex;";
}

document.getElementById('navbar-logo').onclick = () => {
    document.getElementById('splat').style = "display:block;animation:splat_zoom_in 3.5s ease-in-out;";
    setTimeout(fff, 1750);
    setTimeout(asf, 3500);
};
document.getElementById('navbar-about').onclick = () => {
    document.getElementById('splat').style = "display:block;animation:splat_zoom_in 3.5s ease-in-out;";
    setTimeout(aaa, 1750);
    setTimeout(asf, 3500);
};
document.getElementById('navbar-portfolio').onclick = () => {
    document.getElementById('splat').style = "display:block;animation:splat_zoom_in 3.5s ease-in-out;";
    setTimeout(ppp, 1750);
    setTimeout(asf, 3500);
};