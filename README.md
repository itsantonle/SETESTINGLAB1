# Disclaimer

LEGAYADA SURRILLA - UNDER THE MIT LICENSE-- this repo is forked only FOR ACADEMIC PURPOSES FOR SE TESTING

- no profit or desire to pulicize this repo for a for-profit project. Storybook js is installed into the project.

Project by Brad Traversy (c) 2024
original repo link: https://github.com/bradtraversy/react-crash-2024

# Running storybook

Make sure all the dependencies of this project are installed for this to work.
The components are styled with Tailwind, and storybook is configured to show this in the preview
The project in written in Javascript, therefore there is minimal to nonexistent type support

Enter the code in the terminal (Bash)

```bash
npm install
```

after installing the necessary dependencies run the following to preview the website in DEV mode:

```bash
npm run dev
```

run the mockend server

```bash
npm run server
```

to open the storybook GUI on the port 6006

```bash
npm run storybook
```

# StoryBook pages

run storybook on port using the:

```bash
npm run storybook command
```

the stories and pages for the labs are:

```
Hero.stories.js (Basic React Component with Props)
Card.stories.jsx  ( Children Props and Play Functionality regarding links + Passed and Failed Interactions)
JobListing.stories.jsx (Actions, Play Functionality, Expect, + All Passed interactions)
AddJobPage.stories.jsx (Actions, Form)
Spinner.stories.js(Basic React Component)

```

# Regarding Failed Tests

Some tests are designed to fail..
-Tests that use the try catch block to handle exceptions
<img src="public\NavigateToAddJobsPageError.png" />
<img src="public\NavigateToJobsPageError.png" />

-Test that don't handle the exceptions and instead reflect on the storybook preview
The Browse Jobs text doesn't appear in the Employer Component
<img src="public\EmployerErrorWHereTestNotWithinCanvas.png" />
<img src="public\EmployerErrorWHereTestNotWithinCanvasExplain.png" />

# Regarding passed Tests

Some tests are designed to pass (this is simulated using the Play functionality)
<img src="public\SucessPlayInteractionInComponent.png" />

---

# React Jobs Project (YouTube)

This is the jobs listing project from the [YouTube crash course](https://youtu.be/LDB4uaJ87e0).

<img src="public/screen.png" />

## Usage

This project uses JSON-Server for a mock backend.

### Install Dependencies

```bash
npm install
```

### Run JSON Server

The server will run on http://localhost:8000

```bash
npm run server
```

### Run Vite Frontend

React will run on http://localhost:3000

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```
