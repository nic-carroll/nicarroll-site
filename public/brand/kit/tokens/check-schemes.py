"""Check every color scheme in public/schemes.css against the contrast rules. Exit 1 on any failure.
Run: python3 scripts/check-schemes.py"""
import pathlib, re, sys
css = (pathlib.Path(__file__).resolve().parent / "schemes.css").read_text()
def lum(h):
    r, g, b = [int(h[i:i + 2], 16) / 255 for i in (1, 3, 5)]
    f = lambda c: c / 12.92 if c <= .03928 else ((c + .055) / 1.055) ** 2.4
    return .2126 * f(r) + .7152 * f(g) + .0722 * f(b)
def ratio(a, b):
    x, y = sorted([lum(a), lum(b)], reverse=True)
    return (x + .05) / (y + .05)
RULES = [("accent on night", "amber", "night", 4.5), ("accent on night 3", "amber", "night-3", 3.0), ("text on accent fill", "on-accent", "accent-fill", 4.5),
         ("white on night", "#ffffff", "night", 7.0), ("white on night 3", "#ffffff", "night-3", 4.5), ("secondary on night", "sky", "night", 4.5),
         ("link on paper", "link", "paper", 4.5), ("accent ink on paper", "accent-ink", "paper", 4.5), ("accent ink on white", "accent-ink", "#ffffff", 4.5),
         ("ink on soft chip", "#0f1c2e", "sky-soft", 7.0)]
bad = 0
for name, body in re.findall(r':root\[data-scheme="([\w-]+)"\]\s*\{([^}]*)\}', css):
    v = dict(re.findall(r"--([\w-]+):\s*(#[0-9a-fA-F]{6})", body))
    for label, a, b, need in RULES:
        ca, cb = (a if a.startswith("#") else v[a]), (b if b.startswith("#") else v[b])
        r = ratio(ca, cb); ok = r >= need; bad += not ok
        print(f"{'ok  ' if ok else 'FAIL'} {name:16} {label:22} {r:5.2f} (needs {need})")
sys.exit(1 if bad else 0)
