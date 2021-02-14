# FS-TODO

## What?
A basic full-stack todo application starring:
- `Node.js`
- `Express.js`
- `PostgreSQL` or `SQLite`
- `Vue.js`

With a star-studded supporting cast of candidates:
- Backend
    - `Nodemon` (for development) https://www.npmjs.com/package/nodemon
    - `Winston` (for logging) https://www.npmjs.com/package/winston
    - `dotenv` (for environment file management) https://www.npmjs.com/package/dotenv
        - Using preloading in this project. See documentation.
    - _`some tool`_ (for DB migrations)
    - `knex` (query builder for MSSQL, MySQL, PostgreSQL, SQLite3, Oracle) https://www.npmjs.com/package/knex
    - `pg` (PostgreSQL driver for Node) https://www.npmjs.com/package/pg
    - `sqlite` (SQLite driver for Node) https://www.npmjs.com/package/sqlite
    - `newman` and / or `chai` (for testing)
- Front end
    - `Vuex` (for state management) https://www.npmjs.com/package/vuex
    - `chai` (Maybe - for testing)
- Environmental
    - `docker` for PostgreSQL when we get there
- And who knows - maybe I'll just wrap this whole show up into `Docker`

---
## Why ...
### _... are you polluting GitHub with another TODO application?_
It's been awhile since I bootstrapped a whole new show and used Express. This seemed like a reasonable step back into it. Wait until you see what comes next!

---
## Running this train wreck
Assuming you have Node and git installed it's simple enough:
- clone this repo: `git clone https://github.com/Williams-Christopher/fs-todo.git`
- cd into `fs-todo`
- Rename `env-example` to `.env.dev` (or something else but you'll need to update the `dev` script in `package.json` with the new name)
- `npm install`
- `npm run dev`
