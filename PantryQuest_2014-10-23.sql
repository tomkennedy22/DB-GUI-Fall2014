# ************************************************************
# Sequel Pro SQL dump
# Version 4135
#
# http://www.sequelpro.com/
# http://code.google.com/p/sequel-pro/
#
# Host: localhost (MySQL 5.5.38)
# Database: PantryQuest
# Generation Time: 2014-10-23 15:08:38 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

DROP DATABASE IF EXISTS PantryQuest;
CREATE DATABASE PantryQuest;
USE PantryQuest;

# Dump of table filter
# ------------------------------------------------------------

DROP TABLE IF EXISTS `filter`;

CREATE TABLE `filter` (
  `filterID` int(11) unsigned NOT NULL,
  `method` varchar(30) DEFAULT NULL,
  `glutenFree` tinyint(1) DEFAULT NULL,
  `vegetarian` tinyint(1) DEFAULT NULL,
  `vegan` tinyint(1) DEFAULT NULL,
  `noNuts` tinyint(1) DEFAULT NULL,
  `lactoseFree` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`filterID`),
  CONSTRAINT `recipeID` FOREIGN KEY (`filterID`) REFERENCES `recipe` (`recipeID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `filter` WRITE;
/*!40000 ALTER TABLE `filter` DISABLE KEYS */;

INSERT INTO `filter` (`filterID`, `method`, `glutenFree`, `vegetarian`, `vegan`, `noNuts`, `lactoseFree`)
VALUES
	(1,'oven',0,1,0,1,0);

/*!40000 ALTER TABLE `filter` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table ingredient
# ------------------------------------------------------------

DROP TABLE IF EXISTS `ingredient`;

CREATE TABLE `ingredient` (
  `foodID` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `foodName` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`foodID`),
  KEY `foodName` (`foodName`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `ingredient` WRITE;
/*!40000 ALTER TABLE `ingredient` DISABLE KEYS */;

INSERT INTO `ingredient` (`foodID`, `foodName`)
VALUES
	(5,'baking soda'),
	(4,'butter'),
	(1,'carrot'),
	(6,'egg'),
	(3,'flour'),
	(2,'sugar');

/*!40000 ALTER TABLE `ingredient` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table recipe
# ------------------------------------------------------------

DROP TABLE IF EXISTS `recipe`;

CREATE TABLE `recipe` (
  `recipeID` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `recipeName` varchar(30) DEFAULT NULL,
  `instruction` varchar(100) DEFAULT NULL,
  `time` int(11) DEFAULT NULL,
  `numberOfIgredients` int(11) DEFAULT NULL,
  `ranking` float DEFAULT NULL,
  PRIMARY KEY (`recipeID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `recipe` WRITE;
/*!40000 ALTER TABLE `recipe` DISABLE KEYS */;

INSERT INTO `recipe` (`recipeID`, `recipeName`, `instruction`, `time`, `numberOfIgredients`, `ranking`)
VALUES
	(1,'carrotcake ','connect to json',180,8,3.5);

/*!40000 ALTER TABLE `recipe` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table recipeConnection
# ------------------------------------------------------------

DROP TABLE IF EXISTS `recipeConnection`;

CREATE TABLE `recipeConnection` (
  `recipeID` int(11) unsigned NOT NULL,
  `foodName` varchar(30) DEFAULT NULL,
  `substitutable` tinyint(1) DEFAULT NULL,
  `essential` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`recipeID`),
  KEY `foodName` (`foodName`),
  CONSTRAINT `name FK` FOREIGN KEY (`foodName`) REFERENCES `ingredient` (`foodName`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `recipe ID FK` FOREIGN KEY (`recipeID`) REFERENCES `recipe` (`recipeID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `recipeConnection` WRITE;
/*!40000 ALTER TABLE `recipeConnection` DISABLE KEYS */;

INSERT INTO `recipeConnection` (`recipeID`, `foodName`, `substitutable`, `essential`)
VALUES
	(1,'carrot',0,1);

/*!40000 ALTER TABLE `recipeConnection` ENABLE KEYS */;
UNLOCK TABLES;



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;