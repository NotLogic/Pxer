// ==UserScript==
// @name          Pxer-6
// @namespace     https://github.com/pea3nut/Pxer
// @description   pixiv.net Tools
// @include       http://www.pixiv.net/member_illust.php*
// @include       http://www.pixiv.net/bookmark.php*
// @include       http://www.pixiv.net/search.php*
// ==/UserScript==
javascript:void((function() {
    window.pxerDefinePxerConfig ={
        "URL_ROOT":"http://127.0.0.1/github/pxer-beta-6/",
        "TEMPLATE_URL":'lib/template.php',
        "DEBUG":false,
        "CACHE":true,
    };
    document.head.appendChild(
        document.createElement("script")
    ).src
        =window.pxerDefinePxerConfig['URL_ROOT']+"lib/launcher.min.js?"
        +(new Date()).getTime()
})());