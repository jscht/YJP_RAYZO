CREATE DATABASE  IF NOT EXISTS `rayzo` ;
USE `rayzo`;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `salt` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;

INSERT INTO `users` VALUES 
('Bongsik','bongstar@bong.com','042ed4e1e43b48c3cfeda7010def2e572057bfd93b947f597f2b24ecbb2747fbe99beb1d629eb92b1d0df3d5cd11b07adef9a37fd10de82b81fde9de3efd5d8a','1618250317485','2021-06-12 22:57:19','2021-06-12 22:57:19'),
('Jeongin','jik@jik.com','4eacfee126e4608b90cf72a10d6bab14deb81945d73b549f60a97b1efdb02bc127e6e1e6f8de10eb24ccbb7637fcfbad0b91ba7191941644118e05d008d1df49','1355201373781','2021-06-12 22:57:19','2021-06-12 22:57:19'),
('Junseok','jsc@jsc.com','c014a1da7884c7013cf0ed76aead9b086d348a0a97cdc2609dadb1819f53e0bf70fa83906969a1b09d3e258b97f82c200b542e7742063af987764baef05b1347','239173050806','2021-06-12 22:57:19','2021-06-12 22:57:19'),
('Deokyeong','mupeon@mu.com','c354be1e02a8dd7235c8aa76b91208ae46170b412f7f6705f7729b934286fc0cc6faa2dbf8ff63acf436219da9d2fac873580d68224bf0aa44cc329e638d539a','676726144398','2021-06-12 22:57:19','2021-06-12 22:57:19');

UNLOCK TABLES;



--
-- Table structure for table `posts`
--

DROP TABLE IF EXISTS `posts`;

CREATE TABLE `posts` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `writer` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


--
-- Dumping data for table `posts`
--

LOCK TABLES `posts` WRITE;

UNLOCK TABLES;

--
-- Table structure for table `replies`
--

DROP TABLE IF EXISTS `replies`;

CREATE TABLE `replies` (
  `id` int NOT NULL AUTO_INCREMENT,
  `postId` int NOT NULL,
  `writer` varchar(255) NOT NULL,
  `content` text NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `postId` (`postId`),
  CONSTRAINT `replies_ibfk_1` FOREIGN KEY (`postId`) REFERENCES `posts` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


--
-- Dumping data for table `replies`
--

LOCK TABLES `replies` WRITE;

UNLOCK TABLES;

