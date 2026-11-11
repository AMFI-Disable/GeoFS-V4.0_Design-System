// ==UserScript==
// @name         GeoFS-V4.0_Design-System
// @namespace    https://greasyfork.org/users/1594049
// @version      0.2.0
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
        version: '0.2.0',
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

// Restore the V3.9 ecosystem styles using the V4 initialization lifecycle.
window.GeoFSV4Core?.initialize('V4-Shared-Styles', () => {
    if (document.getElementById('geofs-design-system')) return;
    
    const css = `
/* ── GeoFS-V4.0_Design-System ── */
/* Features: Native GeoFS styling layout with native in-flight controls and neutral colors. */

/* ── Addon-Pack dropdown items ── */
.addonpack-dropdown {
    cursor: pointer;
    padding: 10px 14px;
    margin: 3px 0;
    border-radius: 8px;
    background: rgba(30, 30, 30, 0.9);
    color: #ffffff;
    font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
    font-size: 13px;
    font-weight: 600;
    letter-spacing: 0.3px;
    transition: all 0.25s ease;
    position: relative;
    border: 1px solid rgba(255, 255, 255, 0.1);
    -webkit-backdrop-filter: blur(6px);
    backdrop-filter: blur(6px);
    -webkit-user-select: none;
    user-select: none;
}
.addonpack-dropdown:hover {
    background: rgba(45, 45, 45, 0.95);
    border-color: rgba(255, 255, 255, 0.4);
    transform: translateX(2px);
    box-shadow: 0 2px 12px rgba(0,0,0,0.15);
}

/* ── Chevron icon ── */
.addonpack-chevron {
    display: inline-block;
    margin-right: 8px;
    font-size: 10px;
    transition: transform 0.3s ease;
    color: #dddddd;
    -webkit-user-select: none;
    user-select: none;
}
.addonpack-chevron.open {
    transform: rotate(90deg);
}

/* ── Sub-content containers ── */
.addonpack-content {
    overflow: hidden;
    max-height: 0;
    transition: max-height 0.4s ease, opacity 0.3s ease, padding 0.3s ease;
    opacity: 0;
    padding: 0 8px;
    background: rgba(20, 20, 20, 0.95);
    border-radius: 8px;
    border: 1px solid rgba(255, 255, 255, 0.3);
    margin: 2px 4px 8px 4px;
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
}
.addonpack-content.open {
    max-height: 5000px;
    opacity: 1;
    padding: 10px;
}

/* ── Sub-items (addon entries, aircraft entries) ── */
.addonpack-sub-item {
    cursor: pointer;
    padding: 8px 12px;
    margin: 2px 0;
    border-radius: 6px;
    background: rgba(255, 255, 255, 0.03);
    color: #eef2f7;
    font-size: 12.5px;
    font-weight: 500;
    transition: all 0.2s ease;
    border-left: 3px solid transparent;
    -webkit-user-select: none;
    user-select: none;
}
.addonpack-sub-item:hover {
    background: rgba(255, 255, 255, 0.08);
    border-left-color: #dddddd;
    color: #ffffff;
}

/* ── Description text ── */
.addonpack-description {
    overflow: hidden;
    max-height: 0;
    opacity: 0;
    transition: max-height 0.35s ease, opacity 0.25s ease, padding 0.25s ease;
    padding: 0 10px;
    color: #ffffff;
    font-size: 11.5px;
    line-height: 1.5;
    white-space: pre-wrap;
    border-left: 2px solid rgba(255, 255, 255, 0.5);
    margin-left: 12px;
}
.addonpack-description.open {
    max-height: 8000px;
    opacity: 1;
    padding: 8px 10px;
}

/* ── Flight data display (HUD) ── */
#flightDataDisplay {
    position: fixed;
    top: 70px;
    right: 20px;
    width: 230px;
    background: rgba(26, 26, 26, 0.9);
    padding: 14px 16px;
    border-radius: 12px;
    font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
    font-size: 12.5px;
    font-weight: 600;
    color: #e0e8f0;
    pointer-events: auto;
    z-index: 100000;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 5px 10px;
    box-shadow: 0 4px 20px rgba(0,0,0,0.35);
    -webkit-backdrop-filter: blur(8px);
    backdrop-filter: blur(8px);
    border: 1px solid rgba(255, 255, 255, 0.12);
    cursor: move;
    -webkit-user-select: none;
    user-select: none;
}
#flightDataDisplay .hud-label {
    color: #dddddd;
    font-size: 10px;
    font-weight: 400;
    letter-spacing: 0.5px;
}
#flightDataDisplay .hud-value {
    color: #fff;
    font-size: 13px;
}
#flightDataDisplay .hud-value.warn {
    color: #ffb347;
}
#flightDataDisplay .hud-value.danger {
    color: #ff6b6b;
}
#flightDataDisplay .hud-cell {
    display: flex;
    flex-direction: column;
    gap: 1px;
}
#flightDataDisplay .hud-drag-handle {
    grid-column: 1 / -1;
    text-align: center;
    color: rgba(255, 255, 255, 0.3);
    font-size: 14px;
    letter-spacing: 4px;
    line-height: 1;
    margin-bottom: 2px;
    cursor: move;
    -webkit-user-select: none;
    user-select: none;
}
#flightDataDisplay .hud-section-header {
    grid-column: 1 / -1;
    font-size: 10px;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 1.2px;
    color: rgba(255, 255, 255, 0.8);
    margin-top: 10px;
    margin-bottom: 4px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.15);
    padding-bottom: 2px;
}
#flightDataDisplay .hud-section-header:first-of-type {
    margin-top: 2px;
}
#flightDataDisplay .unified-tabs {
    grid-column: 1 / -1;
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 4px;
    margin: 2px 0 4px;
}
#flightDataDisplay .unified-tab {
    background: rgba(255,255,255,0.05);
    border: 1px solid rgba(255,255,255,0.1);
    color: rgba(255,255,255,0.85);
    border-radius: 4px;
    font-size: 10px;
    cursor: pointer;
    padding: 3px 2px;
    font-family: Roboto, sans-serif;
    font-weight: 700;
    letter-spacing: 0.5px;
    transition: all 0.2s;
    -webkit-user-select: none;
    user-select: none;
}
#flightDataDisplay .unified-tab.active {
    background: rgba(255, 255, 255, 0.15);
    border-color: #dddddd;
    color: #dddddd;
}
#flightDataDisplay .unified-content {
    display: none;
    grid-column: 1 / -1;
}
#flightDataDisplay .unified-content.active {
    display: block;
}
#flightDataDisplay .unified-content.unified-grid.active {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 5px 10px;
}
#flightDataDisplay .full-width {
    grid-column: 1 / -1;
}

/* ── Category headers inside Aircraft menu ── */
.addonpack-category {
    padding: 8px 14px;
    margin: 4px 0;
    border-radius: 6px;
    background: rgba(255, 255, 255, 0.12);
    color: #ffffff;
    font-size: 12px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
    cursor: pointer;
    transition: all 0.2s ease;
    -webkit-user-select: none;
    user-select: none;
}
.addonpack-category:hover {
    background: rgba(255, 255, 255, 0.2);
}

/* ── HUD minimize button ── */
#hudMinimizeBtn {
    position: fixed;
    top: 50% !important;
    margin-top: -15px !important;
    left: 0 !important;
    transform: none !important;
    width: 24px;
    height: 40px;
    background: rgba(30, 30, 30, 0.9);
    border: 1px solid rgba(255, 255, 255, 0.15);
    border-left: none;
    border-radius: 0 7px 7px 0;
    color: #dddddd;
    font-size: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: move;
    z-index: 100002;
    -webkit-backdrop-filter: blur(8px);
    backdrop-filter: blur(8px);
    box-shadow: 0 2px 10px rgba(0,0,0,0.3);
    transition: background 0.2s ease, border-color 0.2s ease, color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease;
    -webkit-user-select: none;
    user-select: none;
}
#hudMinimizeBtn:hover {
    background: rgba(45, 45, 45, 0.95);
    border-color: rgba(255, 255, 255, 0.4);
    color: #fff;
    box-shadow: 0 4px 14px rgba(0,0,0,0.4);
}
#flightDataDisplay.hud-minimized {
    display: none !important;
}

.addonpack-block-container {
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
    margin-top: 8px;
    justify-content: space-between;
}
.addonpack-block {
    flex: 1 0 18%;
    height: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 4px;
    color: #ffffff;
    font-size: 10px;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.2s ease;
    -webkit-user-select: none;
    user-select: none;
}
.addonpack-block:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.3);
    color: #fff;
}
.addonpack-block.active {
    background: rgba(255, 255, 255, 0.15);
    border-color: #dddddd;
    color: #fff;
    box-shadow: 0 0 8px rgba(255, 255, 255, 0.25);
}

/* ── Addon-Pack Card System ── */
.addonpack-card {
    position: fixed;
    left: 20px;
    bottom: 60px;
    width: 330px;
    background: rgba(26, 26, 26, 0.95);
    color: #fff;
    border-radius: 18px;
    border: 1px solid rgba(255, 255, 255, 0.15);
    -webkit-backdrop-filter: blur(14px);
    backdrop-filter: blur(14px);
    box-shadow: 0 12px 50px rgba(0,0,0,0.6);
    font-family: 'Roboto', system-ui, sans-serif;
    z-index: 9999;
    display: none;
    flex-direction: column;
    transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.15), opacity 0.3s ease;
    transform: translateX(-120%);
    opacity: 0;
    pointer-events: auto;
}
.addonpack-card.active {
    display: flex;
    transform: translateX(0);
    opacity: 1;
}
.addonpack-card-header {
    padding: 14px 18px;
    background: rgba(255, 255, 255, 0.03);
    border-radius: 18px 18px 0 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: move;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    -webkit-user-select: none;
    user-select: none;
}
.addonpack-card-header span {
    font-size: 0.75rem;
    font-weight: 800;
    letter-spacing: 1.5px;
    color: #dddddd;
    text-transform: uppercase;
}
.addonpack-card-content {
    padding: 20px;
}
.addonpack-score-circle {
    width: 72px;
    height: 72px;
    border-radius: 50%;
    border: 3px solid #dddddd;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.25);
    background: rgba(255, 255, 255, 0.03);
}
.addonpack-badge {
    flex: 1;
    margin-left: 15px;
    padding: 12px;
    border-radius: 12px;
    text-align: center;
    font-weight: 900;
    font-size: 1rem;
    letter-spacing: 1px;
    text-shadow: 0 2px 4px rgba(0,0,0,0.3);
    -webkit-user-select: none;
    user-select: none;
}
.badge-butter { background: linear-gradient(135deg, #22c55e, #16a34a); color: #fff; box-shadow: 0 0 20px rgba(34, 197, 94, 0.4); }
.badge-acceptable { background: linear-gradient(135deg, #eab308, #ca8a04); color: #000; box-shadow: 0 0 20px rgba(234, 179, 8, 0.4); }
.badge-hard { background: linear-gradient(135deg, #ef4444, #dc2626); color: #fff; box-shadow: 0 0 20px rgba(239, 68, 68, 0.4); }
.badge-crash { background: linear-gradient(135deg, #7f1d1d, #450a0a); color: #fff; box-shadow: 0 0 20px rgba(127, 29, 29, 0.6); }
.badge-takeoff { background: linear-gradient(135deg, #3b82f6, #2563eb); color: #fff; box-shadow: 0 0 20px rgba(59, 130, 246, 0.4); }

/* ── Custom Range Sliders ── */
.addonpack-range {
    -webkit-appearance: none;
    appearance: none;
    width: 100%;
    height: 6px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 5px;
    outline: none;
    margin: 10px 0;
    transition: background 0.3s;
}
.addonpack-range::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 16px;
    height: 16px;
    background: #dddddd;
    border-radius: 50%;
    cursor: pointer;
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
    border: 2px solid #fff;
    transition: transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
.addonpack-range::-webkit-slider-thumb:hover {
    transform: scale(1.2);
}

/* ── Minimalist Inputs ── */
.addonpack-input {
    background: rgba(0, 0, 0, 0.3);
    border: 1px solid rgba(255, 255, 255, 0.15);
    color: #dddddd;
    border-radius: 6px;
    padding: 4px 8px;
    font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
    font-size: 11px;
    text-align: center;
    transition: border-color 0.2s;
}
.addonpack-input:focus {
    border-color: #dddddd;
    outline: none;
}

/* ── Standard Action Buttons ── */
.addonpack-btn {
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.2);
    color: #e0e6ed;
    padding: 8px 16px;
    border-radius: 8px;
    cursor: pointer;
    font-weight: 700;
    font-size: 12px;
    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    text-transform: uppercase;
    letter-spacing: 0.5px;
    -webkit-user-select: none;
    user-select: none;
}
.addonpack-btn:hover {
    background: rgba(255, 255, 255, 0.15);
    border-color: #dddddd;
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(0,0,0,0.2);
}
.addonpack-btn.danger {
    background: rgba(239, 68, 68, 0.15);
    border-color: rgba(239, 68, 68, 0.4);
    color: #ff6b6b;
}
.addonpack-btn.danger:hover {
    background: rgba(239, 68, 68, 0.3);
    border-color: #ef4444;
}
.addonpack-btn.success {
    background: rgba(34, 197, 94, 0.15);
    border-color: rgba(34, 197, 94, 0.4);
    color: #4ade80;
}
.addonpack-btn.success:hover {
    background: rgba(34, 197, 94, 0.3);
    border-color: #22c55e;
}
    
/* GeoFS in-flight controls: native black pads, gray outlines, and neutral typography. */
#flightDataDisplay, #hudMinimizeBtn, .addonpack-card, #opEngineCard, #geofs-failure-menu {
    background: rgba(0, 0, 0, 0.8) !important;
    border: 1px solid #888 !important;
    border-radius: 15px !important;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.35) !important;
    font-family: Helvetica, Arial, sans-serif !important;
    backdrop-filter: none !important;
    -webkit-backdrop-filter: none !important;
}
#flightDataDisplay .hud-drag-handle, #flightDataDisplay .hud-section-header,
#flightDataDisplay .hud-label, #opEngineHeaderText, #fail-header span {
    color: #ddd !important;
    font-family: Helvetica, Arial, sans-serif !important;
    letter-spacing: normal !important;
}
#flightDataDisplay .unified-tab {
    background: rgba(0, 0, 0, 0.6);
    border: 1px solid #888;
    border-radius: 15px;
    color: #fff;
    font-family: Helvetica, Arial, sans-serif;
    font-weight: normal;
    letter-spacing: normal;
    min-width: 0;
    overflow-wrap: anywhere;
}
#flightDataDisplay .unified-tab.active {
    background: #4caf50;
    border-color: #888;
    color: #fff;
}
#flightDataDisplay .hud-section-header { border-bottom-color: #888; }
#opEngineHeader { background: transparent !important; border-bottom: 1px solid #888 !important; }
#geofs-failure-menu, #opEngineCard, #statsCard { accent-color: #536dfe; }
#fail-btn { font-family: Helvetica, Arial, sans-serif; font-weight: normal !important; }
/* Keep the existing content and controls, but remove decorative inner cards. */
#flightDataDisplay .hud-section-header { letter-spacing: normal; margin-top: 6px; }
#hud-checklist-display { background: transparent !important; border: 0 !important; padding: 0 !important; }
#geofs-failure-menu .sect-header { background: transparent !important; border-bottom: 1px solid #666; border-radius: 0 !important; }
#statsCard .stat-item { background: transparent !important; border: 0 !important; box-shadow: none !important; }
#statsCard .addonpack-score-circle { box-shadow: none !important; }

`;

    const style = document.createElement('style');
    style.id = 'geofs-design-system';
    style.textContent = css;
    document.head.appendChild(style);
    
    console.log("[GeoFS-V4.0_Design-System] >> Styles injected via library wrapper.");
    if (window.V40_NOTIF) window.V40_NOTIF.success("GeoFS-V4.0_Design-System V2.0.1 Loaded.");
}).catch(() => {});
