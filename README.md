# Geneva International University Website

Static university website for Geneva International University.

## Overview

This project is a multi-page front-end website for a university-style landing experience. It includes public pages for home, about/contact, courses, admission, team, login, admin, news, and status/error flows.

## Features

- Responsive navigation with desktop and mobile menu behavior
- Hero section with university branding and image assets
- Course, admission, team, and news pages
- Login and admin pages
- Interactive UI behavior through JavaScript
- Tailwind CSS CDN usage with custom `style.css`
- Font Awesome icons and GSAP animation support

## Project Structure

```text
index.html             Home page
about.html             About/contact page
courses.html           Courses page
admission.html         Admission page
team.html              Team page
login.html             Login page
admin.html             Admin page
latestnews.html        News page
script.js              Shared page interactions
style.css              Custom styling
images/                Website images and branding assets
```

## Run Locally

Open `index.html` directly in a browser.

For a local static server:

```bash
python3 -m http.server 8000
```

Then visit:

```text
http://localhost:8000
```

## Deployment

Because this is a static site, it can be deployed on GitHub Pages, Netlify, Vercel, or any static hosting service. Make sure the files in `images/` are uploaded with the HTML, CSS, and JavaScript files.
