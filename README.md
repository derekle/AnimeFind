# \_Project5

This application's goal fetches and displays data from MyAnimeList's (MAL) API via Jikan.moe's API wrapper and displays information by anime in a modern and sleek UI, supplemented by the Material UI library.
The api is queriable and results return as image cards that users can click on to retrieve additional details on the show.

### Built with

- Ruby/Rails
- JavaScript
- React/Redux
- Material UI
- CSS

### Installation & Dependencies

**Clone this Repository**

`git clone https://github.com/<your_username>/\_Project5.git`

**Backend**

- navigate into the 'backend' folder

> `$ bundle install` >`$ rake db:migrate`

**Frontend**

- navigate into the 'frontend' folder

> `$npm install`

### Startup

**Backend**

`$ rails s`

**Frontend**

`$ npm start`

### Usage

Per MAL's terms and conditions, the API **does not** store data onto a local database.

### Contribution

The Community is free to make contributions and suggestions to improve this project.

### License

Distributed under the MIT License. See LICENSE.txt for more information

# To Do

[] Users access MAL via authenticated requests and retrieve and manage account info, etc., or CRUD their own local account
[] Genre buttons retrieve relevant shows
[] Divide results into 'pages'
[] Implement comment section and database
