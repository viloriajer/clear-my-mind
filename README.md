# Clear My Mind

The goal of this project is to create a small web page that will generate a random task
that can give you an idea of what to do if you're feeling overwhelmed.

## Tech Stack

Vanilla JS, HTML, Express, MySQL

## MYSQL SETUP

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
