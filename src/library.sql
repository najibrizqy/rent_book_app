-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 23, 2019 at 10:27 PM
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
(1, 'Laskar Pelangi', 'Laskar Pelangi (English: The Rainbow Troops) is a 2008 Indonesian film adapted from the popular Laskar Pelangi (novel) by Andrea Hirata. The movie follows a group of 10 schoolchildren and their two inspirational teachers as they struggle with poverty and develop hopes for the future in Gantong Village on the farming and tin mining island of Belitung off the east coast of Sumatra. The film is one of the highest grossing in Indonesian box office history[1] and won a number of local and international awards', 'https://live.staticflickr.com/3470/3383897743_0c0207ea80_b.jpg', '2019-08-01', 1, 1, '2019-08-12 22:28:27', '2019-08-12 22:45:20'),
(2, 'Solo Leveling', 'Solo Leveling (Na Honjaman Lebel-eob) is a story about the weakest hunter Sung Jin-Woo and his quest to become the strongest, S-Rank hunter.', 'https://wallpapercave.com/wp/wp4275387.jpg', '2017-08-01', 2, 1, '2019-08-12 20:13:26', '2019-08-12 22:43:19'),
(3, 'Aroma Karsa', 'Dalam Aroma Karsa, Dee Lestari menjahit dengan apik segala fakta-fakta ilmiah menjadi fiksi. Buku 700 halaman ini bagai sebuah paket lengkap yang membungkus kisah romansa, petualangan, pencarian jati diri, fantasi, detektif, bahkan mitologi. Buku ini masih setia bertengger di jajaran best seller di bulan November lalu.', 'https://bukuprogresif.com/wp-content/uploads/2019/03/aroma-karsa.jpg', '2018-03-12', 6, 1, '2019-08-13 12:47:08', '2019-08-13 12:47:08'),
(5, 'Rentang Kisah', 'Di posisi buncit ada novel karya Youtuber cantik, Gita Savitri. Sejak peluncurannya pada September 2017 lalu, novel Rentang Kisah langsung laris diburu. Kabarnya, hingga kini debut penulisan perdana Gitasav ini telah memasuki cetakan ke-9 dan akan sudah dilirik untuk diangkat ke layar lebar.', 'https://ecs7.tokopedia.net/img/cache/700/product-1/2018/8/24/29278570/29278570_13740365-2cba-485f-ae40-5b123c958fc1_738_1060.jpg', '2017-03-12', 5, 1, '2019-08-16 16:03:29', '2019-08-16 16:03:29'),
(6, 'Dia Adalah Kakakku', 'Dia Adalah Kakakku mengisahkan perjuangan seorang Laisa, yang berkorban luar biasa demi adik-adiknya dapat bersekolah meski tidak sedarah dengannya. Dengan kondisi fisik Laisa yang sempat membuat keempat adiknya khawatir akibat tak kunjung mendapatkan jodoh.', 'https://assets-a1.kompasiana.com/items/album/2018/12/30/depan-5c28f0566ddcae4e90440b6d.jpg', '2017-04-12', 4, 1, '2019-08-16 16:04:37', '2019-08-16 16:04:37'),
(7, 'Kata', 'Kata, bercerita tentang Nugraha, Biru, dan Binta yang kian menjauh tanpa pernah menjelaskan perasaan satu sama lain. Mereka harus bicara dan mulai membuka hati, dan mengungkapkan isi hati agar persahabatan mereka sempurna kembali dari luka karena cinta.', 'https://www.gramedia.com/blog/content/images/2018/12/Kata-Rintik-Sedu-1.jpg', '2018-04-12', 4, 1, '2019-08-16 16:05:21', '2019-08-16 16:05:21'),
(8, 'Garis Waktu: Sebuah Perjalanan Menghapus Luka', 'Setelah Konspirasi Alam Semesta, Karya kedua dari Fiersa Besari yang berisikan kumpulan cerita yang saling berkaitan ini merupakan memoar hati yang dirangkai indah lengkap dengan rima yang menarik oleh si penulis yang juga seorang penyanyi ini. Dibuat seolah bermonolog, membuat kisah di dalamnya memiliki daya tarik tersendiri.', 'https://i2.wp.com/bukubabad.com/wp-content/uploads/2018/12/Garis-Waktu-1.jpg?fit=600%2C600', '2019-04-12', 5, 1, '2019-08-16 16:06:21', '2019-08-16 16:06:21'),
(9, 'Kids Zaman Neo', 'Sudah dapat bukunya? Pre-order buku Kids Zaman Neo sudah dimulai dari 1 hingga 5 November 2018 kemarin. Buku ini begitu seru untuk dibaca, karena Anodia Shula Neona Ayu atau Neona akan bercerita tentang awal mula dirinya terjun di dunia hiburan, passion, cita-cita, sampai menyanyi bersamanya. Dalam bukunya ini, Neona juga akan bercerita tentang beberapa rahasianya.', 'https://www.gramedia.com/blog/content/images/2018/12/Kids-Zaman-Neo.jpg', '2016-05-01', 1, 1, '2019-08-16 16:07:17', '2019-08-16 16:07:17'),
(10, 'Bumi Manusia', 'Naskah Bumi Manusia dibuat ketika Pram diasingkan dan dipenjara di Pulau Buru. Naskah ini telah melewati masa-masa buruk bersama Pram mulai disembunyikan, dikubur, disita, hingga ditulis kembali. Kini, buku ini dielu-elukan sebagai karya sastra Indonesia terbesar dan mendapatkan 12 penghargaan internasional.', 'https://www.gramedia.com/blog/content/images/2018/12/Bumi-Manusia.jpg', '2017-05-05', 6, 1, '2019-08-16 16:12:30', '2019-08-16 16:12:30'),
(11, 'Berhenti di Kamu', 'Berawal dari cuitan di Twitter tentang jatuh bangun kisah cintanya, kini Gia Pratama yang berprofesi sebagai dokter mencurahkan kisahnya itu ke dalam sebuah buku yang diberi judul #Berhentidikamu.', 'https://www.gramedia.com/blog/content/images/2018/12/berhentidikamu.jpg', '2018-07-23', 4, 1, '2019-08-16 16:13:18', '2019-08-16 16:13:18'),
(12, 'One Punch Man', 'Botak botak botak botak botak botak botak botak botak botak botak botak botak botak botak botak botak botak botak botak botak botak botak ', 'https://static0.srcdn.com/wordpress/wp-content/uploads/2019/08/One-Punch-Man-Road-to-Hero-Key-Art.jpg', '2018-08-10', 3, 1, '2019-08-16 16:14:16', '2019-08-16 16:14:16'),
(13, 'ANAK SEMUA BANGSA', 'Lanjutan dari Bumi Manusia, novel Anak Semua Bangsa masih bercerita tentang Minke tapi lebih menceritakan tentang kondisi negara Indonesia di tahun 1898-1918. Semasa penjajahan Hindia Belanda, rakyat Indonesia mengalami penderitaan. Mereka ditindas, diteror, dan dipaksa untuk memberikan tanahnya kepada bangsa Belanda.', 'http://1.bp.blogspot.com/-rFfqpW7igG8/T_Y2mVCiyxI/AAAAAAAAAbA/wSOjRFpVJc4/s1600/anak+semua+bangsa.jpg', '2015-08-10', 7, 1, '2019-08-17 05:47:23', '2019-08-17 05:47:23'),
(14, 'Ronggeng Dukuh Paruk', 'Lanjutan dari Bumi Manusia, novel Anak Semua Bangsa masih bercerita tentang Minke tapi lebih menceritakan tentang kondisi negara Indonesia di tahun 1898-1918. Semasa penjajahan Hindia Belanda, rakyat Indonesia mengalami penderitaan. Mereka ditindas, diteror, dan dipaksa untuk memberikan tanahnya kepada bangsa Belanda.', 'https://scontent-cdg2-1.cdninstagram.com/vp/fe32b5d68524ea3b0c2b728932cc412d/5DBD0F14/t51.2885-15/e35/65272118_2129437803834218_1310656860483878727_n.jpg?_nc_ht=scontent-cdg2-1.cdninstagram.com&se=7&ig_cache_key=MjA3MTgzMzEwMDMzODE5ODk2MA%3D%3D.2', '2016-08-10', 6, 1, '2019-08-17 05:49:13', '2019-08-17 05:49:13'),
(15, 'Negeri 5 Menara', 'Novel Negeri 5 Menara merupakan roman karya Ahmad Fuadi yang pertama diterbitkan pada 2009. Novel ini juga diangkat dalam film berjudul yang sama pada pada 2011 dengan seting tempat salah satunya di Pondok Gontor Ponorogo', 'https://i1.wp.com/bukubiruku.com/wp-content/uploads/2016/11/negeri-5-menara.jpg?fit=550%2C400&ssl=1', '2009-08-10', 2, 1, '2019-08-17 05:50:30', '2019-08-17 05:50:30'),
(16, '5 CM', 'Menjadi buku terlaris di Gramedia Bookstore selama dua tahun berturut-turut, novel 5 Cm tentunya harus masuk dalam daftar novel Indonesia terbaik yang wajib dibaca. Novel yang ditulis oleh Donny Dhirgantoro ini menceritakan tentang kehidupan lima sahabat yang telah berteman selama tujuh tahun.', 'http://4.bp.blogspot.com/-eufkk6Oa-9U/VJMBf4FdG0I/AAAAAAAAABo/w7R8fVTsGVE/s1600/film-5-cm-5-sahabat-sutradara-rizal-mantovani.jpg', '2010-08-10', 2, 1, '2019-08-17 05:51:13', '2019-08-17 05:51:13'),
(17, 'Sang Pemimpi', 'Sang Pemimpi merupakan biku kedua dari tetralogi Laskar Pelangi, novel Sang Pemimpi menceritakan tentang hubungan persahabatan Ikal dan Arai serta kekuatan mimpi mereka untuk bisa menuntut ilmu di Perancis.', 'https://ecs7.tokopedia.net/img/cache/700/product-1/2016/5/26/9514068/9514068_9568af77-32c3-42af-a2ac-fddd4b766f9a.jpg', '2011-11-11', 2, 1, '2019-08-17 06:54:19', '2019-08-17 06:54:19'),
(18, 'Muhammad: Lelaki Penggenggam Hujan', 'Sebuah novel biografi berjudul Muhammad: Lelaki Penggenggam Hujan mengisahkan tentang kisah Nabi Muhammad SAW beserta para sahabatnya. Oleh Tasaro kamu akan dibawa untuk membayangkan kehidupan saat Rasulullah menyebarkan Islam.', 'https://i0.wp.com/4.bp.blogspot.com/-W_PqcHUBx1o/UVJZcXdb3qI/AAAAAAAAASo/NieFyNECqK4/s1600/muhammadS', '2012-11-11', 6, 1, '2019-08-17 06:55:33', '2019-08-17 06:55:33'),
(19, 'Arus Balik', 'Novel Arus Balik merupakan sebuah buku sejarah yang mengisahkan tentang keadaan negara Indonesia pasca runtuhnya kerajaan Majapahit. Gaya bahasa yang digunakan oleh Pramoedya membuat kita akan mudah mengetahui pola pikir, kebudayaan, perjuangan masyarakat Nusantara saat itu.', 'https://media.karousell.com/media/photos/products/2019/05/12/bapau_arus_balik_1557618492_0e3ba09f_progressive.jpg', '2013-08-11', 7, 1, '2019-08-17 06:56:33', '2019-08-19 06:21:04'),
(20, 'Soul Land 2', 'Sebuah pulau dengan sihir keluar, dou-qi, seni bela diri, tapi memiliki roh esensi. Ini adalah benua tempur 10 000 tahun setelah pembentukan Tang Sect. Seorang pahlawan baru dan temannya berjalan tanah, baru \"Tujuh Monster dari Shrek\", akan mereka menjaga nama Tang Sekte? Atau akan runtuh karena sistem esensi baru?', 'https://wallpapercave.com/wp/wp4099483.jpg', '2018-02-01', 10, 1, NULL, NULL),
(28, 'Boruto', 'Boruto: Naruto Next Generations is a Japanese manga series written by Uky? Kodachi and illustrated by Mikio Ikemoto. It was serialised monthly in Shueisha\'s sh?nen manga magazine Weekly Sh?nen Jump since May 2016 until it was transferred to Shueisha\'s monthly magazine V Jump in July 2019', 'https://dimwhp0w2rs83.cloudfront.net/2017/02/Serial-Anime-Boruto-2.jpg', '2019-08-24', 10, 1, '2019-08-24 01:38:07', '2019-08-24 01:38:07');

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
,`genre` varchar(20)
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
(3, 'ndagel', 'ndagel gaming', 'ndagel@gmail.com', 'fefab5ccd734a8ca4fc61c96a3360c1e6aaca15f', 'user', '2019-08-23 23:35:51', '2019-08-23 23:35:51');

-- --------------------------------------------------------

--
-- Structure for view `books_list`
--
DROP TABLE IF EXISTS `books_list`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `books_list`  AS  select `books`.`id_book` AS `id_book`,`books`.`title` AS `title`,`books`.`description` AS `description`,`books`.`image` AS `image`,`books`.`date_released` AS `date_released`,`genre`.`name` AS `genre`,`status`.`availability` AS `availability` from ((`books` join `genre` on(`books`.`id_genre` = `genre`.`id_genre`)) join `status` on(`books`.`id_status` = `status`.`id_status`)) ;

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
  MODIFY `id_book` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

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
  MODIFY `id_user` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

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
