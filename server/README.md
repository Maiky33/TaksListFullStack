# Task List Fullstack

This is a fullstack project that uses a MySQL database to store tasks. The project includes a backend server built with Node.js and Express, and a frontend built with React.

## Database

A MySQL database is used with a table called `task`. The structure of the table is as follows:

| Column       | Type        | Description                                      |
|--------------|-------------|--------------------------------------------------|
| `id`         | INT         | Primary key, not null, auto increment            |
| `title`      | VARCHAR(45) | Task title                                       |
| `description`| VARCHAR(45) | Task description                                 |
| `done`       | TINYINT(1)  | Indicates if the task is completed (0 or 1)      |
| `createat`   | DATE        | Task creation date                               |

## Server Configuration

To configure the database connection, you need to modify the `host`, `user`, `password`, and `database` values in the `config.js` file of the server. Here is an example of what `config.js` should look like:

```javascript
module.exports = {
    host: 'localhost',
    user: 'root',
    password: 'your_password',
    database: 'taskdb'
};

##Installation Instructions
##Backend

    Clone the repository and navigate to the project root directory:

    bash

git clone https://github.com/your_username/tasklistfullstack.git
cd tasklistfullstack

##Install the server dependencies:

bash

npm install

##Run the server in development mode:

bash

    npm run dev

##Frontend

    Navigate to the client folder within the project:

    bash

cd client

##Install the client dependencies:

bash

npm install

Start the frontend application:

bash

npm run start
