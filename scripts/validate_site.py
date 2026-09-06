#!/usr/bin/env python3
"""Validate local links and assets for the GitHub Pages site."""

from html.parser import HTMLParser
from pathlib import Path
import re
from urllib.parse import unquote, urlsplit


ROOT = Path(__file__).resolve().parent.parent
REQUIRED_PAGES = {
    "index.html",
    "courses.html",
    "admission.html",
    "login.html",
    "admin.html",
    "latestnews.html",
}
ASSET_PATTERN = re.compile(
    r"(?:url\(\s*['\"]?|['\"])(images/[A-Za-z0-9_ .()\-/]+\.(?:png|jpe?g|webp|gif|svg))",
    re.IGNORECASE,
)


class ReferenceParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.references = []

    def handle_starttag(self, tag, attrs):
        for name, value in attrs:
            if name in {"href", "src"} and value:
                self.references.append(value)


def is_local(reference):
    return not (
        reference.startswith(("#", "javascript:", "mailto:", "tel:", "data:"))
        or urlsplit(reference).scheme
        or reference.startswith("//")
    )


def validate_reference(source, reference, errors):
    path = unquote(urlsplit(reference).path)
    if not path:
        return
    if path.startswith("/"):
        errors.append(f"{source.name}: root-relative path is not Pages-safe: {reference}")
        return
    if not (source.parent / path).resolve().exists():
        errors.append(f"{source.name}: missing local target: {reference}")


def main():
    errors = []
    for page in REQUIRED_PAGES:
        if not (ROOT / page).is_file():
            errors.append(f"Missing required page: {page}")

    sources = [*ROOT.glob("*.html"), ROOT / "style.css", ROOT / "script.js"]
    for source in sources:
        text = source.read_text(encoding="utf-8")
        if source.suffix == ".html":
            parser = ReferenceParser()
            parser.feed(text)
            for reference in parser.references:
                if is_local(reference):
                    validate_reference(source, reference, errors)

        for asset in ASSET_PATTERN.findall(text):
            validate_reference(source, asset, errors)

    if errors:
        print("Site validation failed:")
        for error in sorted(set(errors)):
            print(f"- {error}")
        raise SystemExit(1)

    print(f"Validated {len(list(ROOT.glob('*.html')))} HTML pages and local assets.")


if __name__ == "__main__":
    main()
