# Arvind & Maile wedding invitation

A static, phone-first invitation ready for GitHub Pages. Upload `index.html`, `styles.css`, and the `assets` folder together to the root of a GitHub repository. In **Settings → Pages**, choose **Deploy from a branch**, select `main` and `/ (root)`, and save. Share the published URL.

The invitation displays the three deity images extracted from the supplied composite at the top and fills the viewer's screen width. It contains no map, calendar, or action links. Venue and family information are presented as text from the supplied invitation image. The reception address is absent from that image, so only “Hyde Park Lodge” is given.

For a reliable WhatsApp preview, replace the relative `og:image` value in `index.html` with the absolute published URL of `assets/original-invitation.webp` after deployment. Google Fonts require internet access; Georgia and system fonts are fallbacks.
