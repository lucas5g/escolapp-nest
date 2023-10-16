/*
  Warnings:

  - You are about to drop the `Game` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `Game` DROP FOREIGN KEY `Game_modality_id_fkey`;

-- DropForeignKey
ALTER TABLE `Game` DROP FOREIGN KEY `Game_place_id_fkey`;

-- DropForeignKey
ALTER TABLE `Game` DROP FOREIGN KEY `Game_user_id_fkey`;

-- DropTable
DROP TABLE `Game`;

-- CreateTable
CREATE TABLE `games` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `date` DATETIME(3) NOT NULL,
    `startHours` VARCHAR(191) NOT NULL,
    `endHours` VARCHAR(191) NOT NULL,
    `comments` VARCHAR(191) NULL,
    `teams` JSON NOT NULL,
    `place_id` INTEGER NULL,
    `modality_id` INTEGER NULL,
    `user_id` INTEGER NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `games` ADD CONSTRAINT `games_place_id_fkey` FOREIGN KEY (`place_id`) REFERENCES `places`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `games` ADD CONSTRAINT `games_modality_id_fkey` FOREIGN KEY (`modality_id`) REFERENCES `modalities`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `games` ADD CONSTRAINT `games_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
