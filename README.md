<div id="top"></div>

### Built With

- [React.js](https://reactjs.org/)
- [Material UI](https://github.com/mui/material-ui)
- [react-markdown](https://github.com/remarkjs/react-markdown)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/Nabin2060/portfolio-nabin
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Enter your name in `.env.development`
   ```js
   REACT_APP_NAME=<your_name>
   ```
4. Add your markdown pages in `public/pages`
5. Add your routes in `src/app/pages/page.ts`, make sure the names of pages are consistent with markdown files.
   ```ts
   export const pages = [
     { index: 0, name: "overview.md", route: "/overview" },
     { index: 1, name: "skills.md", route: "/skills" },
     { index: 2, name: "experience.md", route: "/experience" },
     { index: 3, name: "education.md", route: "/education" },
     { index: 4, name: "projects.md", route: "/projects" },
     { index: 5, name: "certificates.md", route: "/certificates" },
     { index: 6, name: "accomplishments.md", route: "/accomplishments" }
   ];
   ```
6. Add your social links in `src/app/pages/link.tsx`, which will appear in both sidebar and homepage.
   ```ts
   export const links = [
     {
       index: 0,
       title: "Find me on Github",
       href: "https://github.com/Nabin2060/portfolio-nabin",
       icon: <FaGithub />
     }
   ];
   ```
7. Runs the app in the development mode
   ```sh
   npm start
   ```
8. Deploy your own portfolio,

   - modify homepage property in `package.json`

   ```

   - modify Google Analytic measurement id in `.env.production`

   ```

   REACT_APP_NAME=<your_name>
   REACT_APP_MEASUREMENT_ID=<your_measurement_id>

   ```

   ```

<!-- USAGE EXAMPLES -->

## Features

- Powered by markdown
- Extended markdown syntax supported
  - Syntax highlight
  - Alert
- Dark mode and light mode available
- Closable tabs
- Collapsible explorer
- Responsive web design
- Google Analytics supported
- Auto-deploy to gh-pages with github actions ready

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Nabin Adhikari - [Personal Portfolio](Link) - my mail

Project Link: [https://github.com/Nabin2060/portfolio-nabin]

<p align="right">(<a href="#top">back to top</a>)</p>
<p align="left">(<a href="https://github.com/noworneverev/react-vscode-portfolio">I have created this portfolio by taking inspiration from the "react-vscode-portfolio" project.</a>)</p>
