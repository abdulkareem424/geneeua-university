# Geneva International University

[![Deploy to GitHub Pages](https://github.com/abdulkareem424/geneeua-university/actions/workflows/deploy-pages.yml/badge.svg)](https://github.com/abdulkareem424/geneeua-university/actions/workflows/deploy-pages.yml)

A responsive **University Portal / E-learning Front-end project** built as a multi-page static website.

> This repository demonstrates front-end screens and interactions only. Login, admissions, course downloads, news publishing, and administration actions use prototype or sample behavior; there is no LMS backend, database, or production authentication service.

## Live Demo

[Open the GitHub Pages demo](https://abdulkareem424.github.io/geneeua-university/)

Key demo routes:

- [Home](https://abdulkareem424.github.io/geneeua-university/)
- [Courses](https://abdulkareem424.github.io/geneeua-university/courses.html)
- [Admissions](https://abdulkareem424.github.io/geneeua-university/admission.html)
- [Login](https://abdulkareem424.github.io/geneeua-university/login.html)
- [Admin prototype](https://abdulkareem424.github.io/geneeua-university/admin.html)
- [University news](https://abdulkareem424.github.io/geneeua-university/latestnews.html)

## Overview

Geneva International University presents a university-style online experience with public information, course discovery, admissions content, account screens, faculty profiles, news, and a client-side admin dashboard prototype. The site is designed to run directly from static hosting, including a project site under the `/geneeua-university/` GitHub Pages base path.

## Features

- University landing page with responsive navigation and an animated information panel
- Interactive courses catalog with five academic specialties
- Admissions overview, application form prototype, FAQ, privacy, and contact sections
- Login, password recovery, and account-status screens
- Client-side admin dashboard prototype with sample student requests, pagination, and news form behavior
- Filterable faculty directory and profile modal
- University news cards and article modal
- Responsive layouts built with Tailwind CSS utilities and custom CSS
- GSAP-powered interface animations where the library is loaded

## Technologies

- HTML5
- CSS3
- JavaScript (ES6)
- Tailwind CSS 2 via CDN, with the Tailwind browser CDN on selected prototype pages
- GSAP 3
- Font Awesome
- GitHub Actions and GitHub Pages

## Project Structure

```text
.
├── index.html                 # Landing page
├── about.html                 # About, FAQ, contact, and information sections
├── courses.html               # Interactive course catalog
├── admission.html             # Admissions and application experience
├── login.html                 # Login prototype
├── forgetpassword.html        # Password recovery prototype
├── admin.html                 # Client-side admin dashboard prototype
├── latestnews.html            # University news
├── team.html                  # Faculty directory
├── error/status pages         # Account and validation feedback screens
├── images/                    # Local brand and content assets
├── style.css                  # Shared custom styles
├── script.js                  # Guarded shared interactions
├── scripts/validate_site.py   # Local link and asset validator
└── .github/workflows/         # GitHub Pages deployment
```

The root-level files are the maintained site and deployment source. The nested `geneeua-university-master/` directory is a legacy snapshot retained for repository history and is not included in the Pages artifact.

## Run Locally

No build step is required. Start a local static server from the repository root:

```bash
python3 -m http.server 8000
```

Then open [http://localhost:8000](http://localhost:8000).

To verify local navigation and assets:

```bash
python3 scripts/validate_site.py
```

## Deployment

The `deploy-pages.yml` workflow validates the site, packages only the maintained root pages and assets, and deploys them to GitHub Pages whenever `master` is updated. It can also be run manually from the Actions tab.

Repository administrators must set **Settings → Pages → Build and deployment → Source** to **GitHub Actions** once. After that, successful runs publish to:

```text
https://abdulkareem424.github.io/geneeua-university/
```
