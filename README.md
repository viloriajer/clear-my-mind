# Clear My Mind

The goal of this project is to create a small web page that will generate a random task
that can give you an idea of what you can do if you're feeling overwhelmed.

## Tech Stack

Javascript, HTML, Express, MySQL

## SETUP

If you want to set this up locally you can do so by first creating and populating the database using these queries.

```mysql
CREATE DATABASE clearMyMind;

CREATE TABLE activity(
    activityId INT PRIMARY KEY AUTO_INCREMENT,
    activity VARCHAR(255)
);

LOAD DATA LOCAL INFILE "PATH_TO_REPO/activities.csv"
INTO TABLE activity
COLUMNS TERMINATED BY ','
OPTIONALLY ENCLOSED BY '"'
ESCAPED BY '"' LINES TERMINATED BY '\n'
IGNORE 1 LINES
(activity);

```

Dont forget to modify the `example.env` file to match your machines ports and rename the file to `.env`.

Once that is complete you can run `npm install` and then `npm dev` to run.
