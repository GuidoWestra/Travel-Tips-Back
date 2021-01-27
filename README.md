# Travel-Tips-Back
:deciduous_tree: Back-end Repository of the Travel.Tips <br />
:checkered_flag: Deployed to heroku on <br />
## :wrench:Instructions: 
### backend-db runs on sequelize-cli. 
- npx sequelize-cli db:migrate
- npx sequelize-cli db:seed:all <br/>
:warning:Hard reset.
- npx sequelize-cli db:migrate:undo:all<br/>
### server runs on express: 
used endpoints: 
### places <br />
  - (get)/list  <br />
  - (get)/:id   <br />
  - (post)/places <br />
### likes <br />
  - (get)/likes <br />
  - (post)/likes/add <br />
  - (delete)/likes/:tipId <br />
### tips <br />
  - (get) /tips/:placeId <br />
  - (get) /user/tips    <br />
  - (post)/tips         <br />
  - (delete)/tip/:tipId <br />
### auth <br />
  - (post)/login <br />
  - (post)/signup <br />
  - (put) /updateUserImage <br />
<br />
<br />
### Start Server 
- Running npm start, starts the server with node. <br />
- Running npm run dev, starts the server with nodemon <br />
<br />
<br />
:computer: Link to front end: https://github.com/GuidoWestra/Travel-Tips-Front <br />
:paperclip: Link to Heroku: LINK HERE <br />
