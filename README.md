<p align="center">
  <img src="./src/assets/logo.svg" alt="Logo" width="300"/>
</p>
<h3 align="center">
You are in control of your routine!
</h3>

<br><br>

<p align="center">
  <img src="https://img.shields.io/static/v1?label=nlw&message=setup&color=blueviolet&style=for-the-badge"/>
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/glendson/web-habits?color=blueviolet&logo=TypeScript&logoColor=white&style=for-the-badge">
  <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/Glendson/web-habits?color=blueviolet&style=for-the-badge">
</p>
<br>

<p align="center">
  <a href="#about">About</a> •
  <a href="#habits">Habits</a> •
  <a href="#installation">installation</a> •
  <a href="#technology">technology</a> •
  <a href="#autor">Author</a>  
</p>

## About

Project developed during NLW Setup, an event created by Rocketseat. A 100% online and FREE event, with exclusive and UNPRECEDENTED content.

It took place from the 16th to the 20th of January 2023 and was intended to show in practice the power of the NodeJS + ReactJS + React Native stack and how these technologies can lead you to your biggest goals as a programmer.

<img src="./.github/wallpaper.png" alt="Wallpaper NLW Setup" />

## Habits

Habits is a daily task tracking app to help its users track their completed and unfulfilled activities.

The application flow is simple: the user registers the desired habits indicating which days of the week they should be performed and every day he will have a list of habits according to the current day, where he will indicate the status of each habit and the application will generate a daily progress that will be illustrated in the progress bar and also in the colors of the squares that represent the days where lighter colors represent greater numbers of complete habits.

The application has, in addition to the backend, a web and mobile application, which will be illustrated below.

### Habits - Web Application

When accessing the homepage of the web application, the user will see the page below where a button for registering a new habit and several squares representing past days, current day and future day will be displayed. As we can see below, each day has a different color, where:

- Gray indicates that no habits were performed.
- Darker colors indicate little progress in daily habits.
- Lighter colors indicate much progress in daily habits.
- Gray with reduced opacity indicates future days and is not clickable.

![Home](.github/screenshots/web-home.png)

When clicking on the `New habit` button, the modal below will be displayed for the user to enter a title and the days of the week in which the new habit should be performed:

![Alt text](.github/screenshots/web-habit-form.png)

By clicking on one of the days, its information will be displayed, for example: its numerical date, the day of the week, the progress bar and the list of habits that must be carried out on the respective day of the week, as shown in the image below:

![Alt text](.github/screenshots/web-day-partial-completed.png)

Note that the day square above is darker than the one in the following image. This is due to the fact that on the day below the percentage of completed habits was higher:

![Alt text](.github/screenshots/web-day-full-completed.png)

With that, we know all the flows of the web interface when using the application. I leave below a GIF demonstrating the application being used where I go through all the features mentioned above:

![Alt text](.github/web-demo.gif)

### 🖥️ Running the Front End (Web)

```bash
# Clone this repository
$ git clone git@github.com:Glendson/web-habits.git
# Access project folder in terminal/cmd
$ cd web-habits
# install the dependencies
$ npm install
# If you prefer to use Yarn, run the command below
$ yarn
# Run the application in development mode
$ npm run dev
# If you prefer to use Yarn, run the command below
$ yarn dev
# The server will start on port 5173 - acess <http://localhost:5173>
```

## Technology

<img align="left" src="https://profilinator.rishav.dev/skills-assets/react-original-wordmark.svg" alt="React" height="75" />

<img align="left" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Vitejs-logo.svg/1039px-Vitejs-logo.svg.png" alt="Vite" height="75" />

<img align="left" src="https://profilinator.rishav.dev/skills-assets/nodejs-original-wordmark.svg" alt="Node.js" height="75" />

<img align="left" src="https://seeklogo.com/images/F/fastify-logo-370DF51F2E-seeklogo.com.png" alt="Fastify" height="75"/>

<br><br><br><br>

## Author

<div align="center">
<img src="https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/110988949?v=4?v=4&h=100&w=100&fit=cover&mask=circle&maxage=7d" />
<h1>Glendson Garcete</h1>
<strong>FullStack Developer</strong>
<br/>
<br/>

<a href="https://www.linkedin.com/in/glendson-zeus-tomazetto-garcete-a2a0b190/" target="_blank">
<img alt="LinkedIn" src="https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white"/>
</a>

<a href="https://github.com/glendson" target="_blank">
<img alt="GitHub" src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white"/>
</a>

<a href="mailto:gztomazetto@gmail.com?subject=Fala%20Dev" target="_blank">
<img alt="Gmail" src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" />
</a>


<br/>
<br/>
</div>