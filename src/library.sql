-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 25, 2019 at 02:53 PM
-- Server version: 10.3.16-MariaDB
-- PHP Version: 7.3.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `library`
--

-- --------------------------------------------------------

--
-- Table structure for table `books`
--

CREATE TABLE `books` (
  `id_book` int(11) NOT NULL,
  `title` varchar(50) NOT NULL,
  `description` text NOT NULL,
  `image` varchar(250) NOT NULL,
  `date_released` date NOT NULL,
  `id_genre` int(11) NOT NULL,
  `id_status` int(11) NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `books`
--

INSERT INTO `books` (`id_book`, `title`, `description`, `image`, `date_released`, `id_genre`, `id_status`, `created_at`, `updated_at`) VALUES
(1, 'Kata', 'Kata, bercerita tentang Nugraha, Biru, dan Binta yang kian menjauh tanpa pernah menjelaskan perasaan satu sama lain. Mereka harus bicara dan mulai membuka hati, dan mengungkapkan isi hati agar persahabatan mereka sempurna kembali dari luka karena cinta.', 'https://www.gramedia.com/blog/content/images/2018/12/Kata-Rintik-Sedu-1.jpg', '2018-04-12', 4, 1, '2019-08-16 16:05:21', '2019-08-16 16:05:21'),
(2, 'Garis Waktu: Sebuah Perjalanan Menghapus Luka', 'Setelah Konspirasi Alam Semesta, Karya kedua dari Fiersa Besari yang berisikan kumpulan cerita yang saling berkaitan ini merupakan memoar hati yang dirangkai indah lengkap dengan rima yang menarik oleh si penulis yang juga seorang penyanyi ini. Dibuat seolah bermonolog, membuat kisah di dalamnya memiliki daya tarik tersendiri.', 'https://i2.wp.com/bukubabad.com/wp-content/uploads/2018/12/Garis-Waktu-1.jpg?fit=600%2C600', '2019-04-12', 5, 1, '2019-08-16 16:06:21', '2019-08-16 16:06:21'),
(3, 'Bumi Manusia', 'Naskah Bumi Manusia dibuat ketika Pram diasingkan dan dipenjara di Pulau Buru. Naskah ini telah melewati masa-masa buruk bersama Pram mulai disembunyikan, dikubur, disita, hingga ditulis kembali. Kini, buku ini dielu-elukan sebagai karya sastra Indonesia terbesar dan mendapatkan 12 penghargaan internasional.', 'https://www.gramedia.com/blog/content/images/2018/12/Bumi-Manusia.jpg', '2017-05-05', 6, 1, '2019-08-16 16:12:30', '2019-08-16 16:12:30'),
(4, 'Berhenti di Kamu', 'Berawal dari cuitan di Twitter tentang jatuh bangun kisah cintanya, kini Gia Pratama yang berprofesi sebagai dokter mencurahkan kisahnya itu ke dalam sebuah buku yang diberi judul #Berhentidikamu.', 'https://www.gramedia.com/blog/content/images/2018/12/berhentidikamu.jpg', '2018-07-23', 4, 1, '2019-08-16 16:13:18', '2019-08-16 16:13:18'),
(5, 'One Punch Man', 'Botak botak botak botak botak botak botak botak botak botak botak botak botak botak botak botak botak botak botak botak botak botak botak ', 'https://static0.srcdn.com/wordpress/wp-content/uploads/2019/08/One-Punch-Man-Road-to-Hero-Key-Art.jpg', '2018-08-10', 3, 1, '2019-08-16 16:14:16', '2019-08-16 16:14:16'),
(6, 'ANAK SEMUA BANGSA', 'Lanjutan dari Bumi Manusia, novel Anak Semua Bangsa masih bercerita tentang Minke tapi lebih menceritakan tentang kondisi negara Indonesia di tahun 1898-1918. Semasa penjajahan Hindia Belanda, rakyat Indonesia mengalami penderitaan. Mereka ditindas, diteror, dan dipaksa untuk memberikan tanahnya kepada bangsa Belanda.', 'http://1.bp.blogspot.com/-rFfqpW7igG8/T_Y2mVCiyxI/AAAAAAAAAbA/wSOjRFpVJc4/s1600/anak+semua+bangsa.jpg', '2015-08-10', 7, 1, '2019-08-17 05:47:23', '2019-08-17 05:47:23'),
(7, 'Ronggeng Dukuh Paruk', 'Lanjutan dari Bumi Manusia, novel Anak Semua Bangsa masih bercerita tentang Minke tapi lebih menceritakan tentang kondisi negara Indonesia di tahun 1898-1918. Semasa penjajahan Hindia Belanda, rakyat Indonesia mengalami penderitaan. Mereka ditindas, diteror, dan dipaksa untuk memberikan tanahnya kepada bangsa Belanda.', 'https://scontent-cdg2-1.cdninstagram.com/vp/fe32b5d68524ea3b0c2b728932cc412d/5DBD0F14/t51.2885-15/e35/65272118_2129437803834218_1310656860483878727_n.jpg?_nc_ht=scontent-cdg2-1.cdninstagram.com&se=7&ig_cache_key=MjA3MTgzMzEwMDMzODE5ODk2MA%3D%3D.2', '2016-08-10', 6, 1, '2019-08-17 05:49:13', '2019-08-17 05:49:13'),
(8, '5 CM', 'Menjadi buku terlaris di Gramedia Bookstore selama dua tahun berturut-turut, novel 5 Cm tentunya harus masuk dalam daftar novel Indonesia terbaik yang wajib dibaca. Novel yang ditulis oleh Donny Dhirgantoro ini menceritakan tentang kehidupan lima sahabat yang telah berteman selama tujuh tahun.', 'http://4.bp.blogspot.com/-eufkk6Oa-9U/VJMBf4FdG0I/AAAAAAAAABo/w7R8fVTsGVE/s1600/film-5-cm-5-sahabat-sutradara-rizal-mantovani.jpg', '2010-08-10', 2, 1, '2019-08-17 05:51:13', '2019-08-17 05:51:13'),
(9, 'Sang Pemimpi', 'Sang Pemimpi merupakan biku kedua dari tetralogi Laskar Pelangi, novel Sang Pemimpi menceritakan tentang hubungan persahabatan Ikal dan Arai serta kekuatan mimpi mereka untuk bisa menuntut ilmu di Perancis.', 'https://ecs7.tokopedia.net/img/cache/700/product-1/2016/5/26/9514068/9514068_9568af77-32c3-42af-a2ac-fddd4b766f9a.jpg', '2011-11-11', 2, 1, '2019-08-17 06:54:19', '2019-08-17 06:54:19'),
(10, 'Soul Land 2', 'Sebuah pulau dengan sihir keluar, dou-qi, seni bela diri, tapi memiliki roh esensi. Ini adalah benua tempur 10 000 tahun setelah pembentukan Tang Sect. Seorang pahlawan baru dan temannya berjalan tanah, baru \"Tujuh Monster dari Shrek\", akan mereka menjaga nama Tang Sekte? Atau akan runtuh karena sistem esensi baru?', 'https://wallpapercave.com/wp/wp4099483.jpg', '2018-02-01', 10, 1, NULL, NULL),
(11, 'Boruto', 'Boruto: Naruto Next Generations is a Japanese manga series written by Uky? Kodachi and illustrated by Mikio Ikemoto. It was serialised monthly in Shueisha\'s sh?nen manga magazine Weekly Sh?nen Jump since May 2016 until it was transferred to Shueisha\'s monthly magazine V Jump in July 2019', 'https://dimwhp0w2rs83.cloudfront.net/2017/02/Serial-Anime-Boruto-2.jpg', '2019-08-24', 6, 1, '2019-08-24 01:38:07', '2019-08-24 03:43:16'),
(12, 'Laskar Pelangi', 'Laskar Pelangi (English: The Rainbow Troops) is a 2008 Indonesian film adapted from the popular Laskar Pelangi (novel) by Andrea Hirata. The movie follows a group of 10 schoolchildren and their two inspirational teachers as they struggle with poverty and develop hopes for the future in Gantong Village on the farming and tin mining island of Belitung off the east coast of Sumatra. The film is one of the highest grossing in Indonesian box office history[1] and won a number of local and international awards.', 'https://media.karousell.com/media/photos/products/2018/05/17/laskar_pelangi_1526550002_321de5c5.jpg', '2019-08-01', 2, 1, '2019-08-24 06:38:42', '2019-08-24 06:38:42'),
(13, 'Negeri 5 menara', 'iahsdhiasdhasd', 'https://media.karousell.com/media/photos/products/2018/05/04/ebook_pdf_novel_negeri_5_menara_1525438773_e37ef128.jpg', '2019-08-02', 7, 1, '2019-08-24 09:48:49', '2019-08-24 09:48:49'),
(14, 'Solo Leveling', 'Solo Leveling (? ??? ???, Na Honjaman Lebel-eob) is a story about the weakest hunter Sung Jin-Woo and his quest to become the strongest, S-Rank hunter. ... The series started as an unpublished novel in February 14, 2014 which ended originally with 14 volumes and 270 chapters.', 'https://wallpapercave.com/wp/wp4275387.jpg', '2019-08-24', 10, 1, '2019-08-25 18:39:22', '2019-08-25 18:39:22');

-- --------------------------------------------------------

--
-- Stand-in structure for view `books_list`
-- (See below for the actual view)
--
CREATE TABLE `books_list` (
`id_book` int(11)
,`title` varchar(50)
,`description` text
,`image` varchar(250)
,`date_released` date
,`id_genre` int(11)
,`genre` varchar(20)
,`id_status` int(11)
,`availability` varchar(20)
);

-- --------------------------------------------------------

--
-- Table structure for table `genre`
--

CREATE TABLE `genre` (
  `id_genre` int(11) NOT NULL,
  `name` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `genre`
--

INSERT INTO `genre` (`id_genre`, `name`) VALUES
(1, 'Teenlit'),
(2, 'Shounen'),
(3, 'Komedi'),
(4, 'Romance'),
(5, 'Adventure'),
(6, 'Fiksi'),
(7, 'History'),
(9, 'Horror'),
(10, 'Action');

-- --------------------------------------------------------

--
-- Table structure for table `status`
--

CREATE TABLE `status` (
  `id_status` int(11) NOT NULL,
  `availability` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `status`
--

INSERT INTO `status` (`id_status`, `availability`) VALUES
(1, 'available'),
(2, 'not available');

-- --------------------------------------------------------

--
-- Table structure for table `transaction`
--

CREATE TABLE `transaction` (
  `id` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `id_book` int(11) NOT NULL,
  `rent_at` datetime DEFAULT NULL,
  `return_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Triggers `transaction`
--
DELIMITER $$
CREATE TRIGGER `rent_book` AFTER INSERT ON `transaction` FOR EACH ROW UPDATE books
SET
id_status = 2
WHERE id_book = NEW.id_book
$$
DELIMITER ;
DELIMITER $$
CREATE TRIGGER `return_book` AFTER UPDATE ON `transaction` FOR EACH ROW UPDATE books
SET
id_status = 1
WHERE id_book = NEW.id_book
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id_user` int(11) NOT NULL,
  `username` varchar(20) NOT NULL,
  `full_name` varchar(50) NOT NULL,
  `email` varchar(30) NOT NULL,
  `password` varchar(100) NOT NULL,
  `level` varchar(20) NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id_user`, `username`, `full_name`, `email`, `password`, `level`, `created_at`, `updated_at`) VALUES
(1, 'J-Blue', 'Najibullah Rizqy F', 'najibrizqy@gmail.com', '70fb3cd9ab6206b042ea5afea1d242eb83c3deec', 'admin', '2019-08-19 20:23:24', '2019-08-19 20:23:24'),
(2, 'blue', 'Saitangos', 'blue@gmail.com', '70fb3cd9ab6206b042ea5afea1d242eb83c3deec', 'user', '2019-08-23 23:25:21', '2019-08-23 23:25:21'),
(3, 'ndagel', 'ndagel gaming', 'ndagel@gmail.com', 'fefab5ccd734a8ca4fc61c96a3360c1e6aaca15f', 'user', '2019-08-23 23:35:51', '2019-08-23 23:35:51'),
(8, 'andi', 'andi mahendra', 'jblue@gmail.com', '70fb3cd9ab6206b042ea5afea1d242eb83c3deec', 'user', '2019-08-24 09:46:26', '2019-08-24 09:46:26');

-- --------------------------------------------------------

--
-- Structure for view `books_list`
--
DROP TABLE IF EXISTS `books_list`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `books_list`  AS  select `books`.`id_book` AS `id_book`,`books`.`title` AS `title`,`books`.`description` AS `description`,`books`.`image` AS `image`,`books`.`date_released` AS `date_released`,`books`.`id_genre` AS `id_genre`,`genre`.`name` AS `genre`,`status`.`id_status` AS `id_status`,`status`.`availability` AS `availability` from ((`books` join `genre` on(`books`.`id_genre` = `genre`.`id_genre`)) join `status` on(`books`.`id_status` = `status`.`id_status`)) ;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `books`
--
ALTER TABLE `books`
  ADD PRIMARY KEY (`id_book`),
  ADD KEY `id_genre` (`id_genre`),
  ADD KEY `id_status` (`id_status`);

--
-- Indexes for table `genre`
--
ALTER TABLE `genre`
  ADD PRIMARY KEY (`id_genre`);

--
-- Indexes for table `status`
--
ALTER TABLE `status`
  ADD PRIMARY KEY (`id_status`);

--
-- Indexes for table `transaction`
--
ALTER TABLE `transaction`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_book` (`id_book`),
  ADD KEY `id_user` (`id_user`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id_user`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `books`
--
ALTER TABLE `books`
  MODIFY `id_book` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- AUTO_INCREMENT for table `genre`
--
ALTER TABLE `genre`
  MODIFY `id_genre` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `status`
--
ALTER TABLE `status`
  MODIFY `id_status` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `transaction`
--
ALTER TABLE `transaction`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id_user` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `books`
--
ALTER TABLE `books`
  ADD CONSTRAINT `fk_genre` FOREIGN KEY (`id_genre`) REFERENCES `genre` (`id_genre`),
  ADD CONSTRAINT `fk_status` FOREIGN KEY (`id_status`) REFERENCES `status` (`id_status`);

--
-- Constraints for table `transaction`
--
ALTER TABLE `transaction`
  ADD CONSTRAINT `transaction_ibfk_1` FOREIGN KEY (`id_book`) REFERENCES `books` (`id_book`),
  ADD CONSTRAINT `transaction_ibfk_2` FOREIGN KEY (`id_user`) REFERENCES `users` (`id_user`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
