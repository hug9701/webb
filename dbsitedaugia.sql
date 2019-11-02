-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1:3306
-- Thời gian đã tạo: Th6 11, 2018 lúc 09:58 PM
-- Phiên bản máy phục vụ: 5.7.19
-- Phiên bản PHP: 5.6.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `dbsitedaugia`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `catergory`
--

DROP TABLE IF EXISTS `catergory`;
CREATE TABLE IF NOT EXISTS `catergory` (
  `Id` varchar(10) NOT NULL,
  `catergoryname` varchar(50) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Đang đổ dữ liệu cho bảng `catergory`
--

INSERT INTO `catergory` (`Id`, `catergoryname`) VALUES
('CMX0000001', 'Smart Phone'),
('CMX0000002', 'Laptop'),
('CMX0000003', 'Other'),
('CMX0000004', 'Car'),
('CMX0000005', 'SoftWave'),
('CMX0000006', 'Television'),
('CMX0000007', 'Tablet');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `image`
--

DROP TABLE IF EXISTS `image`;
CREATE TABLE IF NOT EXISTS `image` (
  `IdProduct` varchar(10) NOT NULL,
  `Image1` varchar(50) NOT NULL,
  `Image2` varchar(50) NOT NULL,
  `Image3` varchar(50) NOT NULL,
  KEY `FK_img_product` (`IdProduct`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Đang đổ dữ liệu cho bảng `image`
--

INSERT INTO `image` (`IdProduct`, `Image1`, `Image2`, `Image3`) VALUES
('PDT0000001', 'samsunga81.jpg', 'samsunga82.jpg', 'samsunga83.jpg'),
('PDT0000002', 'sonyxperiaxzprenium1.jpg', 'sonyxperiaxzprenium2.jpg', 'sonyxperiaxzprenium3.jpg'),
('PDT0000003', 'asusfx5031.jpg', 'asusfx5032.jpg', 'asusfx5033.jpg'),
('PDT0000004', 'dellinsprion1.jpg', 'dellinsprion2.jpg', 'dellinsprion3.jpg'),
('PDT0000005', 'iphonex641.jpg', 'iphonex642.jpg', 'iphonex643.jpg'),
('PDT0000006', 'asuss510uai58250u1.jpg', 'asuss510uai58250u2.jpg', 'asuss510uai58250u3.jpg'),
('PDT0000007', 'oppof71.jpg', 'oppof72.jpg', 'oppof73.jpg'),
('PDT0000008', 'samsunggalaxys9128g1.jpg', 'samsunggalaxys9128g2.jpg', 'samsunggalaxys9128g3.jpg'),
('PDT0000009', 'huaweip20pro1.jpg', 'huaweip20pro2.jpg', 'huaweip20pro3.jpg'),
('PDT0000010', 'sonyxperiaxz11.jpg', 'sonyxperiaxz12.jpg', 'sonyxperiaxz13.jpg'),
('PDT0000011', 'bphone20171.jpg', 'bphone20172.jpg', 'bphone20173.jpg'),
('PDT0000012', 'vivov91.jpg', 'vivov92.jpg', 'vivov93.jpg'),
('PDT0000013', 'dellinsprion1555701.jpg', 'dellinsprion1555702.jpg', 'dellinsprion1555703.jpg'),
('PDT0000014', 'dellvostro35681.jpg', 'dellvostro35682.jpg', 'dellvostro35683.jpg'),
('PDT0000015', 'asusx542uq1.jpg', 'asusx542uq2.jpg', 'asusx542uq3.jpg'),
('PDT0000016', 'acere51.jpg', 'acere52.jpg', 'acere53.jpg'),
('PDT0000017', 'asusgl503vd1.jpg', 'asusgl503vd2.jpg', 'asusgl503vd3.jpg'),
('PDT0000018', 'ipadpro105inch64g1.jpg', 'ipadpro105inch64g2.jpg', 'ipadpro105inch64g3.jpg'),
('PDT0000019', 'samsunggalaxytaba61.jpg', 'samsunggalaxytaba62.jpg', 'samsunggalaxytaba63.jpg'),
('PDT0000020', 'huaweimediapadt3101.jpg', 'huaweimediapadt3102.jpg', 'huaweimediapadt3103.jpg'),
('PDT0000021', 'maseratighibli1.jpg', 'maseratighibli2.jpg', 'maseratighibli3.jpg'),
('PDT0000022', 'maseratiquattroporte1.jpg', 'maseratiquattroporte2.jpg', 'maseratiquattroporte3.jpg'),
('PDT0000023', 'audia8l1.jpg', 'audia8l2.jpg', 'audia8l3.jpg'),
('PDT0000024', 'bmwi81.jpg', 'bmwi82.jpg', 'bmwi83.jpg'),
('PDT0000025', 'toyotacamry201.jpg', 'toyotacamry202.jpg', 'toyotacamry203.jpg'),
('PDT0000026', 'mercedesbenzs650maybach1.jpg', 'mercedesbenzs650maybach2.jpg', 'mercedesbenzs650maybach3.jpg'),
('PDT0000027', 'cr7shirts1.jpg', 'cr7shirts2.jpg', 'cr7shirts3.jpg'),
('PDT0000028', '2usd1.jpg', '2usd2.jpg', '2usd3.jpg'),
('PDT0000029', 'samsungsmarttv40inch1.jpg', 'samsungsmarttv40inch2.jpg', 'samsungsmarttv40inch3.jpg'),
('PDT0000030', 'porsche911gt2rs1.jpg', 'porsche911gt2rs2.jpg', 'porsche911gt2rs3.jpg'),
('PDT0000031', 'sonyandroidoledtv4k65inch1.jpg', 'sonyandroidoledtv4k65inch2.jpg', 'sonyandroidoledtv4k65inch3.jpg'),
('PDT0000032', 'office3651.jpg', 'office3652.jpg', 'office3653.jpg'),
('PDT0000033', 'corelx71.jpg', 'corelx72.jpg', 'corelx73.jpg'),
('PDT0000033', 'corelx71.jpg', 'corelx72.jpg', 'corelx73.jpg');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `product`
--

DROP TABLE IF EXISTS `product`;
CREATE TABLE IF NOT EXISTS `product` (
  `Id` varchar(10) NOT NULL,
  `ProductName` varchar(50) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `PriceNow` int(11) NOT NULL,
  `PricePay` int(11) NOT NULL,
  `TimeUp` datetime NOT NULL,
  `TimeDown` datetime NOT NULL,
  `Cost` int(11) NOT NULL,
  `Status` bit(1) NOT NULL,
  `TurnPay` int(11) NOT NULL,
  `Detail` text CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `AutoUpdate` bit(1) DEFAULT b'0',
  `id_category` varchar(10) NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Đang đổ dữ liệu cho bảng `product`
--

INSERT INTO `product` (`Id`, `ProductName`, `PriceNow`, `PricePay`, `TimeUp`, `TimeDown`, `Cost`, `Status`, `TurnPay`, `Detail`, `AutoUpdate`, `id_category`) VALUES
('PDT0000001', 'Sam Sung A8', 10000000, 0, '2018-05-18 11:14:35', '2018-05-21 17:26:20', 100000, b'1', 0, 'Điện thoại SamSung thiết kế mới chống bụi, chống nước IP68', b'0', 'CMX0000001'),
('PDT0000002', 'Sony Xperia XZ Prenium', 15000000, 0, '2018-05-18 04:41:35', '2018-05-21 16:07:16', 100000, b'1', 0, 'Dòng sản phẩm cao cấp của Sony ra mắt trong năm 2019 đón đầu công nghệ 5.0', b'0', 'CMX0000001'),
('PDT0000003', 'Asus FX503', 25500000, 0, '2018-05-19 09:19:05', '2018-05-21 17:26:20', 200000, b'1', 0, 'Sản phẩm máy tính cấu hình khủng, giá cực chất', b'0', 'CMX0000002'),
('PDT0000004', 'Dell Inspiron 15 5570', 16100000, 0, '2018-05-19 00:17:59', '2018-05-24 16:00:00', 500000, b'1', 0, 'Máy tính Dell màn hình 15inch core i5 thế hệ thứ 5', b'0', 'CMX0000002'),
('PDT0000005', 'iPhone X 64G', 1000000, 0, '2018-05-19 09:10:51', '2018-05-25 00:00:00', 100000, b'1', 0, 'iPhone 10 bộ nhớ trong 64G, tặng kèm hộp khi mua', b'0', 'CMX0000001'),
('PDT0000006', 'Asus S510UA i5 8250U', 160000, 0, '2018-05-19 09:13:23', '2018-05-26 12:00:00', 100000, b'0', 0, 'Asus S510UA core i5 8250U sản phẩm tầm trung, màn hình 15 inch', b'0', 'CMX0000002'),
('PDT0000007', 'OPPO F7', 1000, 0, '2018-05-19 09:16:38', '2018-05-24 12:00:00', 10000, b'0', 0, 'Chuyên gia serfile', b'0', 'CMX0000001'),
('PDT0000008', 'Sam Sung Galaxy S9+ 128G', 1000, 0, '2018-05-19 09:21:34', '2018-05-24 12:00:00', 10000, b'0', 0, 'Đỉnh cao của màn hình tràn viền, bảo mật 3 lớp quét mống mắt, cảm biến vân tay và mật khẩu số', b'0', 'CMX0000001'),
('PDT0000009', 'Huawei P20 Pro', 1000, 0, '2018-05-19 09:24:55', '2018-05-31 00:00:00', 10000, b'0', 0, 'Sản phẩm Smart phone Made in China', b'0', 'CMX0000001'),
('PDT0000010', 'Sony Xperia XZ1', 1000, 0, '2018-05-19 09:25:57', '2018-05-31 00:00:00', 100000, b'0', 6, 'Đứa con của XZ Prenium vô cùng mạnh mẽ', b'0', 'CMX0000001'),
('PDT0000011', 'BPhone 2017', 1000, 0, '2018-05-19 09:27:13', '2018-05-31 00:00:00', 10000, b'1', 0, 'Đại ca Quãng: \"Thật không thể tin được, đến chúng tôi cũng không thể tin được\"', b'0', 'CMX0000001'),
('PDT0000012', 'Vivo V9', 1000, 0, '2018-05-19 09:29:06', '2018-05-31 00:00:00', 10000, b'0', 0, 'Vivo V9 vi vu theo gió', b'0', 'CMX0000001'),
('PDT0000013', 'Dell Insprion 15 5570', 1000000, 0, '2018-05-19 09:33:02', '2018-05-31 00:00:00', 100000, b'1', 0, 'Dòng Insprion cấu hình khủng core i5, ram 8GB, SSD 128GB', b'0', 'CMX0000002'),
('PDT0000014', 'Dell Vostro 3568', 1000000, 0, '2018-05-19 09:35:11', '2018-05-31 00:00:15', 100000, b'1', 8, 'Sử dụng con chip AMD mới nhất đối thủ đáng gờm của core i3', b'0', 'CMX0000002'),
('PDT0000015', 'Asus X542UQ', 16990, 0, '2018-05-19 09:36:48', '2018-05-31 00:00:15', 10000, b'1', 0, 'Máy tính dành cho game thủ chuyên nghiệp', b'0', 'CMX0000002'),
('PDT0000016', 'Acer E5', 17490, 0, '2018-05-19 09:38:45', '2018-05-31 00:00:15', 10000, b'1', 0, 'Sản phẩm khó nhớ đến trên thị trường, mọi người luôn nghĩ là của Asus', b'0', 'CMX0000002'),
('PDT0000017', 'Asus GL503VD', 26990, 0, '2018-05-19 09:40:16', '2018-05-31 00:00:00', 10000, b'1', 3, 'Máy tính Asus GL503 mang trong mình bộ não core i7, cấu hình cực mạnh mẽ, đồ họa full FPS khi xem phim', b'0', 'CMX0000002'),
('PDT0000018', 'iPad Pro 10.5inch 64G', 19990, 0, '2018-05-19 09:42:02', '2018-05-31 00:00:00', 10000, b'1', 0, 'Máy tính bảng thương hiệu trái táo khuyết', b'0', 'CMX0000007'),
('PDT0000019', 'Sam Sung Galaxy Tab A6', 80000, 0, '2018-05-19 09:43:34', '2018-05-31 00:00:00', 10000, b'1', 0, 'Máy tính bảng của dãy ngân hà', b'0', 'CMX0000007'),
('PDT0000020', 'Huawei MediaPad T3 10', 50000, 0, '2018-05-19 09:44:55', '2018-05-31 00:00:00', 10000, b'1', 0, 'Sản phẩm được sản xuất nguyên chiếc từ Trung Quốc', b'0', 'CMX0000007'),
('PDT0000021', 'MASERATI Ghibli', 10000000, 0, '2018-05-19 09:48:22', '2018-05-31 00:00:00', 10000000, b'1', 2, 'Dòng xe cao cấp đến từ Italia', b'0', 'CMX0000004'),
('PDT0000022', 'MASERATI QUATTROPORTE', 100000000, 0, '2018-05-19 09:50:14', '2018-05-31 00:00:00', 1000000, b'1', 0, 'Một chiếc xe mang trong mình dòng máu thể thao với động cơ 100HP', b'0', 'CMX0000004'),
('PDT0000023', 'Audi A8L', 10000000, 0, '2018-05-19 09:51:10', '2018-05-31 00:00:00', 1000000, b'1', 0, 'Chiếc xe cao cấp mới của hãng Audi phiên bản dài ra mắt trong năm 2019', b'0', 'CMX0000004'),
('PDT0000024', 'BMW i8', 10000000, 0, '2018-05-19 09:52:01', '2018-05-31 00:00:00', 10000000, b'1', 0, 'Siêu xe của công nghệ tương lai', b'0', 'CMX0000004'),
('PDT0000025', 'Toyota Camry 2.0', 10000000, 0, '2018-05-19 09:53:03', '2018-07-31 00:00:00', 1000000, b'1', 10, 'Thương hiệu đến từ Nhật, khẳng định chất lượng hàng Nhật bền, đẹp nhưng không rẻ', b'0', 'CMX0000004'),
('PDT0000026', 'Mercedes-Benz S650 Maybach', 1000000, 0, '2018-05-19 09:54:55', '2018-09-30 00:00:00', 1000000, b'1', 0, 'Đối thủ đáng gờm trong các siêu xe hạng sang phục vụ cho giới thượng lưu', b'0', 'CMX0000004'),
('PDT0000030', 'Porsche 911 GT2 RS', 69900, 0, '2018-05-19 09:57:03', '2018-12-31 00:00:00', 10000, b'1', 0, 'Dòng xe làm nên tên tuổi của 911', b'0', 'CMX0000004'),
('PDT0000027', 'CR7 Shirts', 100000, 0, '2018-05-19 10:00:19', '2018-06-30 00:00:00', 10000, b'1', 0, 'Áo thun của CR7 từng mặc trong trận chung kết WC Việt Nam với Bồ năm 2018 tổ chức tại sân Lạch Trây', b'0', 'CMX0000003'),
('PDT0000028', '2USD', 2000, 0, '2018-05-19 10:02:50', '2018-06-29 00:00:00', 1000, b'1', 0, 'Tờ 2USD được sản xuất kỷ niệm lần đầu sản xuất loại tiền này', b'0', 'CMX0000003'),
('PDT0000029', 'Sam Sung Smart TV 40inch', 100000, 0, '2018-05-19 10:05:16', '2018-05-27 00:00:00', 10000, b'1', 0, 'Tivi cong, công nghệ của ông lớn SamSung', b'0', 'CMX0000006'),
('PDT0000031', 'Sony Android OLED TV 4K 65inch', 1000, 0, '2018-05-19 10:07:49', '2018-05-26 00:00:00', 20000, b'1', 0, 'Màn hình OLED độ phân giải 4K', b'0', 'CMX0000006'),
('PDT0000032', 'Office 365', 10000, 0, '2018-05-19 10:09:33', '2018-06-10 00:00:00', 20000, b'0', 0, 'Phần mềm văn phòng cho mọi người dùng WinOS', b'0', 'CMX0000005'),
('PDT0000033', 'Corel X7', 100000, 0, '2018-05-19 10:10:48', '2018-05-21 17:26:20', 10000, b'1', 0, 'Phần mềm đồ họa corel x7 dùng trọn đời cho 5 máy tính', b'0', 'CMX0000005');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `user`
--

DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `Email` varchar(50) NOT NULL,
  `PassWord` varchar(50) NOT NULL,
  `FullName` varchar(50) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `Address` varchar(50) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `Rating` int(11) NOT NULL,
  `isAdmin` bit(1) NOT NULL,
  `isReal` bit(1) NOT NULL,
  PRIMARY KEY (`Email`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Đang đổ dữ liệu cho bảng `user`
--

INSERT INTO `user` (`Email`, `PassWord`, `FullName`, `Address`, `Rating`, `isAdmin`, `isReal`) VALUES
('huunguyenckit@gmail.com', 'huunguyen', 'Huu Nguyen', 'Ho Chi Minh City', 100, b'1', b'1'),
('munonqcgovap@gmail.com', 'govap', 'Huu Nguyen', 'Ho Chi Minh City', 100, b'0', b'1'),
('huunguyena6@gmail.com', 'dinhquan', 'Huu Nguyen', 'Ho Chi Minh', 100, b'0', b'1');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `userauctionproduct`
--

DROP TABLE IF EXISTS `userauctionproduct`;
CREATE TABLE IF NOT EXISTS `userauctionproduct` (
  `Email` varchar(50) NOT NULL,
  `IdProduct` varchar(10) NOT NULL,
  KEY `FK_uap_user` (`Email`),
  KEY `FK_uap_product` (`IdProduct`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Đang đổ dữ liệu cho bảng `userauctionproduct`
--

INSERT INTO `userauctionproduct` (`Email`, `IdProduct`) VALUES
('munonqcgovap@gmail.com', 'PDT0000033'),
('huunguyena6@gmail.com', 'PDT0000022');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `userblockauction`
--

DROP TABLE IF EXISTS `userblockauction`;
CREATE TABLE IF NOT EXISTS `userblockauction` (
  `Email` varchar(50) NOT NULL,
  `IdProduct` varchar(10) NOT NULL,
  KEY `FK_uba_user` (`Email`),
  KEY `FK_uba_product` (`IdProduct`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Đang đổ dữ liệu cho bảng `userblockauction`
--

INSERT INTO `userblockauction` (`Email`, `IdProduct`) VALUES
('munonqcgovap@gmail.com', 'PDT0000003');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `userbuyproduct`
--

DROP TABLE IF EXISTS `userbuyproduct`;
CREATE TABLE IF NOT EXISTS `userbuyproduct` (
  `Email` varchar(50) NOT NULL,
  `IdProduct` varchar(10) NOT NULL,
  `Cost` int(11) NOT NULL,
  KEY `FK_ubp_user` (`Email`),
  KEY `FK_ubp_product` (`IdProduct`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `userupproduct`
--

DROP TABLE IF EXISTS `userupproduct`;
CREATE TABLE IF NOT EXISTS `userupproduct` (
  `Email` varchar(50) NOT NULL,
  `IdProduct` varchar(10) NOT NULL,
  KEY `FK_uup_user` (`Email`),
  KEY `FK_uup_product` (`IdProduct`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Đang đổ dữ liệu cho bảng `userupproduct`
--

INSERT INTO `userupproduct` (`Email`, `IdProduct`) VALUES
('huunguyenckit@gmail.com', 'PDT0000029');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
