/*!
 * Color mode toggler for Bootstrap's docs (https://getbootstrap.com/)
 * Copyright 2011-2022 The Bootstrap Authors
 * Licensed under the Creative Commons Attribution 3.0 Unported License.
 *
 * Modified by Lee Howard - 2/3/23
 */
(()=>{const e=localStorage.getItem("theme"),t=document.querySelector("#color-mode-label"),o=()=>e||(window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark"),d=function(e){"light"===e&&window.matchMedia("(prefers-color-scheme: light)").matches?(document.documentElement.setAttribute("data-bs-theme","light"),t.textContent="Light Mode"):(document.documentElement.setAttribute("data-bs-theme","dark"),t.textContent=" Dark Mode")};window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",(()=>{"light"===e&&"dark"===e||d(o())})),window.addEventListener("DOMContentLoaded",(()=>{d(o());const e=document.querySelector("#color-mode");"dark"===o()&&(e.checked=!0),e.addEventListener("click",(e=>{e.target.checked?document.documentElement.setAttribute("data-bs-theme","dark"):document.documentElement.setAttribute("data-bs-theme","light");const t=document.documentElement.getAttribute("data-bs-theme");localStorage.setItem("theme",t),d(t),console.log(t)}))}))})();
//# sourceMappingURL=index.a5c6929a.js.map
