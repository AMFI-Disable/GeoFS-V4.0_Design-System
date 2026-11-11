// ==UserScript==
// @name         GeoFS-V4.0_Design-System
// @namespace    https://greasyfork.org/users/1594049
// @version      0.1.1
// @description  Shared controls and styles for the GeoFS V4.0 ecosystem beta.
// @author       AMFI-Disable
// @icon         https://www.geo-fs.com/images/icons/favicon.ico
// @match        https://beta.geo-fs.com/geofs.php*
// @match        https://www.geo-fs.com/geofs.php*
// @require      https://update.greasyfork.org/scripts/604885/code.js
// @grant        none
// @run-at       document-idle
// @license      MIT
// ==/UserScript==
(() => {
    'use strict';
    if (window.GeoFSV4Design) return;
    const core = window.GeoFSV4Core;
    if (!core) { console.error('[GeoFS-V4.0_Design-System] Core Library missing'); return; }
    const api = {
        version: '0.1.1',
        button(label, action) {
            const button = document.createElement('button');
            button.type = 'button'; button.className = 'g4-button'; button.textContent = label;
            button.addEventListener('click', action); return button;
        },
        panel(title) {
            const section = document.createElement('section'); section.className = 'g4-panel';
            const heading = document.createElement('h2'); heading.className = 'g4-title'; heading.textContent = title;
            section.appendChild(heading); return section;
        }
    };
    window.GeoFSV4Design = api;
    core.initialize('Design-System', () => {
        if (document.getElementById('geofs-v4-design')) return;
        const style = document.createElement('style'); style.id = 'geofs-v4-design';
        style.textContent = `.g4-panel{box-sizing:border-box;background:#252525;color:#eee;font:14px Arial,sans-serif;border:1px solid #666;border-radius:3px;padding:10px;box-shadow:0 3px 12px #0009}.g4-panel *{box-sizing:border-box}.g4-title{font-size:14px;font-weight:600;margin:0 0 10px;color:#fff}.g4-button{font:inherit;cursor:pointer;color:#eee;background:#444;border:1px solid #777;border-radius:3px;padding:6px 10px}.g4-button:hover,.g4-button:focus-visible{background:#5a5a5a}.g4-button[aria-pressed=true]{background:#467c3a;border-color:#8caf82}.g4-panel input,.g4-panel select{font:inherit;color:#fff;background:#333;border:1px solid #777;border-radius:2px;padding:5px}.g4-panel label{display:flex;gap:8px;align-items:center}.g4-panel :focus-visible{outline:2px solid #ffb13b;outline-offset:2px}`;
        document.head.appendChild(style);
    }).catch(() => {});
})();
