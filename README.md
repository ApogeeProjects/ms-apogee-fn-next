# Apogee repo for the MS Apogee

It using

## Frontend

- Using NextJS which is a react framework
- TailwindCSS which is utilify first framework for CSS

## Backend

- NextJS API is used
- PostGresSQL database

## Running application

1. clone the repository
2. go into repository directory and install all dependencies with `npm i`
3. create the database for running app locally, using mysql
4. add necessary environment variable in .env
5. start the application with desired environment. You can run in development by running `npm run dev`

### Rules

- NextJS doesn't allow the global scss in components but you can use module css which just append the unique className to it to avoid css overalapping
