# softray-news-website

## Backend

Developed in Spring.

##### Database

MySQL

`CREATE SCHEMA harunsaranovic_newswebsite;`
`CREATE TABLE harunsaranovic_newswebsite.users ( user_id INT NOT NULL AUTO_INCREMENT, username VARCHAR(30) NOT NULL, password VARCHAR(45) NOT NULL, PRIMARY KEY (user_id));`
`CREATE TABLE harunsaranovic_newswebsite.news ( id INT NOT NULL AUTO_INCREMENT, title VARCHAR(60) NULL, content VARCHAR(1000) NULL, date DATETIME DEFAULT CURRENT_TIMESTAMP, PRIMARY KEY (id));`

In src/main/resources/application.properties set your database url, username and password
`spring.datasource.url=jdbc:mysql://localhost:3306/harunsaranovic_newswebsite?useUnicode=true&useJDBCCompliantTimezoneShift=true&useLegacyDatetimeCode=false&serverTimezone=UTC spring.datasource.username=root spring.datasource.password=root`

## Frontend

runs on port: _http://localhost:4200_

## Login info

**Administrator user**
Username: admin
Password: admin
