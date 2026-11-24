/* Phone layout helpers. On screens up to 700px wide: card stacks become swipe rows with a counter, long blocks fold behind Show More, and long write ups start closed. */
(() => {
  const mq = matchMedia("(max-width: 700px)"); if (!mq.matches) return;
  const SWIPE = ".rd-grid, #building .cards, .ts-row, .cases.more, #impact .impact, #beyond .impact, .pillars, .quotes, .posts, .lead-band, .thumbs, .styles, .more-grid, .flow, .roles, .ask, main .facts, .vs, .logos, .schemes, .files, .type, .timeline, #case-list .cases.lead-row + .cases";
  const SMALL = ".sw, .assets";
  const CLAMP = [[".tool-head p.text", 84], [".tool-head ul.chips", 88], ["#credentials .creds", 300], ["#credentials .comp", 132], ["#credentials .chips", 132], [".timeline > *", 330], [".icard", 260], ["#building .cards > *", 520], [".more-grid > *", 480], [".case", 440], [".quotes > *", 330], [".posts > *", 300], [".lead-band > *", 300], [".node", 400]];
  const bg = el => { for (let n = el; n && n !== document.documentElement; n = n.parentElement) { const c = getComputedStyle(n).backgroundColor; if (c && c !== "rgba(0, 0, 0, 0)" && c !== "transparent") return c; } return "#f3f5f8"; };
  const swipe = (el, small) => { if (el.dataset.m || el.children.length < 2) return; el.dataset.m = "1"; el.classList.add("m-swipe"); if (small) el.classList.add("m-small");
    const fit = () => { const w = el.clientWidth; if (!w) return; el.style.setProperty("--m-w", Math.round(w * (small ? .44 : .84)) + "px"); el.style.setProperty("--m-pad", Math.round(small ? w * .04 : w * .08) + "px"); }; fit(); addEventListener("resize", fit);
    const n = el.children.length, ctl = document.createElement("div"); ctl.className = "m-ctl";
    ctl.innerHTML = '<button type="button" aria-label="Previous">&#8249;</button><span aria-live="polite"></span><button type="button" aria-label="Next">&#8250;</button>';
    const [prev, label, next] = ctl.children, step = () => (el.children[0].getBoundingClientRect().width + 12) || 300;
    const upd = () => { const i = Math.min(n, Math.round(el.scrollLeft / step()) + 1), end = el.scrollLeft + el.clientWidth >= el.scrollWidth - 12; label.textContent = (end ? n : i) + " of " + n + " · swipe"; prev.disabled = el.scrollLeft < 8; next.disabled = end; };
    prev.addEventListener("click", () => el.scrollBy({ left: -step(), behavior: "smooth" })); next.addEventListener("click", () => el.scrollBy({ left: step(), behavior: "smooth" }));
    let t; el.addEventListener("scroll", () => { clearTimeout(t); t = setTimeout(upd, 60); }, { passive: true });
    if (el.hidden) ctl.hidden = true; new MutationObserver(() => { ctl.hidden = el.hidden; fit(); upd(); }).observe(el, { attributes: true, attributeFilter: ["hidden"] });
    el.insertAdjacentElement("afterend", ctl); upd(); };
  const clamp = (el, h) => { if (el.dataset.m || (el.parentElement.closest(".m-clamp")) || el.scrollHeight < h + 90) return; el.dataset.m = "1"; el.classList.add("m-clamp"); el.style.setProperty("--m-h", h + "px"); el.style.setProperty("--m-fade", bg(el));
    const b = document.createElement("button"); b.type = "button"; b.className = "m-more"; b.textContent = "Read More"; b.setAttribute("aria-expanded", "false");
    b.addEventListener("click", () => { const o = el.classList.toggle("m-open"); b.textContent = o ? "Read Less" : "Read More"; b.setAttribute("aria-expanded", String(o)); if (!o) el.scrollIntoView({ block: "nearest" }); });
    if (el.parentElement.classList.contains("m-swipe") || getComputedStyle(el).position === "absolute") { b.classList.add("m-in"); el.appendChild(b); } else el.insertAdjacentElement("afterend", b); };
  const run = () => {
    document.querySelectorAll("details.story[open], details.ag-group[open], details.kr[open]").forEach(d => { if (!d.dataset.m) { d.dataset.m = "1"; d.open = false; } });
    document.querySelectorAll("details.story, details.ag-group, details.kr").forEach(d => { d.dataset.m = "1"; });
    document.querySelectorAll(SWIPE).forEach(el => swipe(el, false)); document.querySelectorAll(SMALL).forEach(el => swipe(el, true));
    CLAMP.forEach(([sel, h]) => document.querySelectorAll(sel).forEach(el => { clamp(el, h); }));
  };
  let t; const later = () => { clearTimeout(t); t = setTimeout(run, 150); };
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", later); else later();
  addEventListener("load", later);
  new MutationObserver(m => { if (m.some(x => [...x.addedNodes].some(n => n.nodeType === 1 && !n.classList.contains("m-ctl") && !n.classList.contains("m-more")))) later(); }).observe(document.documentElement, { childList: true, subtree: true });
})();
