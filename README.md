# The Netflix Clone project

Please find below the project description and a guide on how to develop the project.

## Project description

Please build a baby Netflix!

We want to be able to view some series, seasons and episodes.

We will develop it fullstack, so we will build a frontend for browsing series and episodes & and a backend with a database of series, seasons and episodes to watch + an express app to serve these to a frontend.

## Project structure

We will realize our Netflix clone in three progressing versions.

### Basic version

The basic version should be our first prototype, where we are able to navigate through our Series UI, select a season, view the episode titles and display the detailed description of an episode.

The basic version is REQUIRED as project outcome.

### Medium Version

In this advanced version we want to include media. So we will include now some image for each series, serve them via the backend and load them in the frontend.

The advanced version is DESIRED as project outcome.

### Premium Version

In the premium version we will add now video streaming as icing-on-the-cake.

We will be able to view episode videos in our frontend using the HTML video tag. The episode videos will be streamed by the backend using a NodeJS filestream.

The premium version is the OPTIONAL but outstanding project outcome :-)

## Pages & Features to build

### Getting started

The following tasks can either be separated between team members or be done together. But it is highly recommended to at least dicuss these things together before starting off.

- Plan & sketch the UI pages (see page functionality description in the coming section "Basic Version")

- Prepare the datamodel

  - Identify data entities
  - Identifiy relationships between entities

- Sketch a Data Model using either...
  - Pen & Paper
  - Figma
  - or even the famous old-style Microsoft Paint - in Javascript: [https://jspaint.app/](https://jspaint.app/))

### Basic Version

- Frontend:

  - Create a branch in the main project folder, e.g. `git checkout -b frontend-basic-version`

  - Create an react app within the project folder "ui"

    - Cd into the folder ui
    - Type `npx create-react-app .`

  - Setup three pages / components

    - A series overview page showing all series in our database
      - Each series should have a seasons dropdown
      - When selecting a season we want to get forwarded to the episodes overview
    - An episodes overview page showing all episodes of a season with the episode titles
    - An episode detail page which shows the episode title & episode description

  - Implement React-Router to switch between the pages

  - Display Series & Episodes data
    - use localStorage instead of connecting to a backend (as long backend has not delivered an API for you yet)

Example: Series overview (from Netflix):

(Yours - of course - can be much simpler and for beginning probably just be a list)

![Video playlist Netflix](https://miro.medium.com/max/1980/0*dg93Y74EKQD50dC-)

- Backend:

  - Create a branch in the main project folder, e.g. `git checkout -b backend-basic-version`
  - Cd into the folder "api" of your project
  - Install express and mongoose
  - Setup a basic express app
  - Create the mongoose models
  - Seed in some series, seasons and episodes
    - Either use a /seed route or
  - Test if the data is visible in Compass
  - Create routes to fetch
  - Commit your changes and push your branch

- Frontend-Backend integration

  - Frontend

    - commits all work
    - opens a second terminal in vscode (by the + sign in the menu bar of the terminal)
    - fetches the changes from backend using git fetch
    - merges the backend branch into frontend branch
      - now code of frontend and backend should both be available in project folder
    - steps into "api" folder and runs backend using "node server.js"
    - now replace all calls to localStorage (or whatever prototype data source) by fetch calls to the real API
    - Working?
      - Finalize the frontend branch, commit all changes and merge the frontend branch into master
      - Push the master branch

  - Backend
    - Commit any last changes that you made on your backend branch
    - Checkout and pull the master
    - Start the backend react app. Then - on another vscode terminal - frontend
    - Test in the browser if the page works for you too
      - If not: troubleshoot together

### Advanced / Medium Version

- All (Frontend & Backend):

  - Pick & download some images from a free image service, e.g. pixabay
    - Each image will represent a series (do not fetch images for every season and every episode for now)
    - Download .jpg files only

- Frontend

  - Show an image per series in your series overview page
    - Use placeholder images in the beginning
    - Note: The images later will get be served by the backend
  - Bonus: Implement a carousel in your series overview to slide through the series collection, e.g. with bootstrap:
    - [Bootstrap Carousel](https://www.w3schools.com/bootstrap/bootstrap_carousel.asp)

- Backend

  - Create a folder "public" within your API project directory (=> /api)
    - Create a subfolder "img"
  - Store all download jpg images in the "img" folder
    - Make sure all have the extension jpg (and not some jpeg, if so: rename them to jpg)
  - Name the images
    - Each image should have the ID of the series as name
    - Example: Series "The Witcher" has the Id "abcdef" in your database:
      - Name the corresponding image "abcdef.jpg"
  - Read about: [Static Files serving in ExpressJS](https://expressjs.com/en/starter/static-files.html)
    - Following the guide: Setup serving of images in your express app
    - Test if you can access your images over the browser

- Frontend-Backend Integration:

  - Exchange the backend code again
  - Frontend will now start the backend on their PC to test it
  - Replace your frontend image urls by the urls of the backend:
    - e.g. `<img src="http://localhost:3000/img/abcdef.jpg" />`
  - Test the display of the images in your frontend

### Premium Version

#### Episode video playing

We now - additionally to title, series image & episode description - also want to display the episode video.

- All (Frontend & Backend)

  - Research & download some dummy video files (="fake episodes")
    - download some videos e.g. here: [Pexels](https://www.pexels.com/videos/)
    - Prefered: One for each episode you provide. But at least 5 episode videos.
    - Prefered: Collect videos with the same video extension, e.g. mp4, mov or avi (will make your life much simpler)

- Frontend

  - Implement an HTML5 video player in the episode detail page
    - Research the HTML5 video tag
  - Finalize your page layouts or help the backend with the research on the streaming task (see below)

- Backend

  - Create a new folder in "public" and name it "vid"
  - Store the downloaded videos in this folder
    - Name each video by the ID of the episode
      - E.g. the file "hello.mp4" belonging to the episode "xyz" will get renamed to xyz.mp4
  - Provide a route "/episode/video/:id to stream a video
  - It should be callable by the ID of the episode
    - e.g an call to /episode/video/xyz will look
  - Make the video "jumpable" so you can move to any spot in time \* do that by allowing so called "range requests" => search for the corresponding code snippets in the "lessons" Slack channel

- Frontend Backend integration
  - Exchange backend code
  - Frontend starts and tests backend video routes
  - Frontend makes the URL in the episode video player dynamic:
    - Use the backend URL and append the episode-id,
    - e.g. src="http://localhost:3000/episode/video/xyz.mp4"
      - the last part "xyz.mp4" you append dynamically depending on the episode page you are currently watching

GOOD LUCK!
