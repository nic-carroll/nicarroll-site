"""Render resume.html to ../public/Nic_Carroll_Resume.pdf (Letter, 2 pages)."""
import asyncio, pathlib, sys
from playwright.async_api import async_playwright
here = pathlib.Path(__file__).resolve().parent
out = here.parent / "public" / "Nic_Carroll_Resume.pdf"
async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch(**({"executable_path": sys.argv[1]} if len(sys.argv) > 1 else {}), args=["--no-sandbox"])
        pg = await b.new_page(viewport={"width": 816, "height": 1056})
        await pg.goto((here / "resume.html").as_uri())
        await pg.wait_for_selector("body[data-ready='1']")
        print("pages:", await pg.evaluate("document.body.dataset.pages"))
        await pg.pdf(path=str(out), print_background=True, prefer_css_page_size=True)
        await b.close()
    print("wrote", out)
asyncio.run(main())
