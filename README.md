# Megan Allen Design Portfolio

This is the source code for [meganallendesign.com](https://meganallendesign.com), a personal UX portfolio site built with Gatsby and React. The site showcases design projects, case studies, and information about Megan Allen’s work and process.

## Project Structure

- **`src/`**: All site pages and React components.
- **`public/`**: Gatsby’s build output; static files for deployment.
- **`gatsby-config.js`**: Site metadata and plugin configuration.
- **`.cpanel.yml`**: Deployment script for cPanel.
- **`package.json`**: Project dependencies and scripts.

## Development

To work on this site locally:

1. **Install dependencies**  
   ```
   npm install
   ```

2. **Start the development server**  
   ```
   npm run develop
   ```
   The site will be available at [http://localhost:8000](http://localhost:8000).

3. **Edit source files**  
   Make changes in the `src/` directory. Hot-reloading is enabled.

## Building for Production

Before deploying, build the site:

```
npm run build
```

This generates the static site in the `public/` folder.

## Deploying to cPanel

Deployment uses cPanel’s Git Version Control and a `.cpanel.yml` script.

**Steps:**

1. **Make changes locally**  
   Edit files and commit your changes.

2. **Build the project**  
   ```
   npm run build
   ```
   This updates the `public/` folder with the latest static files.

3. **Push changes to GitHub**  
   ```
   git add .
   git commit -m "Update site"
   git push
   ```

4. **Pull changes in cPanel**  
   - Log in to cPanel.
   - Go to **Git Version Control**.
   - Select your repo (`/home/bronson1/repos/meg-ux-portfolio.git`).
   - Click **Pull or Deploy** to fetch the latest commit.

5. **Deploy the build**  
   - cPanel runs the `.cpanel.yml` script, which copies the contents of `public/` to `/home/bronson1/public_html/meganallendesign.com/`.
   - Your site updates at [meganallendesign.com](https://meganallendesign.com).

**Note:**  
The build step is essential. Only files in the `public/` folder are deployed to the live site.

## Customization

- Update site content and structure in `src/`.
- Change site metadata in `gatsby-config.js`.
- Adjust deployment settings in `.cpanel.yml` if your hosting paths change.

## License

This project is for Megan Allen’s personal portfolio. Please contact Megan for reuse or collaboration.

```<!-- filepath: c:\Users\brons\Documents\dev\meg-ux-portfolio\README.md -->
# Megan Allen Design Portfolio

This is the source code for [meganallendesign.com](https://meganallendesign.com), a personal UX portfolio site built with Gatsby and React. The site showcases design projects, case studies, and information about Megan Allen’s work and process.

## Project Structure

- **`src/`**: All site pages and React components.
- **`public/`**: Gatsby’s build output; static files for deployment.
- **`gatsby-config.js`**: Site metadata and plugin configuration.
- **`.cpanel.yml`**: Deployment script for cPanel.
- **`package.json`**: Project dependencies and scripts.

## Development

To work on this site locally:

1. **Install dependencies**  
   ```
   npm install
   ```

2. **Start the development server**  
   ```
   npm run develop
   ```
   The site will be available at [http://localhost:8000](http://localhost:8000).

3. **Edit source files**  
   Make changes in the `src/` directory. Hot-reloading is enabled.

## Building for Production

Before deploying, build the site:

```
npm run build
```

This generates the static site in the `public/` folder.

## Deploying to cPanel

Deployment uses cPanel’s Git Version Control and a `.cpanel.yml` script.

**Steps:**

1. **Make changes locally**  
   Edit files and commit your changes.

2. **Build the project**  
   ```
   npm run build
   ```
   This updates the `public/` folder with the latest static files.

3. **Push changes to GitHub**  
   ```
   git add .
   git commit -m "Update site"
   git push
   ```

4. **Pull changes in cPanel**  
   - Log in to cPanel.
   - Go to **Git Version Control**.
   - Select your repo (`/home/bronson1/repos/meg-ux-portfolio.git`).
   - Click **Pull or Deploy** to fetch the latest commit.

5. **Deploy the build**  
   - cPanel runs the `.cpanel.yml` script, which copies the contents of `public/` to `/home/bronson1/public_html/meganallendesign.com/`.
   - Your site updates at [meganallendesign.com](https://meganallendesign.com).

**Note:**  
The build step is essential. Only files in the `public/` folder are deployed to the live site.

## Customization

- Update site content and structure in `src/`.
- Change site metadata in `gatsby-config.js`.
- Adjust deployment settings in `.cpanel.yml` if your hosting paths change.

## License

This project is for Megan Allen’s personal portfolio. Please contact Megan for reuse or collaboration.
