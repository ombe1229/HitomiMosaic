// ==UserScript==
// @name        HitomiMosaic
// @namespace   HitomiMosaic
// @match       *://hitomi.la/*
// @version     1.0.0
// @author      ombe1229
// @description Hitomi thumbnail mosaic
// @run-at      document-end
// ==/UserScript==

setTimeout(function () {

    const tagList = [
        "Scat ♂",
        "Scat ♀",
        "Guro ♂",
        "Guro ♀",
        "Amputee ♂",
        "Amputee ♀",
    ];

    const galleryContent = document.querySelector(".gallery-content");
    const containerList = galleryContent.querySelectorAll(".manga, .acg, .dj");
    containerList.forEach(function (element) {
        let isDisgusting = false;
        let tagContainer = element.querySelector(".relatedtags");
        let tags = tagContainer.querySelectorAll("li");
        for (let tag of tags) {
            if (tagList.includes(tag.innerText)) {
                isDisgusting = true;
                break;
            };
        };
        if (isDisgusting) {
            element.querySelector(".dj-img-cont").remove();
        }
    });
}, 1000)();
