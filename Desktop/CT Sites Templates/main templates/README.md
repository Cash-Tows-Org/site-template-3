# Towing Website Templates

Three production-ready static website templates for towing and roadside assistance businesses.

## Templates Overview

### Template 1 - Clean/Modern
**Port:** 3001  
**Design:** Clean, modern design with lots of white space, rounded corners, and subtle shadows. Blue/cyan color scheme.

### Template 2 - Bold/Gritty
**Port:** 3002  
**Design:** Bold, high-contrast design with uppercase headings and strong typography. Red/charcoal color scheme.

### Template 3 - Call-First/Mobile-Heavy
**Port:** 3003  
**Design:** Mobile-first design with prominent phone numbers and oversized tap targets. Amber/black color scheme.

## Quick Start

### Prerequisites

- Node.js (v14 or higher)
- npm (comes with Node.js)

### Running All Templates

Each template runs on its own port:

```bash
# Template 1 (Clean/Modern)
cd "template 1 lt"
npm start
# Opens on http://localhost:3001

# Template 2 (Bold/Gritty)
cd "template 2 lt"
npm start
# Opens on http://localhost:3002

# Template 3 (Call-First/Mobile-Heavy)
cd "template 3 lt"
npm start
# Opens on http://localhost:3003
```

### Running Multiple Templates Simultaneously

Open separate terminal windows/tabs and run each template's `npm start` command. They use different ports so they won't conflict.

## Features (All Templates)

- ✅ Light mode design (dark mode ready via CSS variables)
- ✅ Mobile-first responsive design
- ✅ Analytics tracking hooks (`data-track` attributes)
- ✅ Send My Location button (footer only)
- ✅ Contact form with POST to `/webhooks/dispatch`
- ✅ Sticky mobile call button
- ✅ Content tokens for easy customization
- ✅ Semantic HTML with accessibility features
- ✅ All 6 service pages with conversion-focused content
- ✅ Home, Contact, and Services sections

## File Structure (Each Template)

```
template X lt/
├── index.html                 # Home page
├── contact.html               # Contact form page
├── services/
│   ├── towing.html
│   ├── roadside-assistance.html
│   ├── jump-start.html
│   ├── tire-change.html
│   ├── fuel-delivery.html
│   └── lockout.html
├── assets/
│   ├── css/
│   │   ├── shared.css        # CSS variables & base styles
│   │   └── styles.css        # Template-specific styles
│   ├── js/
│   │   └── main.js           # Analytics & functionality
│   └── img/
│       ├── hero.jpg          # Hero image placeholder
│       └── logo.png          # Logo placeholder
├── package.json
├── README.md
└── .gitignore
```

## Customization

### Content Tokens

All three templates share the same token surface so automations can hydrate any layout with the exact same payload. The table below lists every token and the database column (or derived value) it expects:

| Token | Description | Source |
| --- | --- | --- |
| `{{SITE_ID}}` | Unique site identifier | `free_websites.id` |
| `{{TEMPLATE_ID}}` | Template identifier | `free_websites.template_id` |
| `{{REPO_SLUG}}` | Repository/package slug (kebab-case) | Derived from business name + city |
| `{{LANGUAGE_CODE}}` | IETF language tag (e.g. `en`, `es`) | `free_websites.meta->>'language_code'` (fallback `en`) |
| `{{MODE}}` | Color mode (`light` \| `dark`) | `free_websites.mode` |
| `{{BUSINESS_NAME}}` | Display name shown on-site | `free_websites.business_name` |
| `{{PHONE_PRIMARY}}` | Primary phone / dispatch line | `free_websites.customer_phone` |
| `{{EMAIL}}` | Public contact email | `free_websites.customer_email` |
| `{{SERVICE_CITY}}` | Primary service city | `free_websites.service_city` |
| `{{SERVICE_RADIUS}}` | Service radius in miles | `free_websites.service_radius_km` (convert to miles) |
| `{{ABOUT_SHORT}}` | Short intro/hero blurb | `free_websites.meta->>'about_short'` |
| `{{HERO_PHOTO_URL}}` | Hero image source URL | `free_websites.meta->>'hero_photo_url'` |
| `{{LOGO_URL}}` | Logo image source URL | `free_websites.logo_path` (absolute URL) |
| `{{PRIMARY_COLOR}}` | Primary brand color (hex) | `free_websites.primary_color` |
| `{{ACCENT_COLOR}}` | Accent color (hex) | `free_websites.accent_color` |
| `{{YEAR}}` | Copyright year | runtime value or `meta->>'year'` |

Each template ships a machine-readable manifest in `template.tokens.json` that mirrors the table above for tooling.

### Images

Replace the placeholder images in each template's `assets/img/` folder if you plan to reference local assets. Otherwise supply remote URLs via `{{HERO_PHOTO_URL}}` and `{{LOGO_URL}}`.

### Colors

Edit the CSS variables in `assets/css/shared.css` (or override the tokens `{{PRIMARY_COLOR}}`, `{{ACCENT_COLOR}}`, and `{{MODE}}`) to customize colors for each template. Dark-mode overrides activate automatically when `data-theme="dark"` is present on `<body>`.

## Deployment

These are static websites and can be deployed to any static hosting service:

- **Netlify** - Drag and drop the template folder
- **Vercel** - Connect your Git repository
- **GitHub Pages** - Push to a GitHub repository
- **AWS S3** - Upload files to an S3 bucket
- **Any web server** - Upload files via FTP/SFTP

Simply upload all files (except `node_modules/`) to your hosting provider.

## Backend Integration

The templates include hooks for backend integration:

1. **Analytics Tracking** - POST to `/track` endpoint
2. **Contact Form** - POST to `/webhooks/dispatch` endpoint
3. **Send Location** - POST to `/webhooks/send-location` endpoint

You'll need to implement these endpoints on your backend server.

## License

ISC

## Support

For questions or issues, please refer to the individual template README files or check the code comments.

