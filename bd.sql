
CREATE TABLE `news` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `what_about` varchar(100) DEFAULT NULL,
  `main_text` varchar(100) DEFAULT NULL,
  `autor` varchar(255) DEFAULT NULL,
  `likes` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


ALTER TABLE `news`
ADD PRIMARY KEY (`id`);

ALTER TABLE `news`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;


INSERT INTO news (title, what_about, main_text, autor,likes) VALUES ('web cool','web','web developer get 500$ very easy $$$$','Andrey',0);


CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `login_name` varchar(255) DEFAULT NULL,
  `folowing` int(11) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


ALTER TABLE `users`
ADD PRIMARY KEY (`id`);

ALTER TABLE `users`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;


INSERT INTO users (login_name,  folowing, email,password) VALUES ('admin','0','admin@admin.admin','12345678');



CREATE TABLE `coment_news` (
  `id` int(11) NOT NULL,
  `username` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `text_about_what` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

ALTER TABLE `coment_news`
ADD PRIMARY KEY (`id`);

ALTER TABLE `coment_news`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;


INSERT INTO coment_news (username,  type, title,text_about_what) VALUES ('admin','news','bad workers','all developers very bad');

INSERT INTO coment_news (username,  type, title,text_about_what) VALUES ('admin','comment','developer with id 2281337 very expensive','the developer is not worth the money');

INSERT INTO coment_news (username,  type, title,text_about_what) VALUES ('admin','review','this portal fucked up','all developers very bad and very expensive, and write incomprehensible code');
