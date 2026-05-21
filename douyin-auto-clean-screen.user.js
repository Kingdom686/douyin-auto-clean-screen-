// ==UserScript==
// @name         抖音自动清屏初始版
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  自动开启抖音原生清屏 + 去除视频页面UI
// @author       TianLi
// @match        https://www.douyin.com/*
// @grant        none
// ==/UserScript==

(function () {

    'use strict';

    // ======================
    // 自动开启清屏
    // ======================

    function autoClear() {

        const btn =
            document.querySelector(
                '.xg-switch:not(.xg-switch-checked)'
            );

        if (btn) {

            btn.click();

            console.log(
                '[脚本] 已自动开启清屏'
            );
        }
    }

    // 页面变化时检测
    const observer =
        new MutationObserver(() => {

            autoClear();
        });

    observer.observe(
        document.body,
        {
            childList: true,
            subtree: true
        }
    );

    // 保险检测
    setInterval(
        autoClear,
        1000
    );

    // ======================
    // 去除UI
    // ======================

    const style =
        document.createElement(
            'style'
        );

    style.textContent = `

    /* 左下角文案 */
    .video-desc,
    .author-info,
    .xgplayer-name,
    .xgplayer-title {

        opacity: 0 !important;
        visibility: hidden !important;
        pointer-events: none !important;

        transition: none !important;
        animation: none !important;
    }

    `;

    document.head.appendChild(style);

})();
