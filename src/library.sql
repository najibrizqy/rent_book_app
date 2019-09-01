-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 01, 2019 at 05:19 PM
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
(1, 'Kata', 'Kata, bercerita tentang Nugraha, Biru, dan Binta yang kian menjauh tanpa pernah menjelaskan perasaan satu sama lain. Mereka harus bicara dan mulai membuka hati, dan mengungkapkan isi hati agar persahabatan mereka sempurna kembali dari luka karena cinta.', 'https://www.gramedia.com/blog/content/images/2018/12/Kata-Rintik-Sedu-1.jpg', '2018-04-12', 4, 1, '2019-08-16 16:05:21', '2019-08-29 14:17:10'),
(2, 'Garis Waktu: Sebuah Perjalanan Menghapus Luka', 'Setelah Konspirasi Alam Semesta, Karya kedua dari Fiersa Besari yang berisikan kumpulan cerita yang saling berkaitan ini merupakan memoar hati yang dirangkai indah lengkap dengan rima yang menarik oleh si penulis yang juga seorang penyanyi ini. Dibuat seolah bermonolog, membuat kisah di dalamnya memiliki daya tarik tersendiri.', 'https://i2.wp.com/bukubabad.com/wp-content/uploads/2018/12/Garis-Waktu-1.jpg?fit=600%2C600', '2019-04-12', 5, 1, '2019-08-16 16:06:21', '2019-08-16 16:06:21'),
(5, 'One Punch Man', 'Botak botak botak botak botak botak botak botak botak botak botak botak botak botak botak botak botak botak botak botak botak botak botak ', 'https://static0.srcdn.com/wordpress/wp-content/uploads/2019/08/One-Punch-Man-Road-to-Hero-Key-Art.jpg', '2018-08-10', 3, 1, '2019-08-16 16:14:16', '2019-08-16 16:14:16'),
(6, 'ANAK SEMUA BANGSA', 'Lanjutan dari Bumi Manusia, novel Anak Semua Bangsa masih bercerita tentang Minke tapi lebih menceritakan tentang kondisi negara Indonesia di tahun 1898-1918. Semasa penjajahan Hindia Belanda, rakyat Indonesia mengalami penderitaan. Mereka ditindas, diteror, dan dipaksa untuk memberikan tanahnya kepada bangsa Belanda.', 'http://1.bp.blogspot.com/-rFfqpW7igG8/T_Y2mVCiyxI/AAAAAAAAAbA/wSOjRFpVJc4/s1600/anak+semua+bangsa.jpg', '2015-08-10', 7, 1, '2019-08-17 05:47:23', '2019-08-17 05:47:23'),
(7, 'Ronggeng Dukuh Paruk', 'Lanjutan dari Bumi Manusia, novel Anak Semua Bangsa masih bercerita tentang Minke tapi lebih menceritakan tentang kondisi negara Indonesia di tahun 1898-1918. Semasa penjajahan Hindia Belanda, rakyat Indonesia mengalami penderitaan. Mereka ditindas, diteror, dan dipaksa untuk memberikan tanahnya kepada bangsa Belanda.', 'https://scontent-cdg2-1.cdninstagram.com/vp/fe32b5d68524ea3b0c2b728932cc412d/5DBD0F14/t51.2885-15/e35/65272118_2129437803834218_1310656860483878727_n.jpg?_nc_ht=scontent-cdg2-1.cdninstagram.com&se=7&ig_cache_key=MjA3MTgzMzEwMDMzODE5ODk2MA%3D%3D.2', '2016-08-10', 6, 2, '2019-08-17 05:49:13', '2019-08-17 05:49:13'),
(8, '5 CM', 'Menjadi buku terlaris di Gramedia Bookstore selama dua tahun berturut-turut, novel 5 Cm tentunya harus masuk dalam daftar novel Indonesia terbaik yang wajib dibaca. Novel yang ditulis oleh Donny Dhirgantoro ini menceritakan tentang kehidupan lima sahabat yang telah berteman selama tujuh tahun.', 'http://4.bp.blogspot.com/-eufkk6Oa-9U/VJMBf4FdG0I/AAAAAAAAABo/w7R8fVTsGVE/s1600/film-5-cm-5-sahabat-sutradara-rizal-mantovani.jpg', '2010-08-10', 2, 1, '2019-08-17 05:51:13', '2019-08-17 05:51:13'),
(9, 'Sang Pemimpi', 'Sang Pemimpi merupakan biku kedua dari tetralogi Laskar Pelangi, novel Sang Pemimpi menceritakan tentang hubungan persahabatan Ikal dan Arai serta kekuatan mimpi mereka untuk bisa menuntut ilmu di Perancis.', 'https://ecs7.tokopedia.net/img/cache/700/product-1/2016/5/26/9514068/9514068_9568af77-32c3-42af-a2ac-fddd4b766f9a.jpg', '2011-11-11', 2, 2, '2019-08-17 06:54:19', '2019-08-17 06:54:19'),
(11, 'Boruto', 'Boruto: Naruto Next Generations is a Japanese manga series written by Uky? Kodachi and illustrated by Mikio Ikemoto. It was serialised monthly in Shueisha\'s sh?nen manga magazine Weekly Sh?nen Jump since May 2016 until it was transferred to Shueisha\'s monthly magazine V Jump in July 2019', 'https://images.alphacoders.com/821/thumb-1920-821092.png', '2019-08-23', 6, 1, '2019-08-24 01:38:07', '2019-08-30 20:34:16'),
(12, 'Laskar Pelangi', 'Laskar Pelangi (English: The Rainbow Troops) is a 2008 Indonesian film adapted from the popular Laskar Pelangi (novel) by Andrea Hirata. The movie follows a group of 10 schoolchildren and their two inspirational teachers as they struggle with poverty and develop hopes for the future in Gantong Village on the farming and tin mining island of Belitung off the east coast of Sumatra. The film is one of the highest grossing in Indonesian box office history[1] and won a number of local and international awards.', 'https://media.karousell.com/media/photos/products/2018/05/17/laskar_pelangi_1526550002_321de5c5.jpg', '2019-08-01', 2, 2, '2019-08-24 06:38:42', '2019-08-24 06:38:42'),
(13, 'Negeri 5 menara', 'Negeri 5 Menara adalah sebuah film garapan Kompas Gramedia production bersama Million Pictures yang merupakan adaptasi dari novel karya Ahmad Fuadi berjudul Negeri 5 Menara. Skenario ditulis oleh Salman Aristo yang juga penulis naskah film Ayat-Ayat Cinta, Laskar Pelangi, Sang Penari . Disutradarai oleh Affandi Abdul Rachman film ini mengambil lokasi syuting di Pondok Modern Darussalam Gontor Ponorogo Jawa Timur, Sumatra Barat, Bandung, hingga London. Film ini dirilis pada 1 Maret 2012.', 'https://cdn.medcom.id/images/content/2019/05/03/1017155/znLTZOchBy.jpg', '2019-08-01', 7, 1, '2019-08-24 09:48:49', '2019-08-30 09:56:44'),
(14, 'Solo Leveling', 'Solo Leveling (Na Honjaman Lebel-eob) is a story about the weakest hunter Sung Jin-Woo and his quest to become the strongest, S-Rank hunter. ... The series started as an unpublished novel in February 14, 2014 which ended originally with 14 volumes and 270 chapters.', 'https://wallpapercave.com/wp/wp4275387.jpg', '2019-08-17', 10, 1, '2019-08-25 18:39:22', '2019-09-01 07:59:40'),
(15, 'Sword Art Online 4: Fairy Dance', 'Kirito plunges into a suspicious new VRMMORPG called ALfheim Online to rescue Asuna, who never returned from Sword Art Online. ALO offers many features to entertain players in the wake of SAO: ultra-high-end graphics, action-heavy gameplay, a choice of fairy races, and a next-generation flight engine. Playing as a spriggan, Kirito heads for the location of Asuna\'s prison--the top of the World Tree, the final destination of every player in the game! Along the way, Kirito nearly falls to a plot hatched by the enemy salamanders, just barely surviving the ordeal with the help of a sylph named Leafa and his Navigation Pixie, Yui.', 'https://images-na.ssl-images-amazon.com/images/S/cmx-images-prod/Item/453774/453774._SX1280_QL80_TTD_.jpg', '2019-08-28', 5, 1, '2019-08-28 09:24:08', '2019-08-29 15:44:23'),
(16, 'One Piece', 'One Piece (Japanese: Hepburn: Wan P?su) is a Japanese manga series written and illustrated by Eiichiro Oda. It has been serialized in Shueisha\'s Weekly Shnen Jump magazine since July 22, 1997, and has been collected into 93 tankbon volumes.', 'https://i.pinimg.com/originals/93/b3/4d/93b34d92a76eb52f4f0d0bc43ebdff43.jpg', '2019-08-24', 3, 1, '2019-08-28 09:41:41', '2019-08-30 13:21:09'),
(20, 'Sword Art Online 4: Oridinal Scale', 'The film takes place after the anime series\' second season, Sword Art Online II. It was then revealed at the Dengeki Bunko Haru no Saiten 2016 event on March 13, 2016 that the film is titled Sword Art Online The Movie: Ordinal Scale.', 'https://www.rightstufanime.com/images/productImages/816546020859_anime-sword-art-online-the-movie-ordinal-scale-dvd-primary.jpg', '2019-08-25', 5, 1, '2019-08-29 15:55:23', '2019-09-01 17:17:42'),
(21, 'Kisah Tanah Jawa', 'Pulau Jawa sebagai pulau terpadat di Indonesia pun tentunya memiliki banyak kisah mistis. Hal inilah yang diulas dalam buku KISAH TANAH JAWA', 'https://ecs7.tokopedia.net/img/cache/700/product-1/2019/1/19/39285001/39285001_6814d366-e245-4a90-a117-403305d722d0_700_1000.jpg', '2019-08-08', 9, 1, '2019-08-29 15:57:38', '2019-08-29 15:57:38'),
(22, 'Sebuah Seni Untuk Bersikap Bodo Amat ', 'Buku Sebuah Seni Untuk Bersikap Bodo Amat ini merupakan buku pertama dari penulis blogger New York bernama Mark Manson, yang disadur/diterjemahkan ke dalam bahasa indonesia tahun 2018 ini, setelah sukses dengan versi Inggris nya dengan judul “The Subtle Art of Not Giving a F*ck” (terbit 2016). Buku ini ber-genre buku pengembangan diri (self-improvement) dan dinobatkan sebagai buku terlaris versi New York Times dan Globe and Mail. jelas sekali penggunaan kata kata yang nyeleneh pada buku ini tidak disarankan untuk umur dibawah 17 tahun. Saya sendiri kadang harus mengulang membaca 1–2 kalimat untuk mengerti pesan yang akan disampaikan, tetapi untungnya, Mark cukup banyak memberikan contoh kasus dalam setiap pembahasan penting, sehingga memberikan pencerahan bagi pembacanya.', 'https://ecs7.tokopedia.net/img/product-1/2018/12/9/7960567/7960567_3a62d6ae-23e7-4c0f-8e48-17ec1ed71d13_2048_2623.jpg', '2019-05-01', 6, 2, '2019-08-29 16:09:23', '2019-08-29 16:09:23'),
(25, 'Bungo Stray Dogs', 'Doppo Kunikida is an idealist and a straitlaced detective at the Armed Detective Agency, an organization that takes on dangerous jobs even the police won\'t handle. Everything in his life is going just as he\'s planned...until one day, he\'s paired up with the agency\'s newest hire: a suspicious, eccentric, suicide-obsessed man named Osamu Dazai. Their first case together turns out to be far more complicated than Kunikida anticipated -- and it looks like the detective agency\'s sworn enemy, the Port Mafia, is somehow involved, too!', 'https://yenpress-us.imgix.net/covers/9781975303228.JPG?auto=format&w=1500', '2019-08-19', 11, 1, '2019-08-30 10:16:44', '2019-08-30 10:20:09'),
(26, 'Overlord', 'After undergoing an intense interrogation, Sebas is faced with two choices-to maintain his loyalty to his master or stay by Tsuare. Which path will the butler choose?', 'https://yenpress-us.imgix.net/covers/9781975332303.JPG?auto=format&w=1500', '2019-07-29', 11, 1, '2019-08-30 10:23:59', '2019-08-30 10:23:59'),
(27, 'Sword Art Online 1: Aincrad', 'In the year 2022, gamers rejoice as Sword Art Online - a VRMMORPG (Virtual Reality Massively Multiplayer Online Role Playing Game) like no other - debuts, allowing players to take full advantage of the ultimate in gaming technology: NerveGear, a system that allows users to completely immerse themselves in a wholly realistic gaming experience. But when the game goes live, the elation of the players quickly turns to horror as they discover that, for all its amazing features, SAO is missing one of the most basic functions of any MMORPG - a log-out button. Now trapped in the virtual world of Aincrad, their bodies held captive by NerveGear in the real world, users are issued a chilling ultimatum: conquer all one hundred floors of Aincrad to regain your freedom. ', 'https://yenpress-us.imgix.net/covers/9780316371247.JPG?auto=format&w=1500', '2019-04-22', 6, 1, '2019-08-30 10:27:28', '2019-08-30 10:27:28'),
(28, 'Sword Art Online: Phantom Bullet', 'With the prelims over, it\'s time to head into the main event-the Bullet of Bullets tournament! But this fun free-for-all has turned into an IRL death match when a member of SAO\'s Laughing Coffin raises the stakes. Can Sinon and Kirito figure out who Death Gun is before it\'s too late?!', 'https://yenpress-us.imgix.net/covers/9780316439749.JPG?auto=format&w=1500', '2019-08-01', 6, 1, '2019-08-30 10:28:11', '2019-08-30 10:28:11'),
(29, ' Harry Potter And The Cursed Child', 'Siapa yang tidak tahu novel serial Harry Potter? Novel karya J.K. Rowling ini sudah mendunia dan diterjemahkan ke berbagai bahasa. Serial Harry Potter mengisahkan seorang penyihir cilik bernama Harry Potter. Di novel ini diceritakan saat awal bersekolah di akademi sihir Hogwarts, ia adalah seorang anak dengan kemampuan biasa. Namun keberaniannya membuat ia menjadi sosok penyihir cilik hebat yang akhirnya menyelamatkan banyak orang dari para penyihir jahat. Novel ini sudah diangkat ke layar lebar dan selalu ramai ditonton oleh para penggemarnya dari segala usia.', 'https://s2.bukalapak.com/img/2255969451/w-1500/Harry_Potter_And_The_Cursed_Child__Parts_One_And_Two____Pape.jpg.webp', '2014-08-29', 6, 1, '2019-08-30 13:48:48', '2019-08-30 13:49:13'),
(31, 'The Hobbit', 'The Hobbit juga merupakan novel fantasi karangan J.R.R. Tolkien yang dipublikasikan sebelum The Lord of the Rings. Novel ini menceritakan kisah Bilbo Baggins, seorang hobbit yang awalnya memiliki kehidupan damai dan tenang. Kemudian datanglah seorang penyihir bernama Gandalf dan 13 kurcaci dalam sebuah petualangan untuk merebut kembali harta curian. Kedatangan mereka membuat kehidupan Bilbo berubah 180 derajat. Ia ikut dalam perjalanan yang penuh bahaya dan bertemu dengan seekor naga paling ditakuti yang menjadi penjaga harta tersebut. Berbagai unsur di dalamnya membuat karya ini disebut oleh The Times of London sebagai karya literatur yang mendekati kesempurnaan.', 'https://s3-ap-southeast-1.amazonaws.com/asset1.gotomalls.com/uploads/media/images/article/M44_Kct5IMcSJSMX/article_content_image/img-M44_Kct5IMcSJSMX-d-med-15488383977057.jpg', '2016-03-28', 6, 1, '2019-08-30 13:52:29', '2019-08-30 13:52:29'),
(32, 'The Little Prince', 'Le Petit Prince adalah novel dari Prancis yang sudah diterjemahkan ke berbagai bahasa di seluruh dunia. Novel ini mengisahkan seorang pangeran kecil yang meninggalkan planet kecilnya yang aman untuk menempuh perjalanan menjelajahi alam semesta. Sendiri dalam petualangannya, sang pangeran mempelajari keanehan perilaku orang dewasa melalui serangkaian pertemuan yang lucu, unik, dan fantastis. Le Petit Prince ingin menggambarkan cara pandang yang sangat berbeda antara anak kecil dan orang dewasa. Ada banyak pesan dan makna tersembunyi yang ingin disampaikan oleh sang penulis kepada pembaca. Tak heran kalau novel ini sangat laris dan menjadi buku dari Prancis yang paling banyak diterjemahkan.', 'https://s3-ap-southeast-1.amazonaws.com/asset1.gotomalls.com/uploads/media/images/article/M44_Kct5IMcSJSMX/article_content_image/img-M44_Kct5IMcSJSMX-d-med-1548838397927.jpg', '2017-04-05', 6, 1, '2019-08-30 13:53:14', '2019-08-30 13:53:14'),
(33, 'Dream of the Red Chamber', 'Dream of the Red Chamber adalah novel Cina yang diterbitkan pada abad ke-18. Selama lebih dari setengah abad, novel ini telah diakui sebagai salah satu karya sastra Cina terbesar. Novel ini menggambarkan kisah tentang cerita Romeo dan Juliet ala Cina yang menggambarkan salah satu peradaban terbesar dunia. Terdapat unsur romansa, drama, dan budaya yang sangat kental di dalamnya. Perpaduan ketiganya menjalin sebuah cerita yang mampu mengaduk emosi pembacanya dan disebut sebagai salah satu cerita cinta paling romantis di dunia.', 'https://s3-ap-southeast-1.amazonaws.com/asset1.gotomalls.com/uploads/media/images/article/M44_Kct5IMcSJSMX/article_content_image/img-M44_Kct5IMcSJSMX-d-med-15488383981372.jpg', '2010-09-23', 2, 1, '2019-08-30 13:54:13', '2019-08-30 13:54:13'),
(34, 'And Then There Were None', 'Agatha Christie merupakan novelis misteri yang sudah terkenal di seluruh dunia. Karyanya yang berjudul And Then There Were None menjadi salah satu novel terlaris di dunia. Sama seperti novel karangannya yang lain, novel ini disajikan dengan sangat cerdas dan membuat pembacanya berpikir. Novel ini berkisah tentang 10 orang yang diundang ke sebuah rumah mewah di Pulau Negro oleh tuan rumah yang misterius. Masing-masing dari para tamu memiliki masa lalu yang kelam dan rahasia yang mereka sembunyikan. Secara misterius, satu per satu tamu undangan tersebut mati sesuai dengan lagu anak-anak yang berjudul Ten Little Indian. Masa lalu dan rahasia dari masing-masing tamu pun mulai terkuak. Novel ini cocok untuk kamu yang menyukai kisah misteri yang menegangkan.', 'https://s3-ap-southeast-1.amazonaws.com/asset1.gotomalls.com/uploads/media/images/article/M44_Kct5IMcSJSMX/article_content_image/img-M44_Kct5IMcSJSMX-d-med-15488383983448.jpg', '2012-02-23', 6, 1, '2019-08-30 13:55:08', '2019-08-30 13:55:08'),
(35, 'She: A History of the Adventure', 'Pertama kali dirilis pada 1887, She: A History of the Adventure mengisahkan tentang Afrika dan legenda kuno. Sang penulis menulis novel ini berdasarkan pengetahuannya tentang kedua hal tersebut. Ia mengungkapkan kisah tentang Aisyah, ratu dari suku Afrika Tengah yang misterius dan konon memiliki kemampuan untuk hidup abadi. Sang ratu adalah perwujudan dari sosok perempuan yang sangat cantik dan bisa menjadi seseorang yang lebih mematikan daripada laki-laki. Novel ini dianggap sebagai salah satu perintis novel bergenre Lost World, yaitu sebuah dunia misterius yang hilang dari peradaban modern.', 'https://s3-ap-southeast-1.amazonaws.com/asset1.gotomalls.com/uploads/media/images/article/M44_Kct5IMcSJSMX/article_content_image/img-M44_Kct5IMcSJSMX-d-med-15488383987323.jpg', '2018-12-20', 5, 1, '2019-08-30 13:55:46', '2019-08-30 13:55:46'),
(36, 'Soul Land IV', 'Mengikuti dengan Binatang Buas Roh dan Guru Jiwa yang hampir punah. Kekuatan bersama dan pengarsipan perdamaian. 10.000 tahun telah berlalu sejak akhir pertempuran pesawat Douluo dengan pesawat Abyss. Energi berlimpah dari Abyss membuka pintu bagi para penguasa jiwa dan makhluk buas di pesawat Douluo untuk mencapai pengetahuan, kekuatan, dan jajaran yang dulunya mustahil untuk dicapai. Manusia-manusia Douluo Plane menaklukkan ruang dan menemukan pesawat-pesawat lain.', 'https://komikcast.com/wp-content/uploads/2019/05/32454kdfjsakldfjsad-e1565626700196.jpg', '2019-03-23', 2, 1, '2019-08-30 22:16:14', '2019-08-30 22:16:14'),
(38, 'The Lord of the Rings', 'Trilogi The Lord of the Rings diterbitkan pertama kali tahun 1954 dan menjadi salah satu karya sastra yang paling banyak dibaca dan berpengaruh sepanjang masa. Novel ini menceritakan petualangan penyihir Gandalf dan seorang hobbit muda bernama Frodo Baggins. Mereka melakukan perjalanan sangat berbahaya untuk menghancurkan sebuah cincin misterius. Cincin tersebut merupakan senjata ampuh yang dimiliki oleh pangeran kegelapan bernama Sauron. Dengan kekuatan cincin tersebut, ia berencana untuk menghancurkan dunia. Satu-satunya cara untuk mencegah hal tersebut terjadi adalah mengembalikan cincin itu ke Mordor. The Lord of the Rings juga sudah diangkat ke layar lebar dengan efek-efek yang akan membuat para penontonnya terpukau.', 'https://s3-ap-southeast-1.amazonaws.com/asset1.gotomalls.com/uploads/media/images/article/M44_Kct5IMcSJSMX/article_content_image/img-M44_Kct5IMcSJSMX-d-med-15488383972827.jpg', '2019-08-31', 6, 1, '2019-08-31 14:39:48', '2019-08-31 14:39:48');

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
(10, 'Action'),
(11, 'Fantasy');

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
(1, 'Available'),
(2, 'Not Available');

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
-- Dumping data for table `transaction`
--

INSERT INTO `transaction` (`id`, `id_user`, `id_book`, `rent_at`, `return_at`) VALUES
(1, 1, 2, '2019-08-28 13:25:00', '2019-08-31 08:30:44'),
(2, 8, 1, '2019-08-30 23:09:24', '2019-08-31 08:26:57'),
(3, 8, 5, '2019-08-31 00:09:09', '2019-08-31 08:48:42'),
(4, 8, 11, '2019-08-31 00:09:58', '2019-08-31 09:46:15'),
(5, 8, 22, '2019-08-31 00:30:23', NULL),
(6, 8, 16, '2019-08-31 00:30:59', '2019-08-31 14:42:04'),
(7, 3, 20, '2019-08-31 00:34:44', '2019-08-31 10:34:31'),
(8, 3, 9, '2019-08-31 00:37:08', NULL),
(9, 8, 10, '2019-08-31 00:38:19', '2019-08-31 20:37:56'),
(10, 8, 12, '2019-08-31 00:39:03', NULL),
(11, 8, 6, '2019-08-31 00:40:02', '2019-08-31 14:42:18'),
(12, 8, 7, '2019-08-31 00:40:55', NULL),
(13, 8, 1, '2019-08-31 08:32:40', '2019-08-31 08:36:12'),
(14, 3, 1, '2019-08-31 08:36:26', '2019-08-31 08:48:33'),
(15, 8, 2, '2019-08-31 08:44:19', '2019-08-31 14:42:13'),
(16, 8, 20, '2019-08-31 12:26:51', '2019-08-31 12:27:06'),
(17, 3, 1, '2019-08-31 18:19:11', '2019-09-01 12:17:08'),
(18, 8, 2, '2019-08-31 18:19:57', '2019-08-31 18:19:58'),
(20, 8, 2, '2019-09-01 11:28:32', '2019-09-01 21:23:20'),
(21, 3, 20, '2019-09-01 11:28:42', '2019-09-01 11:35:00'),
(22, 2, 20, '2019-09-01 12:32:31', '2019-09-01 12:53:10'),
(23, 8, 20, '2019-09-01 15:53:03', '2019-09-01 16:06:34'),
(24, 2, 20, '2019-09-01 16:06:42', '2019-09-01 16:08:25'),
(25, 3, 20, '2019-09-01 16:08:33', '2019-09-01 16:09:23'),
(26, 8, 20, '2019-09-01 16:09:30', '2019-09-01 16:11:29'),
(27, 2, 20, '2019-09-01 16:11:35', '2019-09-01 16:23:01'),
(28, 10, 2, '2019-09-01 16:32:34', NULL),
(29, 10, 20, '2019-09-01 16:43:27', '2019-09-01 16:44:31'),
(30, 10, 20, '2019-09-01 21:09:16', '2019-09-01 21:24:29'),
(31, 10, 34, '2019-09-01 21:26:14', '2019-09-01 21:27:18'),
(32, 10, 20, '2019-09-01 21:27:37', '2019-09-01 21:27:41'),
(33, 10, 20, '2019-09-01 21:44:06', '2019-09-01 21:44:10');

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
(4, 'andi', 'andi mahendra', 'jblue@gmail.com', '70fb3cd9ab6206b042ea5afea1d242eb83c3deec', 'user', '2019-08-24 09:46:26', '2019-08-24 09:46:26'),
(7, 'manager', 'Najibullah Rizqy', 'manager@gmail.com', '70fb3cd9ab6206b042ea5afea1d242eb83c3deec', 'user', '2019-08-30 20:13:28', '2019-08-30 20:13:28'),
(8, 'dicky', 'dicky mahendra', 'dicky@gmail.com', 'aca7bb46e2a6d11a266f2260b66db5264241f6e9', 'user', '2019-08-30 20:27:40', '2019-08-30 20:27:40'),
(10, 'Ryu', 'ryuser', 'ryu@gmail.com', '67447ccdd9a4000d70d16b590b666046aa00c3c3', 'user', '2019-08-31 12:22:35', '2019-08-31 12:22:35');

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
  MODIFY `id_book` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=42;

--
-- AUTO_INCREMENT for table `genre`
--
ALTER TABLE `genre`
  MODIFY `id_genre` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `status`
--
ALTER TABLE `status`
  MODIFY `id_status` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `transaction`
--
ALTER TABLE `transaction`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id_user` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

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
  ADD CONSTRAINT `transaction_ibfk_2` FOREIGN KEY (`id_user`) REFERENCES `users` (`id_user`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
