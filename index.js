// ==UserScript==
// @name        HitomiMosaic
// @namespace   HitomiMosaic
// @match       *://hitomi.la/*
// @version     1.0.0
// @author      ombe1229
// @description Hitomi thumbnail mosaic
// @run-at      document-end
// ==/UserScript==


const tagList = [
    "scat",
    "guro",
    "amputee",
    "snuff",
    "birth",
    "males only",
    "yaoi",
    "dog",
    "pig",
    "insect",
    "toddler",
];

(new MutationObserver(mosaic).observe(document, { childList: true, subtree: true }));

function mosaic(changes, observer) {
    let containerList;
    if ((containerList = document.querySelectorAll("div.gallery-content > .manga, .acg, .dj, .cg")).length > 0) {
        observer.disconnect();

        containerList.forEach(function (element) {
            let tagContainer = element.querySelector(".relatedtags");
            let tags = [...tagContainer.querySelectorAll("li")].map(tag => tag.innerText);
            if (tags.some(tag => tagList.includes(tag.toLowerCase().replace(/\s(♀|♂)/g, "")))) {
                element.querySelector(".dj-img-cont").remove();
            }
        });
    }
};
