/*
  Warnings:

  - You are about to drop the `Place` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Unity` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `Place` DROP FOREIGN KEY `Place_unity_id_fkey`;

-- DropTable
DROP TABLE `Place`;

-- DropTable
DROP TABLE `Unity`;

-- CreateTable
CREATE TABLE `places` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `unity_id` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `unities` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `places` ADD CONSTRAINT `places_unity_id_fkey` FOREIGN KEY (`unity_id`) REFERENCES `unities`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
