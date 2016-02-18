https://xakep.ru/2014/05/30/bower-package-manager/ -  bower 
http://webhamster.ru/site/page/index/articles/comp/171 - git
http://noanime.ru/2013/06/sass-compass-installation-configuration.html - sass + compass
<<<<<<< HEAD
http://sass-scss.ru/documentation - Ð´Ð¾ÐºÑƒÐ¼ÐµÐ½Ñ‚Ð°Ñ†Ð¸Ñ sass
=======
http://sass-scss.ru/documentation -  sass
>>>>>>> 79e46d8ec6ccabcb2d91581f161e42ebaa82c6bd
http://habrahabr.ru/post/250569/  gulp 
http://fonts4web.ru/ - fonts for site (woff,eot, ttf)
>>>> icons
https://fortawesome.github.io/Font-Awesome/



sublime commands 
ctr shift C - color picker
///////////////////////////
git command
git init
git commit -m "first commit"
git remote add origin git@github.com:mpkluft/landing.git
git push -u origin master
<<<<<<< HEAD
git remote rm origin -ÑƒÐ´Ð°Ð»ÑÐµÑ‚ Ð¿Ñ€Ð¸Ð²ÑÐ·ÐºÑƒ
///////////////////////////
CSS
ÑÐ´ÐµÐ»Ð°Ñ‚ÑŒ Ð¸Ð· Ð´Ð¸Ð²Ð° ÐºÑ€ÑƒÐ³ - border-radius: 50%
Ð²Ñ‹Ñ€Ð¾Ð²Ð½ÑÑ‚ÑŒ Ð¿Ð¾ Ñ†ÐµÐ½Ñ‚Ñ€Ñƒ Ð±Ð»Ð¾Ðº Ñ position: absolute;  left:50% + margin-left: -width/2
Ñ‚Ð°Ð±Ð»Ð¸Ñ‡Ð½Ð°Ñ Ð²ÐµÑ€ÑÑ‚ÐºÐ° Ð´Ð¸Ð²Ð°Ð¼Ð¸ display:table;, display:table-row; Ð¸ display:table-cell;
=======
git remote rm origin -óäàëÿåò ïðèâÿçêó
///////////////////////////
CSS
circle - border-radius: 50%
razmeschenie v centre -  position: absolute;  left:50% + margin-left: -width/2
div - table -  display:table;, display:table-row;  display:table-cell;

>>>>>>> 79e46d8ec6ccabcb2d91581f161e42ebaa82c6bd
ñîçäàíèå øðèôòîâ èç SVG 
ñîçäàòü äâà ôàéëà äëÿ øðèôòîâ â svg - svg è -svgSource (äëÿ ðåäàêòèðîâàíèÿ) + ñîçäàòü PNG äÿë ïðîñìîòðà
ôàéë ÑÂÃ ïîðãíàòü ÷åðåç êîíâåðòåð svg to ttf https://cloudconvert.com/svg-to-ttf
ttf ïðîãíàòü  ÷åðåç http://www.fontsquirrel.com/

>>>>>> mysql command
>>enter
mysql -u username -p	
SHOW DATABASES;
USE databasename;
SHOW TABLES;
>>> create 
CREATE DATABASE dbname;
>>>or
mysqladmin -u username -p create dbname;
>>>delete table
DROP TABLE tableName
>>> create user
CREATE USER 'bob'@'localhost' IDENTIFIED BY 'password';
>>> privileges
GRANT ALL PRIVILEGES ON wordpress_db.* to 'bob'@'localhost';
>>>add new column
ALTER TABLE Employees ADD COLUMN middle_name CHAR(10) NULL AFTER first_name;
>>>create table
CREATE TABLE news ( id int not null auto_increment, name varchar(150), tags varchar(40), date timestamp, text text, picture varchar(25),primary key(id);
>>>show tables
describe tablesName
>>dump
mysqldump -uadmin -pSuperPassword mydb_forum > mydb_forum.sql
>>load dump 
mysql -uadmin -pSuperPassword mydb_forum < mydb_forum.sql



