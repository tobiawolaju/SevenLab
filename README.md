# VitaSleeve

**Brand Tagline:** Humanity’s next evolution in care.

## Project Goal

A public-facing website for VitaSleeve, a robotics startup that builds wearable life-support exosuits and humanoid assistants. This project is built using only HTML, CSS, and JavaScript, leveraging Vite for project structure and asset bundling to keep it simple and static.

## Pages

The website consists of three main pages:

1.  **Home Page (`index.html`):**
    *   Hero section with VitaSleeve tagline: “Wearable life-support exosuit & autonomous humanoid.”
    *   CTA buttons: “Learn More” → `/info.html`, “Shop Now” → `/shop.html`
    *   Features section: Full-body prosthetics, AI Care & Monitoring, Medical Life Support, Autonomous Assistance.
    *   Embedded short product demo video (placeholder).
    *   Footer with links to Twitter, contact, and email.

2.  **Info Page (`info.html`):**
    *   Sectioned layout explaining:
        *   The mission (“Replacing hospitals, not humans.”)
        *   How VitaSleeve works (neural link, medical systems, prosthetics).
        *   Safety + open-source vision.
    *   Includes clean infographic layout with text + icons (no actual graphics needed yet).
    *   CTA to “Buy VitaSleeve” → `/shop.html`.

3.  **Shop Page (`shop.html`):**
    *   Simple product grid layout with cards for various VitaSleeve products.
    *   Each card includes: image placeholder, product name, description, price, and an “Add to Cart” button (non-functional for now).
    *   Cart summary area showing selected items and total (pure JS, no backend).

## Design Style

*   **Aesthetic:** Clean futuristic medical-tech (white, blue, black accent).
*   **UI Elements:** Rounded corners, soft glow shadows, subtle gradients.
*   **Typography:** Uses `Poppins` font.
*   **Responsiveness:** Mobile responsive with grid/flexbox layouts.
*   **Logo:** Simple text placeholder: “VitaSleeve”.

## Functionality

*   Smooth scroll and section transitions.
*   Local JavaScript for small interactivity (e.g., mobile menu toggle, simple cart math on the shop page).
*   No external dependencies beyond Vite for development.
*   Organized `styles/` and `scripts/` folders.

## Setup and Usage

To run this project locally:

1.  **Navigate to the project directory:**
    ```bash
    cd VitaSleeve
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Start the development server:**
    ```bash
    npm run dev
    ```
    This will typically start a server at `http://localhost:5173` (or another available port) and open the site in your browser.

4.  **Build for production (optional):**
    ```bash
    npm run build
    ```
    This command will compile the project into the `dist` directory, ready for deployment.

5.  **Preview the production build (optional):**
    ```bash
    npm run preview
    ```
    This will serve the `dist` directory locally to let you preview the production build.
