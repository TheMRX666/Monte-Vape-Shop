-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Мар 16 2024 г., 19:05
-- Версия сервера: 8.0.30
-- Версия PHP: 7.2.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `shop`
--

-- --------------------------------------------------------

--
-- Структура таблицы `offers`
--

CREATE TABLE `offers` (
  `id` int NOT NULL,
  `user_id` int DEFAULT NULL,
  `product_name` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `first_name` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `last_name` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `phone_number` varchar(20) COLLATE utf8mb4_general_ci NOT NULL,
  `delivery_type` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `payment_method` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `delivery_address` text COLLATE utf8mb4_general_ci NOT NULL,
  `statusOffer` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Дамп данных таблицы `offers`
--

INSERT INTO `offers` (`id`, `user_id`, `product_name`, `first_name`, `last_name`, `phone_number`, `delivery_type`, `payment_method`, `delivery_address`, `statusOffer`, `created_at`) VALUES
(3, NULL, ' <Vaporesso XROS 3 Nano Kit> <Smoant Charon Baby Plus>', 'RUSLAN', 'MARTYNENKO', '0959230943', 'Courier', 'Cart', 'ул. Большая Васильковская', 'active', '2024-03-14 15:41:29'),
(5, NULL, ' <Vaporesso XROS 3 Nano Kit> <Smoant Charon Baby Plus>', 'RUSLAN', 'MARTYNENKO', '0959230943', 'Courier', 'Cart', 'ул. Большая Васильковская', 'active', '2024-03-14 15:47:27'),
(7, 6, ' <Vaporesso XROS 3 Pod Kit> <Vaporesso XROS Nano Pod Kit>', 'RUSLAN', 'MARTYNENKO', '0959230943', 'Courier', 'Cart', 'ул. Большая Васильковская', 'active', '2024-03-14 16:53:17'),
(8, 6, ' <Vaporesso XROS 3 Pod Kit> <Vaporesso XROS Nano Pod Kit>', 'RUSLAN', 'MARTYNENKO', '0959230943', 'Courier', 'Cart', 'ул. Большая Васильковская', 'active', '2024-03-14 16:57:54'),
(9, 6, ' <Oxva XLIM Pro Pod Kit>', 'RUSLAN', 'MARTYNENKO', '0959230943', 'Courier', 'Cart', 'ул. Большая Васильковская', 'active', '2024-03-14 19:20:41');

-- --------------------------------------------------------

--
-- Структура таблицы `order_history`
--

CREATE TABLE `order_history` (
  `id` int NOT NULL,
  `userId` int NOT NULL,
  `product_name` text COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Дамп данных таблицы `order_history`
--

INSERT INTO `order_history` (`id`, `userId`, `product_name`) VALUES
(1, 6, ' <Vaporesso XROS 3 Pod Kit> <Vaporesso XROS Nano Pod Kit>'),
(2, 6, ' <Oxva XLIM Pro Pod Kit>');

-- --------------------------------------------------------

--
-- Структура таблицы `products`
--

CREATE TABLE `products` (
  `id` int NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `description` text COLLATE utf8mb4_general_ci NOT NULL,
  `img` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `price` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `stock_quantity` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `prodtype` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `category` varchar(50) COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Дамп данных таблицы `products`
--

INSERT INTO `products` (`id`, `name`, `description`, `img`, `price`, `stock_quantity`, `prodtype`, `category`) VALUES
(1, 'Vaporesso XROS 3 Pod Kit', 'The Vaporesso XROS 3 Pod Kit is an exceptional compact POD system with a powerful built-in battery and Axon chip, capable of accommodating any XROS series cartridge. This sleek device is designed in the traditional POD system form factor - a small rectangular stick with rounded edges, boasting excellent ergonomics and occupying minimal space in the pocket. Despite its simple construction, the device has excellent autonomy. One of the most important features of this POD system is the ability to install any XROS series cartridges with built-in coils. You can purchase the Vaporesso XROS 3 Pod Kit in more than eight vibrant colors, including black, dark blue, space gray, silver, gold, sky blue, pink, mint green, and others, depending on your style and preferences.', 'http://localhost:3000/server/images/vaporesso-xros-3-pod-system-kit.jpg', '25', '14', 'devices', 'pod_system'),
(2, 'Elf Bar RF350 Pod Starter Kit 350mAh', 'The new product from Elf Bar company is the reusable Elf Bar RF350 pod system with refillable cartridges. If your introduction to vaping began with disposables, then there is no doubt that this alternative is suitable for you - its time to move on. This modern device is characterized by its ease of use, low maintenance requirements, and a relatively large battery capacity 350mAh for its size. The Elf Bar RF350 Pod Starter Kit includes everything necessary to start using it.', 'http://localhost:3000/server/images/elfbar-rf350.jpg', '9.50', '30', 'devices', 'pod_system'),
(3, 'Elf Bar Mate 500 Pod', 'The manufacturer Elf Bar delights us with a new device - the Mate 500, which is very similar to the RF350, but still has some differences. Despite the external similarity to the RF350, the Mate 500 body is made of aviation aluminum, making it lightweight and durable. The device is available in a diverse color palette, with the Mate 500 offered in ten colors, including monochrome and gradient colors.', 'http://localhost:3000/server/images/elfbar-mate500.jpg', '11.90', '9', 'devices', 'pod_system'),
(4, 'Vaporesso XROS 3 Nano Kit', 'The Vaporesso Xros 3 Nano is another newcomer in the Xros series featuring a new design. This compact pod system offers a wide range of functionalities, with the manufacturer addressing previous shortcomings. The Xros 3 Nano boasts an ergonomic design that will surprise Xros series enthusiasts, as the new device is crafted in a square shape with a protruding mouthpiece at the top. Its dimensions measure 69.9 x 51.2 x 14 mm (including the cartridge), and it weighs 52.6 g. Included in the package is a stylish lanyard for convenient carrying of the device.', 'http://localhost:3000/server/images/vaporesso-xros3-nano.jpg', '21.49', '18', 'devices', 'pod_system'),
(5, 'Vaporesso XROS Nano Pod Kit', 'The Vaporesso XROS Nano POD is an excellent addition to the popular XROS series from Vaporesso. This compact and practical device boasts a powerful built-in battery with a capacity of 1000mAh, providing long-lasting autonomy for two to three days. The device is designed in a small square form factor, which is both ergonomic and lightweight. Its dimensions are 63.1x48.8x14.9 mm, and it weighs only 48 g. Additionally, the device is very sturdy and durable. The lightweight aluminum alloy body provides excellent protection against accidental drops and impacts, while the magnets holding the cartridge in place ensure a secure and tight fit.', 'http://localhost:3000/server/images/vaporesso-xros-nano-pod.jpg', '16', '3', 'devices', 'pod_system'),
(6, 'Vaporesso XROS 3 Mini Pod Kit', 'The Vaporesso Xros 3 Mini is a new addition to the popular Xros lineup. This mini version features a similar external appearance as well as simplified functionality - it differs from the full-sized version only in the absence of a button and airflow adjustment. The color palette of the series is very diverse, including both traditional solid colors and vibrant gradient shades. Like all previous versions, the devices body is made of aluminum alloy and features a textured surface. The dimensions are quite compact - 99.2 x 13.8 x 23.6 mm, and it weighs 41 grams.', 'http://localhost:3000/server/images/vaporesso-xros3-mini.jpg', '19.99', '7', 'devices', 'pod_system'),
(7, 'Vaporesso XROS Mini Pod Kit', '\r\nThe Vaporesso XROS MINI Pod Kit is a new incredible product from the well-known company Vaporesso, which preserves the best qualities of the senior version while becoming even simpler, more compact, stylish, and autonomous. These advantages will be appreciated by both newcomers to vaping and experienced vapers.', 'http://localhost:3000/server/images/vaporesso-xros-mini-pod-kit.jpg', '16.49', '15', 'devices', 'pod_system'),
(8, 'Oxva XLIM Pro Pod Kit', 'The new release from Oxva company. The Xlim Pro model is equipped with a powerful 1000mAh battery, providing enough charge for up to 3 days of active vaping. This device will meet the needs of both beginners and vaping professionals.', 'http://localhost:3000/server/images/oxva-xlim-pro-pod-kit.jpg', '26.99', '20', 'devices', 'pod_system'),
(9, 'Oxva Xlim SQ Pro', 'The Oxva Xlim SQ Pro is a newcomer in the vaping world and an updated version of the already beloved Xlim SQ from the manufacturer Oxva. This device combines advanced technology and elegant design, making it one of the best devices on the market, according to the manufacturer. The new POD system impresses with its stylish construction, including a metal body with rounded edges and intuitively placed control elements. Every aspect of the device, from the feel of the Fire button to the color of the body, is designed to provide unmatched vaping pleasure. Attention is paid to every aspect of the device, from its design to its power. While retaining the rectangular form factor of the SQ model, the Xlim SQ Pro gains recognition for its ergonomic and convenient design.', 'http://localhost:3000/server/images/oxva-xlim-sq-pro.jpg', '27.59', '13', 'devices', 'pod_system'),
(10, 'Uwell Caliburn A3', 'Starting from advanced technologies and ending with sophisticated style, the Caliburn A3 sets a new standard among electronic cigarettes. Its ergonomic design not only adds comfort during use but also makes it an elegant accent for those who value quality and aesthetics. This device is distinguished not only by its appearance but also by its technical characteristics, which define it as an advanced vaping device. The built-in 520mAh battery provides long-lasting autonomy, allowing you to enjoy vaping for an extended period of time without the need for constant recharging. The device has compact dimensions of 109.8 x 21.3 x 11.7 mm and remarkable lightness due to the use of high-quality plastic and aluminum in the body. The weight of the device is only 31 g.', 'http://localhost:3000/server/images/uwell-caliburn.jpeg', '12.39', '11', 'devices', 'pod_system'),
(11, 'Smok Novo 5 Kit', 'The Smok Novo 5 Kit from Smok is a stylish and lightweight pod system that offers high performance and ease of use. With its dimensions of 96 x 29 x 18.9 mm, it easily fits in the hand and becomes an indispensable companion in your everyday life. It weighs only 71 g.', 'http://localhost:3000/server/images/smok-novo5.jpg', '11.79', '2', 'devices', 'pod_system'),
(12, 'Smoant Charon Baby Plus', '\r\nThe Charon Baby Plus is a highly anticipated and improved release from Smoant. The first noticeable difference is its larger size (79.4 x 45.6 x 22 mm) and weight, which can be attributed to the increased battery capacity of 1000mAh. Additionally, it features a unique design that youve never seen before. The body of the Charon Baby Plus is made of zinc alloy, with colorful panels attached on both sides using strong magnets. There are 6 design options available in this lineup, but you can customize the appearance of the device by purchasing interchangeable panels, of which the manufacturer offers 15 variants.', 'http://localhost:3000/server/images/charon-baby-plus.jpg', '32', '19', 'devices', 'pod_system'),
(13, 'VooPoo Argus GT2', 'The Argus GT2 Kit operates on the updated GENE.TT 2.0 chipset, which ensures exceptional performance and eight-level protection against overwork, short circuits, overcharging, overheating, over-discharge, battery reverse connection, overload protection of the output current, and balanced charging of batteries from other brands. With an output power range from 5 to 200 watts, this device is suitable for both MTL (mouth to lung) and DTL (direct to lung) vaping styles. The GENE.TT 2.0 chipset also supports 4 different modes: RBA, Turbo, temperature control mode, and intelligent Smart mode, allowing vapers to customize their vaping experience according to their preferences.', 'http://localhost:3000/server/images/argus-gt2.jpg', '51.99', '14', 'devices', 'vape_system'),
(14, 'VooPoo Drag 4', 'The Voopoo Drag 4 box mod features a neat rectangular shape with two beveled corners, clear straight lines, and slightly rounded edges. Its no longer the same brick as its predecessors, but it still bears a strong resemblance to them. Its dimensions are 89 x 52.4 x 25.4 mm, and its 510 platform is designed to accommodate atomizers up to 25 mm in diameter. The design deserves special attention, as the battery block is made of zinc alloy and is equipped with side plastic panels with bright Resin-type inserts, as well as inserts that mimic natural wood, giving it a stylish and unique look that is sure to impress.', 'http://localhost:3000/server/images/voopoo-drag4.jpg', '49.99', '3', 'devices', 'vape_system'),
(16, 'Voopoo Argus GT 160W', 'The Voopoo ARGUS GT Mod kit is a starter kit consisting of the PnP Pod Tank atomizer and the new ARGUS GT box mod, which boasts sufficient power and functionality powered by the GENE.TT chipset. The PnP Pod Tank is designed for use with PnP series coils and a serviceable base. The design of the new box mod is significantly different from Voopoo devices - it stands out for its originality and excellent ergonomics, making it fit comfortably in the hand.', 'http://localhost:3000/server/images/voopoo-argus-gt.png', '34.99', '23', 'devices', 'vape_system'),
(17, 'The Elf Bar Lux 1500 puffs. Coolness banana.', 'The Elf Bar Lux 1500 Disposable Pod Device is an electronic cigarette that doesnt have any buttons and activates automatically when you take a puff, operating in a straightforward manner. The device features a disposable cartridge with a capacity of 4.8ml. It is designed to provide up to 1500 puffs.', 'http://localhost:3000/server/images/elfbar-lux-1500-banana-ice.jpg', '7.59', '12', 'devices', 'disposable_vape'),
(18, 'The Pod Elf Bar Lux 1500 puffs. Strawberry and grape.', 'The Elf Bar Lux 1500 Disposable Pod Device is an electronic cigarette that doesnt have any buttons and activates automatically when you take a puff, operating in a straightforward manner. The device features a disposable cartridge with a capacity of 4.8ml. It is designed to provide up to 1500 puffs.', 'http://localhost:3000/server/images/elfbar-lux-1500-strawberry-grape.jpg', '7.59', '12', 'devices', 'disposable_vape'),
(19, 'The Pod Elf Bar Lux 1500 puffs. Sour apple.', 'The Elf Bar Lux 1500 Disposable Pod Device is an electronic cigarette that doesnt have any buttons and activates automatically when you take a puff, operating in a straightforward manner. The device features a disposable cartridge with a capacity of 4.8ml. It is designed to provide up to 1500 puffs.', 'http://localhost:3000/server/images/elfbar-lux-1500-sour-apple.jpg', '7.59', '12', 'devices', 'disposable_vape'),
(20, 'Elf Bar BC5000 Ultra 5000 puffs. Tobacco.', 'The Elf Bar company has introduced a new member of its BC series - a line of products that many vapers are eager to try. The Elf Bar BC 5000 ULTRA model belongs to the class of bars with rounded edges. This compact device, measuring 79 x 41 x 19 mm, would be a proper parallelepiped if it werent for the protruding drip tip. The devices body can be conventionally divided into three parts. The top part includes the mouthpiece. It is oval-shaped at the cut, slightly flattened.', 'http://localhost:3000/server/images/elfbar-bc5000-tobacco.jpg', '17.89', '4', 'devices', 'disposable_vape'),
(21, 'Chaser Black 30 ml 50 mg three sour apples.', 'Chaser Black is a shining example of high-quality DIY salt liquid kits with unparalleled premium salt nicotine that delivers true satisfaction with every puff. This company impresses its customers with exquisite flavors and reaches new heights in its efforts to satisfy the taste palette of its buyers. A true market hit, Chaser Black captures the hearts of thousands of fans with its unique tones and impeccable quality. The unique luxury of flavor variations in Chaser Black creates an unforgettable vaping experience, and the 30ml volume ensures rich vapor production for 2-3 weeks. This assortment includes numerous flavors with a high concentration of 50 mg/ml, which will impress you from the first inhale. Using only the finest components, Chaser Black creates kits with unparalleled aromatic ingredients, making each vaping experience unique and incomparable.', 'http://localhost:3000/server/images/chaser-black-salt-triple-sour-apple.jpg', '8.99', '13', 'liquids', 'salt_nic'),
(22, 'Chaser Lux Salt Vitamin 30ml 50mg apple with melon.', 'Chaser Lux 30ml DIY Liquid Kit is an exquisite and balanced product designed for DIY salt nicotine liquid mixing. You can indulge in an unparalleled vaping experience thanks to the high-quality components and unique flavors from Chaser. The strength of the kit is 50mg, allowing for satisfaction with every puff. The VG/PG ratio is 50/50, making the liquid excellent for both low and high wattage devices. This balance ensures excellent flavor delivery and dense vapor. The kit comes in a 30ml volume, providing rich vapor production and the opportunity to try different flavor combinations.', 'http://localhost:3000/server/images/chaser-lux-salt-vitamin.jpg', '9.29', '3', 'liquids', 'salt_nic'),
(23, 'Flamingo 30ml 50mg with the flavor of orange.', 'The Flamingo DIY Liquid Kit is an excellent choice for fans of vibrant flavors. Manufactured in Malaysia, known for its high quality vape products. With a content of salt nicotine strength of 50mg, Flamingo provides a quick and satisfying nicotine hit, catering to your nicotine needs. The VG/PG ratio in this kit is 50/50, ensuring a balanced combination of clouds and flavors. This balance helps enhance flavor intensity and create large, dense vapor clouds. Each Flamingo kit contains 30ml of liquid, providing you with a long-lasting vaping experience.', 'http://localhost:3000/server/images/flamingo-salt-orange.jpg', '8.49', '7', 'liquids', 'salt_nic'),
(24, 'FLAVORLAB LOVE IT MELON MANGO PAPAYA, 60 ml', 'Flavorlab Love IT Melon Mango Papaya DIY Kit, 60ml - a juicy and sweet taste of tropical fruits such as mango, papaya, and melon. The Flavorlab Love IT kit for DIY liquid mixing with organic nicotine.', 'http://localhost:3000/server/images/love-it-organic-mango-papaya.jpg', '10.19', '11', 'liquids', 'organic_nic');

-- --------------------------------------------------------

--
-- Структура таблицы `users`
--

CREATE TABLE `users` (
  `id` int NOT NULL,
  `username` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Дамп данных таблицы `users`
--

INSERT INTO `users` (`id`, `username`, `password`) VALUES
(4, 'shainyt09@gmail.com', '$2y$10$raXiObAeXBBSA/i1OyPjROFYVXsekXE0WoCKEhfgzZGMbI9QGiVAa'),
(6, 'shainyt05@gmail.com', '$2y$10$UNX3bLPbbuPiOVykJVjX8.gMcsWOhgQn9gB/L3uTM4vmrK4BI.CJW');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `offers`
--
ALTER TABLE `offers`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Индексы таблицы `order_history`
--
ALTER TABLE `order_history`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `offers`
--
ALTER TABLE `offers`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT для таблицы `order_history`
--
ALTER TABLE `order_history`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT для таблицы `products`
--
ALTER TABLE `products`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT для таблицы `users`
--
ALTER TABLE `users`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Ограничения внешнего ключа сохраненных таблиц
--

--
-- Ограничения внешнего ключа таблицы `offers`
--
ALTER TABLE `offers`
  ADD CONSTRAINT `offers_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
