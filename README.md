# The City Varsity Website

![](https://github.com/icurfc/thecityvarsity/actions/workflows/nextjs.yml/badge.svg)

Promotional website for The City Varsity rugby match played between Imperial College London and London School of Economics.

🌐 **Live Site:** [www.thecityvarsity.co.uk](https://www.thecityvarsity.co.uk)

## Instructions

Please read the entirety of this document when updating the website, it contains all the steps needed to update, test and deploy the site.

## Technology Stack

- **Framework:** [Next.js 14](https://nextjs.org/) with React 18
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Maps:** Leaflet with React-Leaflet
- **Analytics:** PostHog
- **Deployment:** GitHub Pages

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- Git

### Local Development Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/icurfc/thecityvarsity.git
   cd thecityvarsity
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the website.

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## How to Update the Website

The main variables to update are located in [src/app/config.tsx](/src/app/config.tsx) and images can be placed in the [public/](/public/) folder. To change any other parts of the website refer to [src/app/page.tsx](/src/app/page.tsx).

### Configuration Variables

The `config.tsx` file contains **all** the key information that needs updating annually, but in summary:

#### Event Details
- `EDITION` - Current edition number (e.g., "VIII")
- `TITLE` - Full event title
- `MATCH_DATE` - Event date in DD/MM/YY format
- `TICKET_LINK` - Link to ticket purchasing
- `PROGRAMME_LINK` - Link to event programme

#### Contact & Location
- `CONTACT_EMAIL` - Primary contact email
- `LOCATION` - Venue details including name, address, and coordinates
- `AFTERPARTY_LOCATION` & `AFTERPARTY_TEXT` - Optional afterparty information

#### Media Assets
- `IMAGE_GALLERY` - Array of gallery image paths (up to 4 images)
- `PARTNERS` - Array of partner/sponsor information

### Image Requirements

#### Hero Images
- **Desktop:** Save as `public/thecityvarsity/cover.webp` and `public/cover.webp`
- **Mobile:** Save as `public/thecityvarsity/cover-mobile.webp` and `public/cover-mobile.webp`

#### Gallery Images
- **Format:** WebP format recommended
- **Size:** 1280x853px for optimal display
- **Location:** Save in both `public/thecityvarsity/gallery/` and `public/gallery/`
- **Limit:** Maximum 4 images based on current styling

#### Partner Logos
- **Location:** Save in both `public/partners/` and `public/thecityvarsity/partners/`
- **Format:** PNG or WebP supported

### Making Changes

After making changes to the website, commit changes on the "dev" branch:
```bash
git checkout dev && git commit -am "Update variables"`
```

### Deploying

To deploy the website to [www.thecityvarsity.co.uk](https://www.thecityvarsity.co.uk) merge the changes made on the "dev" branch into "main".

1. Ensure the changes have been committed to the "dev" branch:  
  `git checkout dev && git commit -am "Update variables"`
2. Merge the changes to "main" branch:  
  `git checkout main && git merge dev`
3. Push the "main" branch to deploy:  
  `git push`

The GitHub Action will then run automatically to deploy the site.

### Changing the Domain Name

See the GitHub Pages [docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site) for information on how to change the domain name. Note that the [CNAME](./CNAME) file must be updated to include the new domain.

## Troubleshooting

### Common Issues

#### Images Not Loading
- Ensure images are saved in **both** directory locations (e.g., `public/gallery/` AND `public/thecityvarsity/gallery/`)
- Check file paths in `config.tsx` match actual file locations
- Verify image formats are supported (WebP, PNG, JPG)

#### Build Failures
- Run linting to check for errors: `npm run lint`
- Ensure all TypeScript types are correct
- Check that all imported images exist

#### Map Not Displaying
- Verify location coordinates in `config.tsx` are correct
- Check internet connection (map tiles require external loading)
