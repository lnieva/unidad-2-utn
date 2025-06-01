CREATE DATABASE IF NOT EXISTS dwh;

USE dwh;

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";
--
-- Estructura de tabla para la tabla `cities`
--

CREATE TABLE `cities` (
  `id_city` int(10) NOT NULL,
  `name` varchar(100) NOT NULL,
  `id_country` int(11) NOT NULL,
  `active` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `cities`
--

INSERT INTO `cities` (`id_city`, `name`, `id_country`, `active`) VALUES
(1, 'Buenos Aires', 1, 1),
(2, 'Cordoba', 1, 1),
(3, 'Bogota', 2, 1),
(4, 'Cucuta', 2, 1),
(5, 'Medellin', 2, 1),
(6, 'Atacama', 3, 1),
(7, 'Santiago', 3, 1),
(8, 'Valparaiso', 3, 1),
(9, 'Canelones', 4, 1),
(10, 'Maldonado', 4, 1),
(11, 'Montevideo', 4, 1),
(12, 'Ciudad de Mexico', 5, 1),
(13, 'Tijuana', 5, 1),
(14, 'Florida', 6, 1),
(15, 'Texas', 6, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `companies`
--

CREATE TABLE `companies` (
  `id_company` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `address` varchar(150) NOT NULL,
  `email` varchar(100) NOT NULL,
  `phone` varchar(30) NOT NULL,
  `id_city` int(11) NOT NULL,
  `active` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `companies`
--

INSERT INTO `companies` (`id_company`, `name`, `address`, `email`, `phone`, `id_city`, `active`) VALUES
(1, 'Agea', 'Tacuari 1842', 'agea@agea.com.ar', '1122554685', 2, 1),
(2, 'Triunfo Seguros', 'Cerrito 125', 'administracion@triunfoseguros.com', '4569623542', 2, 1),
(3, 'Santander Rio', 'Colon 15', 'consulta@santanderrio.com.ar', '256633251', 8, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `contacts`
--

CREATE TABLE `contacts` (
  `id_contact` int NOT NULL,
  `fname` varchar(100) NOT NULL,
  `lname` varchar(100) NOT NULL,
  `position` varchar(100) NOT NULL,
  `email` varchar(150) NOT NULL,
  `id_company` int(11) NOT NULL,
  `id_city` int(11) NOT NULL,
  `address` varchar(100) DEFAULT NULL,
  `interest` int(11) DEFAULT NULL,
  `account_phone` varchar(100) DEFAULT NULL,
  `preference_phone` int(11) NOT NULL,
  `account_whatsapp` varchar(100) DEFAULT NULL,
  `preference_whatsapp` int(11) NOT NULL,
  `account_instagram` varchar(100) DEFAULT NULL,
  `preference_instagram` int(11) NOT NULL,
  `account_facebook` varchar(100) DEFAULT NULL,
  `preference_facebook` int(11) NOT NULL,
  `account_linkedin` varchar(100) DEFAULT NULL,
  `preference_linkedin` int(11) NOT NULL,
  `active` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `contacts`
--

INSERT INTO `contacts` (`id_contact`, `fname`, `lname`, `position`, `email`, `id_company`, `id_city`, `address`, `interest`, `account_phone`, `preference_phone`, `account_whatsapp`, `preference_whatsapp`, `account_instagram`, `preference_instagram`, `account_facebook`, `preference_facebook`, `account_linkedin`, `preference_linkedin`, `active`) VALUES
(3, 'Leonardo', 'Nieva', 'Sysadmin', 'lnieva@acamica.com', 1, 2, 'Tacuari 1842', 75, '46325589', 1, '', 2, '@nieva', 3, 'nieva', 3, 'leonardo.nieva', 2, 1),
(4, 'Clo', 'Tilde', 'Aseguradora', 'clo.tilde@hotmial.com', 2, 12, 'Lima 50', 75, '', 1, '', 1, '', 1, '', 1, '', 1, 1),
(5, 'Papi', 'llon', 'Operario', 'papi.llon@gmail.com', 2, 14, 'San Martin 6200', 100, '', 1, '', 1, '', 1, '', 1, '', 1, 1),
(7, 'Juan', 'Chon', 'Contador', 'juanchon@pepe.com', 3, 11, 'San Martin 620', 50, '', 1, '1123695588', 2, '', 1, '', 1, '', 1, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `countries`
--

CREATE TABLE `countries` (
  `id_country` int(20) NOT NULL,
  `name` varchar(50) NOT NULL,
  `id_region` int(11) NOT NULL,
  `active` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `countries`
--

INSERT INTO `countries` (`id_country`, `name`, `id_region`, `active`) VALUES
(1, 'Argentina', 1, 1),
(2, 'Colombia', 1, 1),
(3, 'Chile', 1, 1),
(4, 'Uruguay', 1, 1),
(5, 'Mexico', 2, 1),
(6, 'Estados Unidos', 2, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `preferences`
--

CREATE TABLE `preferences` (
  `id_preference` int(11) NOT NULL,
  `name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `preferences`
--

INSERT INTO `preferences` (`id_preference`, `name`) VALUES
(2, 'Canal favorito'),
(3, 'No molestar'),
(1, 'Sin preferencia');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `regions`
--

CREATE TABLE `regions` (
  `id_region` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `active` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `regions`
--

INSERT INTO `regions` (`id_region`, `name`, `active`) VALUES
(1, 'Sudamerica', 1),
(2, 'Norteamerica', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id_user` int(11) NOT NULL,
  `fname` varchar(50) NOT NULL,
  `lname` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `pass` varchar(50) NOT NULL,
  `admin` tinyint(1) NOT NULL,
  `active` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id_user`, `fname`, `lname`, `email`, `pass`, `admin`, `active`) VALUES
(1, 'Leonardo', 'Nieva', 'lnieva@acamica.com', 'meolvide', 1, 1),
(2, 'Juan Carlos', 'Cal', 'juancacal@gmail.com', 'meolvide', 0, 1);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `cities`
--
ALTER TABLE `cities`
  ADD PRIMARY KEY (`id_city`),
  ADD UNIQUE KEY `name` (`name`),
  ADD KEY `id_country` (`id_country`);

--
-- Indices de la tabla `companies`
--
ALTER TABLE `companies`
  ADD PRIMARY KEY (`id_company`),
  ADD UNIQUE KEY `email` (`email`),
  ADD UNIQUE KEY `phone` (`phone`),
  ADD KEY `id_city` (`id_city`);

--
-- Indices de la tabla `contacts`
--
ALTER TABLE `contacts`
  ADD PRIMARY KEY (`id_contact`),
  ADD KEY `id_company` (`id_company`),
  ADD KEY `id_city` (`id_city`),
  ADD KEY `contacts_ibfk_3` (`preference_phone`),
  ADD KEY `contacts_ibfk_4` (`preference_whatsapp`),
  ADD KEY `contacts_ibfk_5` (`preference_instagram`),
  ADD KEY `contacts_ibfk_6` (`preference_facebook`),
  ADD KEY `contacts_ibfk_7` (`preference_linkedin`);

--
-- Indices de la tabla `countries`
--
ALTER TABLE `countries`
  ADD PRIMARY KEY (`id_country`),
  ADD KEY `id_region` (`id_region`);

--
-- Indices de la tabla `preferences`
--
ALTER TABLE `preferences`
  ADD PRIMARY KEY (`id_preference`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indices de la tabla `regions`
--
ALTER TABLE `regions`
  ADD PRIMARY KEY (`id_region`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id_user`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `cities`
--
ALTER TABLE `cities`
  MODIFY `id_city` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT de la tabla `companies`
--
ALTER TABLE `companies`
  MODIFY `id_company` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `contacts`
--
ALTER TABLE `contacts`
  MODIFY `id_contact` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT de la tabla `countries`
--
ALTER TABLE `countries`
  MODIFY `id_country` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `preferences`
--
ALTER TABLE `preferences`
  MODIFY `id_preference` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `regions`
--
ALTER TABLE `regions`
  MODIFY `id_region` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id_user` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `cities`
--
ALTER TABLE `cities`
  ADD CONSTRAINT `cities_ibfk_1` FOREIGN KEY (`id_country`) REFERENCES `countries` (`id_country`);

--
-- Filtros para la tabla `companies`
--
ALTER TABLE `companies`
  ADD CONSTRAINT `companies_ibfk_1` FOREIGN KEY (`id_city`) REFERENCES `cities` (`id_city`);

--
-- Filtros para la tabla `contacts`
--
ALTER TABLE `contacts`
  ADD CONSTRAINT `contacts_ibfk_1` FOREIGN KEY (`id_company`) REFERENCES `companies` (`id_company`),
  ADD CONSTRAINT `contacts_ibfk_2` FOREIGN KEY (`id_city`) REFERENCES `cities` (`id_city`),
  ADD CONSTRAINT `contacts_ibfk_3` FOREIGN KEY (`preference_phone`) REFERENCES `preferences` (`id_preference`),
  ADD CONSTRAINT `contacts_ibfk_4` FOREIGN KEY (`preference_whatsapp`) REFERENCES `preferences` (`id_preference`),
  ADD CONSTRAINT `contacts_ibfk_5` FOREIGN KEY (`preference_instagram`) REFERENCES `preferences` (`id_preference`),
  ADD CONSTRAINT `contacts_ibfk_6` FOREIGN KEY (`preference_facebook`) REFERENCES `preferences` (`id_preference`),
  ADD CONSTRAINT `contacts_ibfk_7` FOREIGN KEY (`preference_linkedin`) REFERENCES `preferences` (`id_preference`);

--
-- Filtros para la tabla `countries`
--
ALTER TABLE `countries`
  ADD CONSTRAINT `countries_ibfk_1` FOREIGN KEY (`id_region`) REFERENCES `regions` (`id_region`);
COMMIT;
