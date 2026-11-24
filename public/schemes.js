/* Color scheme picker. The choice is kept in this browser only; the site works without it. */
(() => {
  const SCHEMES = [
    ["navy-amber", "Navy and Amber", ["#0c1a2e", "#f2b43c", "#8fb8de"]],
    ["red-white-blue", "Red, White, and Blue", ["#0a2342", "#c8102e", "#ffffff"]],
    ["blue-silver", "Blue and Silver", ["#0b2a5b", "#c8d0da", "#93c5fd"]],
    ["graphite-red", "Graphite, Red, and Silver", ["#111827", "#c8102e", "#c8d0da"]],
  ];
  const root = document.documentElement;
  const read = () => { try { return localStorage.getItem("nc.scheme"); } catch (e) { return null; } };
  const apply = id => { if (SCHEMES.some(s => s[0] === id)) root.dataset.scheme = id; };
  apply(read() || root.dataset.scheme || "navy-amber");
  const build = () => {
    const bar = document.querySelector("header.nav .wrap"); if (!bar || bar.querySelector(".scheme")) return;
    const box = document.createElement("div"); box.className = "scheme";
    box.innerHTML = '<button type="button" aria-haspopup="true" aria-expanded="false" aria-label="Change the color scheme" title="Change the color scheme"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 3a9 9 0 0 0 0 18c1.1 0 2-.9 2-2 0-.5-.2-1-.5-1.300-.3-.4-.5-.8-.5-1.300 0-1.100.9-2 2-2h2.300A4.700 4.700 0 0 0 22 9.700C22 6 17.500 3 12 3zM6.500 12a1.500 1.500 0 1 1 0-3 1.500 1.500 0 0 1 0 3zm3-4a1.500 1.500 0 1 1 0-3 1.500 1.500 0 0 1 0 3zm5 0a1.500 1.500 0 1 1 0-3 1.500 1.500 0 0 1 0 3zm3 4a1.500 1.500 0 1 1 0-3 1.500 1.500 0 0 1 0 3z"/></svg></button><div class="scheme-menu" role="menu" hidden><b>Color Scheme</b></div>';
    const btn = box.querySelector("button"), menu = box.querySelector(".scheme-menu");
    SCHEMES.forEach(([id, name, sw]) => {
      const b = document.createElement("button"); b.type = "button"; b.setAttribute("role", "menuitemradio"); b.dataset.id = id;
      b.innerHTML = "<i>" + sw.map(c => '<span style="background:' + c + '"></span>').join("") + "</i>" + name;
      b.addEventListener("click", () => { apply(id); try { localStorage.setItem("nc.scheme", id); } catch (e) { /* kept for this visit only */ } mark(); close(); });
      menu.appendChild(b);
    });
    const link = document.createElement("a"); link.href = "brand.html"; link.className = "scheme-link"; link.innerHTML = "<b>Brand Page</b><span>Logos, colors, and downloads</span>"; menu.appendChild(link);
    const mark = () => menu.querySelectorAll("button").forEach(b => b.setAttribute("aria-checked", String(b.dataset.id === root.dataset.scheme)));
    const close = () => { menu.hidden = true; btn.setAttribute("aria-expanded", "false"); };
    btn.addEventListener("click", e => { e.stopPropagation(); menu.hidden = !menu.hidden; btn.setAttribute("aria-expanded", String(!menu.hidden)); mark(); });
    document.addEventListener("click", e => { if (!box.contains(e.target)) close(); });
    document.addEventListener("keydown", e => { if (e.key === "Escape") close(); });
    bar.appendChild(box);
    /* Phone menu: one button that opens every tab the wide layout shows. */
    const head = bar.closest("header.nav"), nav = bar.querySelector("nav");
    if (head && nav && !bar.querySelector(".nav-toggle")) {
      if (!nav.id) nav.id = "site-menu";
      const t = document.createElement("button"); t.type = "button"; t.className = "nav-toggle"; t.setAttribute("aria-controls", nav.id); t.setAttribute("aria-expanded", "false"); t.setAttribute("aria-label", "Open the menu");
      t.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" aria-hidden="true"><path class="a" d="M4 7h16M4 12h16M4 17h16"/><path class="b" d="M6 6l12 12M18 6L6 18"/></svg><span>Menu</span>';
      const set = open => { head.classList.toggle("nav-open", open); t.setAttribute("aria-expanded", String(open)); t.setAttribute("aria-label", open ? "Close the menu" : "Open the menu"); if (!open) nav.querySelectorAll("details.menu").forEach(d => { d.open = false; }); };
      t.addEventListener("click", e => { e.stopPropagation(); set(!head.classList.contains("nav-open")); });
      nav.addEventListener("click", e => { if (e.target.closest("a")) set(false); });
      document.addEventListener("click", e => { if (head.classList.contains("nav-open") && !head.contains(e.target)) set(false); });
      document.addEventListener("keydown", e => { if (e.key === "Escape" && head.classList.contains("nav-open")) { set(false); t.focus(); } });
      matchMedia("(min-width: 901px)").addEventListener("change", e => { if (e.matches) set(false); });
      bar.appendChild(t);
    }
  };
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", build); else build();
})();

/* Grouped menus: only one open at a time, close on outside click, Escape, or after choosing a link. */
(() => { const all = () => document.querySelectorAll("details.menu");
  document.addEventListener("click", e => all().forEach(d => { if (!d.contains(e.target) || e.target.closest("details.menu a")) d.open = false; }));
  document.addEventListener("toggle", e => { if (e.target.matches && e.target.matches("details.menu") && e.target.open) all().forEach(d => { if (d !== e.target) d.open = false; }); }, true);
  document.addEventListener("keydown", e => { if (e.key === "Escape") all().forEach(d => { d.open = false; }); });
})();
