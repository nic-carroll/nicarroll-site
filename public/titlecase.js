/* Title Case for labels. Runs on short label text only (stat captions, chips, menu notes, card titles), never on body text. */
(() => {
  const SMALL = new Set(["a", "an", "and", "as", "at", "but", "by", "for", "in", "nor", "of", "on", "or", "per", "the", "to", "via", "vs"]);
  const cap = w => w.replace(/^([("'“]*)([a-z])/, (m, p, c) => p + c.toUpperCase());
  const word = (w, edge) => { if (!w) return w; if (/[A-Z]/.test(w.replace(/^[^A-Za-z]*[A-Za-z]/, "")) || /\d/.test(w) && /[A-Z]/.test(w)) return w;
    if (w.includes("-") && !/^-|-$/.test(w)) return w.split("-").map((p, i) => word(p, i === 0 && edge)).join("-");
    const bare = w.toLowerCase().replace(/[^a-z']/g, ""); if (!edge && SMALL.has(bare) && w === w.toLowerCase()) return w; return cap(w); };
  window.ncTitleCase = s => { const parts = s.split(/(\s+)/); let first = true, lastIdx = -1; parts.forEach((p, i) => { if (p.trim()) lastIdx = i; });
    return parts.map((p, i) => { if (!p.trim()) return p; const edge = first || i === lastIdx || /[:.!?]$/.test(parts[i - 2] || ""); first = false; return word(p, edge); }).join(""); };
  const SEL = [
    "header.nav details.menu a span", ".scheme-link span", ".pill", ".badge",
    "#proof span", ".k12-feature li span", ".ag .top span", "#ag-stats span", "#ag-stats small", ".pmetric span", ".pchips span", ".metric small", "details.story summary",
    ".case .tools span", ".group-head span", "#pillars b", ".posts .k", ".now", "#building h3", ".tool-strip span", ".icard h3", ".ag-group summary h3",
    ".hero-stats span", ".facts > div > span", ".mcard h3", "body > footer span", "body > footer a",
    ".tabs button small", ".walk b", ".node .time", ".steps .when",
    ".cta .btn", ".hero-grid b", ".sec-head h2", "main h3", ".step span", ".step small", ".who", "button.tab", ".kpi .k", ".field > span", "th", ".seg button", ".idea b", ".ver .label", ".layer .label", "#plist summary", "summary .when", ".byline span", ".branch b", ".stepnav .btn", "h1", "#plist .btn", ".rowgap .muted", "a.skip", ".case .top > .metric"
  ].join(", ");
  const fix = root => { if (!SEL) return; root.querySelectorAll(SEL).forEach(el => { if (el.dataset.tc) return; el.dataset.tc = "1";
    const walk = n => n.childNodes.forEach(c => { if (c.nodeType === 3) { const t = c.nodeValue, x = t.trim(); if (x) { const n2 = window.ncTitleCase(t); if (n2 !== t) c.nodeValue = n2; } }
      else if (c.nodeType === 1 && !/^(CODE|PRE|SCRIPT|STYLE|SVG|INPUT|SELECT|TEXTAREA)$/i.test(c.tagName)) walk(c); });
    walk(el); }); };
  const run = () => fix(document);
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", run); else run();
  let t; new MutationObserver(() => { clearTimeout(t); t = setTimeout(run, 60); }).observe(document.documentElement, { childList: true, subtree: true });
})();
