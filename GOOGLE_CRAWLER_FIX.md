# Google OAuth Branding Verification Fix

## Problem
Google's crawler could not find links to Privacy Policy and Terms of Service on the homepage because:
- Your site is a client-side React SPA
- Google's non-JavaScript crawler doesn't wait for React to render
- The footer links were only in the rendered DOM, not in initial HTML

## Solution Implemented

### 1. Added Link Elements to HTML Head (`client/index.html`)
```html
<link rel="privacypolicy" href="/privacy" />
<link rel="termsofservice" href="/terms" />
```
These semantic link elements are recognized by Google's crawler and provide direct references to your legal pages.

### 2. Added NoScript Fallback Links
```html
<noscript>
  <div style="...">
    <p>
      <a href="/privacy">Privacy Policy</a> • <a href="/terms">Terms of Service</a>
    </p>
  </div>
</noscript>
```
This ensures users without JavaScript see the legal links, and crawlers can find them.

### 3. Enhanced Footer Links (`client/src/pages/landing.tsx`)
- Added a dedicated "Legal" section at the top of the footer
- Both `/privacy` and `/terms` are now visible with proper `<a>` tags
- Links use standard HTML, not just React components

## Verification

Run `npm run build` and check `dist/index.html`:
```bash
grep -E "privacypolicy|termsofservice" dist/index.html
```

You should see:
```html
<link rel="privacypolicy" href="/privacy" />
<link rel="termsofservice" href="/terms" />
```

## What Google's Crawler Now Sees

1. **In the `<head>`**: Semantic link elements pointing to `/privacy` and `/terms`
2. **In the `<body>`**: A `<noscript>` section with visible `<a>` tags to both pages
3. **In the footer**: A "Legal" section with crawlable links (after JS renders)

## Next Steps for Google Verification

1. Go to Google Auth Platform → Branding → App domain settings
2. Update the URLs:
   - Application privacy policy link: `https://mediacore.in/privacy`
   - Application terms of service link: `https://mediacore.in/terms`
3. Click "Re-verification" to run Google's crawler again
4. It should now successfully find both pages

## Routes Configured

- `/privacy` → Privacy Policy page with full content
- `/terms` → Terms of Service page with full content

Both pages are fully styled, have tables of contents, and match your landing page design.
