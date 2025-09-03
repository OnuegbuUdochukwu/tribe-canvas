# Tribe Canvas Frontend Image & Component Descriptions

This file contains detailed prompts for every image and visual asset required by the frontend. Use these descriptions with an AI image generation agent to create the assets, then add them to `frontend/src/design/tribe_canvas_homepage/` or the appropriate folder.

---

## 1. Homepage (HeroSection)

### hero-art.png

-   **Description:** Abstract digital painting symbolizing creativity, diversity, and energy in Nigerian art. The composition should feature swirling brush strokes, layered textures, and a sense of movement. Use a vibrant palette: deep blue (#1193d4), rich orange (#f7b731), lush green (#20bf6b), and accents of purple. Incorporate subtle canvas or paper texture in the background. No text or figures. The image should evoke inspiration and artistic freedom, with a modern, digital feel. Avoid harsh lines; use soft blending and dynamic color transitions.
-   **Dimensions:** 1200×600 px (landscape)
-   **File type:** PNG
-   **Background:** Transparent preferred, or soft white gradient
-   **Aspect ratio:** 2:1
-   **Style:** Modern, digital, painterly

---

## 2. Homepage (ArtworkGrid)

### artwork1.png – artwork6.png

-   **Description:** Each image is a unique art print for the gallery grid. Details for each:
    -   **artwork1.png:** Urban Lagos street scene at sunset. Show busy roads, yellow danfo buses, street vendors, and city buildings. Use warm tones (orange, gold, deep blue) and soft shadows. Add subtle reflections and atmospheric haze for realism.
    -   **artwork2.png:** Portrait of a Nigerian woman in traditional attire. She wears a vibrant gele (headwrap), patterned dress, and gold jewelry. Her expression is confident and welcoming. Use bold colors (red, green, gold) and a softly blurred background.
    -   **artwork3.png:** Abstract geometric composition. Overlapping shapes (triangles, circles, rectangles) in cool blues, teals, and greens. Add gradients, transparency, and a sense of depth. No recognizable objects.
    -   **artwork4.png:** Market day scene. Crowds of people, colorful umbrellas, baskets of produce, and textiles. Use energetic brushwork and vibrant colors (red, yellow, green, blue). Capture movement and diversity.
    -   **artwork5.png:** Peaceful Nigerian landscape. River winding through green fields, palm trees, and distant hills. Soft morning light, mist, and gentle reflections. Use natural colors and a tranquil mood.
    -   **artwork6.png:** Modern minimalist art. Black and white palette, strong lines, geometric forms. Focus on negative space and balance. No color, no figures.
-   **Dimensions:** 400×600 px (portrait)
-   **File type:** PNG
-   **Background:** White or very light gray
-   **Aspect ratio:** 2:3
-   **Style:** Semi-realistic for scenes, abstract/minimalist for others

---

## 3. Homepage (FeaturedArtists)

### artist1.png – artist5.png

-   **Description:** Circular avatar portraits of Nigerian artists, each with distinct personality and background:
    -   **artist1.png:** Young male artist, short hair, wearing glasses, smiling warmly. Studio background with easel and paint tubes. Clothing: casual shirt, paint smudges on hands. Lighting: soft, natural.
    -   **artist2.png:** Middle-aged female artist, dark skin, elaborate headwrap (gele), confident expression. Gallery background with framed artworks. Clothing: patterned dress, gold earrings. Lighting: bright, professional.
    -   **artist3.png:** Elderly male artist, gray beard, thoughtful gaze. Outdoor background with trees and sunlight. Clothing: traditional agbada, holding a paintbrush. Lighting: warm, golden hour.
    -   **artist4.png:** Young female artist, afro hairstyle, energetic pose. Colorful abstract background, splashes of paint. Clothing: tank top, overalls, paint on cheeks. Lighting: vibrant, playful.
    -   **artist5.png:** Middle-aged male artist, hat (fedora or cap), creative vibe. Neutral studio background, sketchbooks and pencils. Clothing: t-shirt, vest. Lighting: cool, focused.
-   **Dimensions:** 200×200 px
-   **File type:** PNG (transparent background)
-   **Shape:** Circle
-   **Style:** Semi-realistic, expressive, friendly

---

## 4. Icons & UI Elements

-   **Description:** SVG icons for navigation (home, gallery, artists, cart), dashboard (orders, fulfillment, payout), and UI actions (edit, delete, add, search). Each icon should be simple, modern, and visually consistent. Use rounded corners, minimal detail, and flat design. Color palette: #1193d4 (blue), #20bf6b (green), #f7b731 (yellow), #eb3b5a (red). Provide both filled and outline versions if possible.
-   **Dimensions:** 24×24 px
-   **File type:** SVG
-   **Background:** Transparent
-   **Style:** Flat, modern, accessible

---

## 5. Other Pages (if needed)

-   Below are detailed prompts for all additional images/components needed for other pages:

### Artist Dashboard

-   **dashboard-graph.png**: Bar chart or line graph showing sales/earnings data. Clean, modern style with blue (#1193d4) and green (#20bf6b) bars/lines, white background. No gridlines, minimal axis labels. Dimensions: 600×400 px, PNG.
-   **payout-status-icon.svg**: Icon set for payout status (pending, paid, failed). Yellow clock for pending, green checkmark for paid, red cross for failed. Flat, modern, rounded corners. Dimensions: 32×32 px, SVG.
-   **avatar-placeholder.png**: Default artist avatar for dashboard/profile. Circular, neutral background, semi-realistic face, soft lighting. Dimensions: 200×200 px, PNG.

### Edit Artwork Page

-   **edit-artwork-bg.png**: Abstract background for artwork editing area. Soft gradients (blue, teal, white), subtle brush strokes, no figures. Modern, digital feel. Dimensions: 1200×600 px, PNG.
-   **upload-image-icon.svg**: Icon/button for uploading/changing artwork image. Simple, modern, blue accent (#1193d4), rounded corners. Dimensions: 32×32 px, SVG.

### Product Page

-   **product-placeholder.png**: Default image for artwork if none is provided. Neutral, abstract shapes, soft blue/gray colors, gentle gradients. Dimensions: 400×600 px, PNG.

### Order History Page

-   **order-status-icons.svg**: Set of icons for order status (pending, in production, shipped, delivered). Consistent style, color-coded: yellow clock, blue box, green truck, green checkmark. Flat, modern. Dimensions: 24×24 px, SVG.

### Cart & Checkout Pages

-   **empty-cart.png**: Illustration for empty cart state. Shopping basket with art prints, cheerful mood, soft blue/yellow palette. Dimensions: 400×400 px, PNG.
-   **payment-success.png**: Illustration for successful payment/order. Green checkmark, confetti, happy customer, white background. Dimensions: 400×400 px, PNG.
-   **payment-failed.png**: Illustration for failed payment. Red cross, sad face, muted colors, white background. Dimensions: 400×400 px, PNG.

### Login & Register Pages

-   **login-bg.png**: Abstract background for login/register forms. Soft gradients, blue/white palette, subtle geometric shapes. Dimensions: 1200×600 px, PNG.

### General UI

-   **profile-bg.png**: Abstract background for user profile. Soft gradients, subtle patterns, blue/teal palette. Dimensions: 1200×400 px, PNG.
-   **search-icon.svg**: Modern search icon for gallery/filter. Flat, rounded, blue accent (#1193d4). Dimensions: 24×24 px, SVG.

---

## Usage Instructions

-   Generate each image according to the description and save with the specified filename and format.
-   Place PNGs in `frontend/src/design/tribe_canvas_homepage/`.
-   Place SVGs in `frontend/src/design/tribe_canvas_homepage/icons/`.
-   Update React code to use the new assets once generated.

---

<!-- _If you need more descriptions for other pages, let me know!_ -->

frontend/
└── src/
    └── design/
        └── tribe_canvas_homepage/
            ├── hero-art.png
            ├── artwork1.png
            ├── artwork2.png
            ├── artwork3.png
            ├── artwork4.png
            ├── artwork5.png
            ├── artwork6.png
            ├── artist1.png
            ├── artist2.png
            ├── artist3.png
            ├── artist4.png
            ├── artist5.png
            ├── dashboard-graph.png
            ├── avatar-placeholder.png
            ├── edit-artwork-bg.png
            ├── product-placeholder.png
            ├── empty-cart.png
            ├── payment-success.png
            ├── payment-failed.png
            ├── login-bg.png
            ├── profile-bg.png
            └── icons/
                ├── home.svg
                ├── gallery.svg
                ├── artists.svg
                ├── cart.svg
                ├── orders.svg
                ├── fulfillment.svg
                ├── payout.svg
                ├── edit.svg
                ├── delete.svg
                ├── add.svg
                ├── search-icon.svg
                ├── payout-status-icon.svg
                ├── upload-image-icon.svg
                └── order-status-icons.svg