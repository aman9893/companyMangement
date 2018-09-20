-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Sep 20, 2018 at 10:27 PM
-- Server version: 5.7.22-0ubuntu0.16.04.1
-- PHP Version: 7.0.30-0ubuntu0.16.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `nodejsTesting`
--

-- --------------------------------------------------------

--
-- Table structure for table `empolyee`
--

CREATE TABLE `empolyee` (
  `id` int(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `passward` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `empolyee`
--

INSERT INTO `empolyee` (`id`, `name`, `phone`, `passward`) VALUES
(2, 'akansha', '40415165621', '12345648'),
(3, 'raja', '662465544', '566556'),
(5, 'ram', '1662566', '12355'),
(10, 'aman', '12333', '133333');

-- --------------------------------------------------------

--
-- Table structure for table `emp_table`
--

CREATE TABLE `emp_table` (
  `emp_id` int(222) NOT NULL,
  `emp_name` varchar(222) NOT NULL,
  `emp_phone` varchar(222) NOT NULL,
  `emp_email` varchar(222) NOT NULL,
  `emp_position` varchar(222) NOT NULL,
  `emp_status` tinyint(1) NOT NULL,
  `start_at` varchar(255) NOT NULL,
  `out_time` varchar(122) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `emp_table`
--

INSERT INTO `emp_table` (`emp_id`, `emp_name`, `emp_phone`, `emp_email`, `emp_position`, `emp_status`, `start_at`, `out_time`) VALUES
(23, 'aman jain', '9806701954', 'aman@gmail.com', 'Developer3', 1, '2018-09-17T07:19:48.372Z', '2018-09-17T17:33:21.616Z'),
(24, 'Akansha', '7047236332', 'ak@gmail.com', 'Graphic Deveopler', 1, '2018-09-17 00:00:00', '2018-09-17T17:33:22.899Z'),
(25, 'Baljeet ', '986626551', 'Baljeet@gmail.com', 'Developer', 1, '2018-09-17T07:11:22.197Z', '2018-09-17T17:33:24.327Z');

-- --------------------------------------------------------

--
-- Table structure for table `emp_task`
--

CREATE TABLE `emp_task` (
  `task_id` int(222) NOT NULL,
  `task_name` varchar(222) NOT NULL,
  `task_details` varchar(222) NOT NULL,
  `task_time` varchar(222) NOT NULL,
  `status` varchar(222) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `emp_task`
--

INSERT INTO `emp_task` (`task_id`, `task_name`, `task_details`, `task_time`, `status`) VALUES
(1, 'new', 'hello', '12.00', 'true');

-- --------------------------------------------------------

--
-- Table structure for table `register`
--

CREATE TABLE `register` (
  `id` int(222) NOT NULL,
  `name` varchar(222) NOT NULL,
  `email` varchar(222) NOT NULL,
  `password` varchar(222) NOT NULL,
  `created_at` varchar(222) NOT NULL,
  `updated_at` varchar(222) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `register`
--

INSERT INTO `register` (`id`, `name`, `email`, `password`, `created_at`, `updated_at`) VALUES
(1, 'aman', 'aman@mail.com', '12345', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `created_at`, `updated_at`) VALUES
(8, 'aman', 'aman9893jian@gmail.com', '1223333', '2018-09-01 16:45:37', '2018-09-01 16:45:37'),
(9, 'aman123', 'aman9893jian@gmail.comm', '1223333', '2018-09-01 16:52:18', '2018-09-01 16:52:18'),
(10, 'swded', 'deded', 'ededed', '2018-09-01 17:01:29', '2018-09-01 17:01:29'),
(11, 'aman', 'aman@gmail.com', '123456', '2018-09-03 11:49:05', '2018-09-03 11:49:05'),
(12, 'aman', ' aman@.com', '123456', '2018-09-03 12:13:43', '2018-09-03 12:13:43'),
(13, 'aanand', 'a@gmail.com', '123', '2018-09-11 14:57:05', '2018-09-11 14:57:05'),
(14, 'baljeet', 'baljeet@gmail.com', '12345', '2018-09-13 15:04:15', '2018-09-13 15:04:15'),
(15, 'nare', 'n@gmail.com', '1234', '2018-09-15 10:48:38', '2018-09-15 10:48:38'),
(16, 'dcdfrfr', 'n@gmail.com', '1', '2018-09-15 10:49:29', '2018-09-15 10:49:29');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `empolyee`
--
ALTER TABLE `empolyee`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `emp_table`
--
ALTER TABLE `emp_table`
  ADD PRIMARY KEY (`emp_id`);

--
-- Indexes for table `register`
--
ALTER TABLE `register`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `empolyee`
--
ALTER TABLE `empolyee`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
--
-- AUTO_INCREMENT for table `emp_table`
--
ALTER TABLE `emp_table`
  MODIFY `emp_id` int(222) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;
--
-- AUTO_INCREMENT for table `register`
--
ALTER TABLE `register`
  MODIFY `id` int(222) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
