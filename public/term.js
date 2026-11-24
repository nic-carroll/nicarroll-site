/* Shared motion for the terminal style pages. Everything here is decoration; the pages read the same without it. */
(() => {
  const bar = document.createElement("div"); bar.className = "fx-progress"; bar.setAttribute("aria-hidden", "true"); document.body.appendChild(bar);
  const prog = () => { const h = document.documentElement; bar.style.width = (h.scrollTop / Math.max(1, h.scrollHeight - h.clientHeight) * 100) + "%"; };
  addEventListener("scroll", prog, { passive: true }); prog();
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(es => es.forEach(e => { if (!e.isIntersecting) return; const el = e.target; el.classList.add("in"); io.unobserve(el);
      setTimeout(() => { el.classList.remove("fx-rv", "in"); el.style.transitionDelay = ""; }, 900); }), { rootMargin: "0px 0px -6% 0px" });
    document.querySelectorAll("main .card, main .logo-card, main .map, main .steps li, main .sw button, main .sch, main .tabs, main .report").forEach((el, i) => {
      if (el.getBoundingClientRect().top < innerHeight) return; el.classList.add("fx-rv"); el.style.transitionDelay = (i % 4) * 70 + "ms"; io.observe(el); });
  }
  const hero = document.querySelector("header.hero"); if (!hero) return;
  const c = document.createElement("canvas"); c.className = "fx-rain"; c.setAttribute("aria-hidden", "true"); hero.prepend(c);
  const x = c.getContext("2d"), G = "01<>/{}[]$#=+*", STEP = 24; let cols = [], W = 0, H = 0, vis = true;
  const size = () => { W = c.width = hero.clientWidth; H = c.height = hero.clientHeight; cols = Array.from({ length: Math.ceil(W / STEP) }, () => Math.random() * H); };
  size(); let rt; addEventListener("resize", () => { clearTimeout(rt); rt = setTimeout(size, 200); });
  if ("IntersectionObserver" in window) new IntersectionObserver(e => { vis = e[0].isIntersecting; }).observe(hero);
  setInterval(() => { if (!vis || document.hidden) return;
    x.globalCompositeOperation = "destination-out"; x.fillStyle = "rgba(0,0,0,.09)"; x.fillRect(0, 0, W, H); x.globalCompositeOperation = "source-over";
    x.font = "14px ui-monospace, Menlo, Consolas, monospace"; x.fillStyle = "#5fd38d";
    cols.forEach((y, i) => { x.fillText(G[Math.random() * G.length | 0], i * STEP + 4, y); cols[i] = y > H && Math.random() > .95 ? 0 : y + 18; });
  }, 80);
})();
