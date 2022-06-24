-- MySQL dump 10.13  Distrib 8.0.29, for Linux (x86_64)
--
-- Host: localhost    Database: collegebuddy
-- ------------------------------------------------------
-- Server version	8.0.29-0ubuntu0.20.04.3

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `blog`
--

DROP TABLE IF EXISTS `blog`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `blog` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(45) NOT NULL,
  `category` varchar(45) DEFAULT NULL,
  `address` varchar(45) DEFAULT NULL,
  `create_date` date NOT NULL,
  `img_src` varchar(255) DEFAULT NULL,
  `blog_data` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `blog`
--

LOCK TABLES `blog` WRITE;
/*!40000 ALTER TABLE `blog` DISABLE KEYS */;
INSERT INTO `blog` VALUES (8,'fwqfqw','tech',NULL,'2022-06-17','https://play-lh.googleusercontent.com/aFWiT2lTa9CYBpyPjfgfNHd0r5puwKRGj2rHpdPTNrz2N9LXgN_MbLjePd1OTc0E8Rl1','wqfqwfwqf'),(9,'fwef','food',NULL,'2022-06-16','https://play-lh.googleusercontent.com/aFWiT2lTa9CYBpyPjfgfNHd0r5puwKRGj2rHpdPTNrz2N9LXgN_MbLjePd1OTc0E8Rl1','fewfwe'),(10,'fweg','travel',NULL,'2022-06-25','https://play-lh.googleusercontent.com/aFWiT2lTa9CYBpyPjfgfNHd0r5puwKRGj2rHpdPTNrz2N9LXgN_MbLjePd1OTc0E8Rl1','wegweg'),(11,'gweg','tips',NULL,'2022-06-24','https://play-lh.googleusercontent.com/aFWiT2lTa9CYBpyPjfgfNHd0r5puwKRGj2rHpdPTNrz2N9LXgN_MbLjePd1OTc0E8Rl1','fwegweg'),(12,'Coorg - The Scotland of India','Travel and tips','Coorg','2022-04-14','https://hblimg.mmtcdn.com/content/hubble/img/coorg/mmt/destination/m_Coorg_activity_trekking_l_495_743.jpg','Madikeri is a hill town in southern India. Framed by the Western Ghats mountain range, it’s known for the Raja’s Seat, a simple monument overlooking forests and rice paddies. In the center, the 17th-century Madikeri Fort features 2 stone elephants at the entrance. Nearby, the domed Omkareshwar Temple is dedicated to the Hindu deity Shiva. To the northwest, cascading Abbey Falls is surrounded by spice plantations.');
/*!40000 ALTER TABLE `blog` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hospital`
--

DROP TABLE IF EXISTS `hospital`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hospital` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `address` varchar(255) DEFAULT NULL,
  `image` varchar(45) DEFAULT NULL,
  `category` varchar(100) DEFAULT NULL,
  `rating` varchar(100) DEFAULT NULL,
  `urls` varchar(300) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hospital`
--

LOCK TABLES `hospital` WRITE;
/*!40000 ALTER TABLE `hospital` DISABLE KEYS */;
INSERT INTO `hospital` VALUES (1,'At Mary Hospital OT','Manandavadi Road, Mysore South, Mysore - 570008, Near Silk Factory','st_mary.jpeg','Hospital','3.2(12)','\"https://www.google.com/maps/place/At+Mary+Hospital+OT/@12.2844907,76.637349,17z/data=!3m1!4b1!4m10!1m3!11m2!2s8MBXogcbTJSAf3hyww_T6g!3e3!3m5!1s0x3baf6f38215e0093:0x51665218712f30c9!8m2!3d12.2844855!4d76.6415762!15sCgEqkgEIaG9zcGl0YWw\"'),(2,'Medcure DIAGNOSTICS & Polyclinic','#67/A, Fort Mohalla, Mysuru, Marg, Margroad, Agrahara, Mysore - 570004','medcure_diagnostic.jpg','Hospital','3.1(34)','\"https://www.google.com/maps/place/Medcure+DIAGNOSTICS+%26+Polyclinic/@12.2973567,76.6515668,17z/data=!3m1!4b1!4m10!1m3!11m2!2s8MBXogcbTJSAf3hyww_T6g!3e3!3m5!1s0x3baf701b81870a3b:0xfee68b9808a20749!8m2!3d12.2973515!4d76.655794!15sCgEqkgEIaG9zcGl0YWw\"'),(3,'SANCHALANA HOSPITAL','\"#63, SUNDEW Complex, opp. JSS Hospital\"','sanchalana_hospital.jpeg','Hospital','5.0(4)','\"https://www.google.com/maps/place/SANCHALANA+HOSPITAL/@12.2973645,76.6520325,17z/data=!3m1!4b1!4m10!1m3!11m2!2s8MBXogcbTJSAf3hyww_T6g!3e3!3m5!1s0x3baf716e3814c45f:0x979f7e3b4cde72e7!8m2!3d12.2973593!4d76.6562597!15sCgEqkgEIaG9zcGl0YWw\"'),(4,'GC’s Sports medicine & Multispeciality Hospital','30/1 GS Ramakrishnaiah Main Road, Vishweshwara Nagar, Mysore - 570008, Near St Thomas School','gc_sports_hospital.jpeg','Hospital','4.9(83)','\"https://www.google.com/maps/place/GC%E2%80%99s+Sports+medicine+%26+Multispeciality+Hospital/@12.2877219,76.6282645,14z/data=!4m10!1m3!11m2!2s8MBXogcbTJSAf3hyww_T6g!3e3!3m5!1s0x3baf6fe311f6f533:0x4fb5099dcfbc8685!8m2!3d12.278051!4d76.6432147!15sCgEqkgEIaG9zcGl0YWw\"'),(5,'Kamala Raman Hospital','C/o Raman Memorial Hospital, No.1498 / 1, Rama Iyer Road, Krishnamurthy Puram, Mysore - 570004 ','kamala_raman_hospital.jpeg','Hospital','4.8(6)','\"https://www.google.com/maps/place/Kamala+Raman+Hospital/@12.2877219,76.6282645,14z/data=!4m10!1m3!11m2!2s8MBXogcbTJSAf3hyww_T6g!3e3!3m5!1s0x3baf70006c7cab41:0xbd8093e83a3ab7e7!8m2!3d12.292277!4d76.6423094!15sCgEqkgEIaG9zcGl0YWw\"'),(6,'P H C Ayar Care Clinic','\"8J3X+7MJ, Cheluvamba Agrahara, K.R. Mohalla, near Darshan Enterprises\"',NULL,'Hospital','2.5(2)','\"https://www.google.com/maps/place/P+H+C+Ayar+Care+Clinic/@12.3032229,76.6449022,17z/data=!3m1!4b1!4m10!1m3!11m2!2s8MBXogcbTJSAf3hyww_T6g!3e3!3m5!1s0x3baf700f6e055a8d:0xda8edbc4df0d073a!8m2!3d12.3032177!4d76.6491294!15sCgEqkgEIaG9zcGl0YWw\"'),(7,'Kamakshi Hospital Jp Nagar Unit','',NULL,'Hospital','3.8(48)','\"https://www.google.com/maps/place/Kamakshi+Hospital+Jp+Nagar+Unit/@12.2648435,76.6310615,17z/data=!3m1!4b1!4m10!1m3!11m2!2s8MBXogcbTJSAf3hyww_T6g!3e3!3m5!1s0x3baf65672b80964b:0xbc7c95a896fd6087!8m2!3d12.2648383!4d76.6352887!15sCgEqWgMiASqSAQhob3NwaXRhbLABAA\"'),(8,'Pooja Clinic','\"37, 18th Cross, 2nd Main, Udayaravi Rd, near Rama Mandira Stop\"',NULL,'Medical clinic','3.0(12)','\"https://www.google.com/maps/place/Pooja+Clinic/@12.285495,76.631799,17z/data=!3m1!4b1!4m10!1m3!11m2!2s8MBXogcbTJSAf3hyww_T6g!3e3!3m5!1s0x3baf65540f7649d9:0x260d8c99aae7adbd!8m2!3d12.2854899!4d76.6360262!15sCgEqkgEObWVkaWNhbF9jbGluaWM\"'),(9,'Udupa Clinic','\"1638, ನಾರಾಯಣ ಶಾಸ್ತ್ರಿ ರಸ್ತೆ\"',NULL,'Hospital','4.1(14)','\"https://www.google.com/maps/place/Udupa+Clinic/@12.2960141,76.643568,17z/data=!3m1!4b1!4m10!1m3!11m2!2s8MBXogcbTJSAf3hyww_T6g!3e3!3m5!1s0x3baf7003f0571399:0x2f0299252daa827f!8m2!3d12.2960089!4d76.6477952!15sCgEqkgEIaG9zcGl0YWw\"'),(10,'Sri Annapurna Clinic','\"2377, New Kantharaj Urs Rd\"',NULL,'Hospital','5.0(1)','\"https://www.google.com/maps/place/Sri+Annapurna+Clinic/@12.2877219,76.6282645,14z/data=!4m10!1m3!11m2!2s8MBXogcbTJSAf3hyww_T6g!3e3!3m5!1s0x3baf7aaeab1dd209:0x3973c91064f545cc!8m2!3d12.2960422!4d76.6353727!15sCgEqkgEIaG9zcGl0YWw\"'),(11,'\"SECURE Hospital, Mysuru\"','\"#1659, Sitaranga Healthcare Complex, NS Road\"',NULL,'Hospital','2.8(118)','\"https://www.google.com/maps/place/SECURE+Hospital,+Mysuru/@12.2952648,76.643979,17z/data=!3m1!4b1!4m10!1m3!11m2!2s8MBXogcbTJSAf3hyww_T6g!3e3!3m5!1s0x3baf7003ea1587dd:0xee02922cf4f5628b!8m2!3d12.2952596!4d76.6482062!15sCgEqkgEIaG9zcGl0YWw\"'),(12,'Kanagal hospital','207/206',NULL,'Hospital','2.0(12)','\"https://www.google.com/maps/place/Kanagal+hospital/@12.2815482,76.6437914,17z/data=!3m1!4b1!4m10!1m3!11m2!2s8MBXogcbTJSAf3hyww_T6g!3e3!3m5!1s0x3baf6f31e841ebfd:0xdbee7aeb0daba3ab!8m2!3d12.281543!4d76.6480186!15sCgEqkgEIaG9zcGl0YWw\"'),(13,'panacia clinic Mysore','\"356, Sayyaji Rao Rd\"',NULL,'Hospital','2.0(6)','\"https://www.google.com/maps/place/panacia+clinic+Mysore/@12.2988702,76.6485508,17z/data=!3m1!4b1!4m10!1m3!11m2!2s8MBXogcbTJSAf3hyww_T6g!3e3!3m5!1s0x3baf7004d200df67:0x15aec170924ec035!8m2!3d12.298865!4d76.652778!15sCgEqkgEIaG9zcGl0YWw\"'),(14,'VINAYAKA CLINIC','\"Palya main road, N H Palya, Block A, 570008, NH, USA\"',NULL,'Hospital','0.0(0)','\"https://www.google.com/maps/place/VINAYAKA+CLINIC/@12.2652659,76.6348129,17z/data=!3m1!4b1!4m10!1m3!11m2!2s8MBXogcbTJSAf3hyww_T6g!3e3!3m5!1s0x3baf6561ad45c857:0x8adf7e9a9ca78d2!8m2!3d12.2652607!4d76.6390401!15sCgEqkgEIaG9zcGl0YWw\"'),(15,'Dr Krishnamurthy Pediatricians Clinic','\"7JPP+RFC, Unnamed Road\"',NULL,'Hospital','5.0(21)','\"https://www.google.com/maps/place/Dr+Krishnamurthy+Pediatricians+Clinic/@12.2870761,76.6319076,17z/data=!3m1!4b1!4m10!1m3!11m2!2s8MBXogcbTJSAf3hyww_T6g!3e3!3m5!1s0x3baf65596de40015:0x78543b8754442fee!8m2!3d12.2870709!4d76.6361348!15sCgEqkgEIaG9zcGl0YWw\"'),(16,'Health Point','\"201, C Block, 10th Main, 10th Main, Near Complex, J.P. Nagar\"',NULL,'Hospital','0.0(0)','\"https://www.google.com/maps/place/Health+Point/@12.2659222,76.6406058,17z/data=!3m1!4b1!4m10!1m3!11m2!2s8MBXogcbTJSAf3hyww_T6g!3e3!3m5!1s0x3baf6f8b060fe4c9:0x9085221bde3ac195!8m2!3d12.265917!4d76.644833!15sCgEqkgEIaG9zcGl0YWw\"'),(17,'Snt Meris General Hospital','\"7JPV+22F, N.I.E. College Road, Vidyaranyapuram, near N.I.E. College\"',NULL,'Hospital','0.0(0)','\"https://www.google.com/maps/place/Snt+Meris+General+Hospital/@12.2850652,76.6383328,17z/data=!3m1!4b1!4m10!1m3!11m2!2s8MBXogcbTJSAf3hyww_T6g!3e3!3m5!1s0x3baf6ff8b52f289f:0x7b6086cf8a0a2be7!8m2!3d12.28506!4d76.64256!15sCgEqkgEIaG9zcGl0YWw\"'),(18,'Sumuka Clinic','\"2, 2nd Stage, Industrial Suburb, 2nd Stage, Near Arallikate Bus Stop, Vishweshwara Nagar\"',NULL,'Hospital','4.0(1)','\"https://www.google.com/maps/place/Sumuka+Clinic/@12.2749761,76.6386689,17z/data=!3m1!4b1!4m10!1m3!11m2!2s8MBXogcbTJSAf3hyww_T6g!3e3!3m5!1s0x3baf6ff66b882e2b:0xfd7fe3345776179c!8m2!3d12.2749709!4d76.6428961!15sCgEqkgEIaG9zcGl0YWw\"'),(19,'Mahalaxmi Clinic','\"No. 162/2, 4th Main, Sarvajanika Hostel Road, 4th Main, Sarvajanika Hostel Road, Near Public Hostel, Vidyaranyapuram\"',NULL,'Hospital','5.0(1)','\"https://www.google.com/maps/place/Mahalaxmi+Clinic/@12.2854191,76.6413983,17z/data=!3m1!4b1!4m10!1m3!11m2!2s8MBXogcbTJSAf3hyww_T6g!3e3!3m5!1s0x3baf6ffeb58f3f37:0x4dacd7a77692ca0!8m2!3d12.2854139!4d76.6456255!15sCgEqkgEIaG9zcGl0YWw\"'),(20,'Narayana Hrudayalaya Clinics','\"8J6W+4WV, Vinoba Rd\"',NULL,'Hospital','4.3(13)','\"https://www.google.com/maps/place/Narayana+Hrudayalaya+Clinics/@12.3103624,76.643068,17z/data=!3m1!4b1!4m10!1m3!11m2!2s8MBXogcbTJSAf3hyww_T6g!3e3!3m5!1s0x3baf700c7e5f4d35:0xe35bab6f8dfa4f42!8m2!3d12.3103572!4d76.6472952!15sCgEqkgEIaG9zcGl0YWw\"');
/*!40000 ALTER TABLE `hospital` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pg`
--

DROP TABLE IF EXISTS `pg`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pg` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `category` varchar(255) DEFAULT NULL,
  `rating` varchar(100) DEFAULT NULL,
  `urls` varchar(100) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `lat` varchar(100) DEFAULT NULL,
  `lng` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pg`
--

LOCK TABLES `pg` WRITE;
/*!40000 ALTER TABLE `pg` DISABLE KEYS */;
INSERT INTO `pg` VALUES (1,'Dwarka PG','2847, Jayanagar, Kuvempu Nagara, Mysuru, Karnataka 570014','Hostel','4.0(5)','https://www.google.com/maps/place/Dwarka+PG/@12.2913719,76.6279238,15z/data=!3m1!4b1!4m10!1m3!11m2!2','dwarka_pg.jpeg','12.291426','76.6366641'),(2,'Male mahadeshwara girls pg','1086-1','Hostel','4.3','https://www.google.com/maps/place/Male+mahadeshwara+girls+pg/@12.2858032,76.6422595,15z/data=!3m1!4b','mahadesh_pg.jpg','12.2857761','76.6509925'),(3,'Shri Sai Boys PG','1840, 1st Cross Rd','Hostel','2.9(11)','https://www.google.com/maps/place/Shri+Sai+Boys+PG/@12.2879469,76.6225527,15z/data=!3m1!4b1!4m10!1m3','sai_boys_pg.jpg','12.287947','76.631286'),(4,'Ashraya Ladies PG ( paying guest)','No 1011,Above KFC, Aadya gowda Arcade, Udayaravi Rd','Hostel','3.8(32)','https://www.google.com/maps/place/Ashraya+Ladies+PG+(+paying+guest)/@12.2862348,76.6191609,15z/data=','Ashraya Ladies PG.jpg','12.2862349','76.6278942'),(5,'Prakruthi paying guest for boys','#905, 82, 4th Main 5th Cross Rd','Student housing center','4.0(59)','\"https://www.google.com/maps/place/Prakruthi+paying+guest+for+boys/@12.2865768,76.639141,15z/data=!3','Prakruthi.jpeg','12.2866142','76.6478736'),(6,'CKG Tower P.G/ Vychita Pg','1146/7, Sarvajanika Hostel Rd','Hostel','3.3(41)','https://www.google.com/maps/place/CKG+Tower+P.G%2F+Vychita+Pg/@12.2856218,76.6345152,15z/data=!3m1!4','vychitha_pg.jpg','12.2855975','76.6432408'),(7,'Akka pg','Khb colony 3rd cross road vidayaranya puram','Girl\'s Hostel','4.3(31)','https://www.google.com/maps/place/Akka+pg/@12.2857127,76.6388297,15z/data=!3m1!4b1!4m10!1m3!11m2!2su','akka_pg.jpeg','12.2857128','76.647563'),(8,'Nagaraj PG for Boys','\"905/170, 4th Main 6th Cross Rd\"','Boy\'s Hostel','3.9(8)','https://www.google.com/maps/place/Nagaraj+PG+for+Boys/@12.2859266,76.6371447,15z/data=!3m1!4b1!4m10!','nagaraj_pg.jpeg','12.285974','76.6458781'),(9,'Sarovara Paying guest','\"7JMV+86X, 4th Main 12th Cross Rd\"','Hostel','3.4(13)','https://www.google.com/maps/place/Sarovara+Paying+guest/@12.2833729,76.6343791,15z/data=!3m1!4b1!4m1','sarova_pg.jpg','12.283373','76.6431124'),(10,'Ashirvad boy\'s PG','1137/3, 8th Main Road, Sarvajanika Hostel Road','Hostel','4.1(32)','https://www.google.com/maps/place/Ashirvad+boy\'s+PG/@12.2838009,76.6348644,15z/data=!3m1!4b1!4m10!1m','Ashirvad_boy.webp','12.2838001','76.6436066');
/*!40000 ALTER TABLE `pg` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `stationary`
--

DROP TABLE IF EXISTS `stationary`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `stationary` (
  `id_stationary` int NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id_stationary`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `stationary`
--

LOCK TABLES `stationary` WRITE;
/*!40000 ALTER TABLE `stationary` DISABLE KEYS */;
/*!40000 ALTER TABLE `stationary` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `student_feedback`
--

DROP TABLE IF EXISTS `student_feedback`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `student_feedback` (
  `Name` varchar(45) DEFAULT NULL,
  `Address` varchar(45) DEFAULT NULL,
  `gmaplink` varchar(200) DEFAULT NULL,
  `id` int NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `student_feedback`
--

LOCK TABLES `student_feedback` WRITE;
/*!40000 ALTER TABLE `student_feedback` DISABLE KEYS */;
/*!40000 ALTER TABLE `student_feedback` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-06-24 18:07:29
