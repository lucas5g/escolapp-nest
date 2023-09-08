-- CreateTable
CREATE TABLE `modalities` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `unity_id` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `modalities` ADD CONSTRAINT `modalities_unity_id_fkey` FOREIGN KEY (`unity_id`) REFERENCES `unities`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
