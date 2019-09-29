'use strict';

let width = window.innerWidth;
let height = window.innerHeight;
let charparams = "ʼЫыЪъЁёЙЦУКЕНГШЩЗХЇФІВАПРОЛДЖЄЯЧСМИТЬБЮйцукенгшщзхїфівапролджєячсмитьбюABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwz1234567890~!@#$%^&*()_-=+\\/|.?,\'\":<>";
let text = document.getElementById('text');

function countResolution(w, h){
    return (w / 11).toFixed() * (h / 11).toFixed();
}

function genereteChars(length, charparams){
    return Array.apply(null, Array(length || 0)).map(function() {
        return charparams.charAt(Math.random() * charparams.length);
    }).join(' ');
}

function run(){
    let chars = countResolution(width, height);
    text.innerHTML = "" + genereteChars(chars, charparams) + "";
}

setInterval(run, 0);
