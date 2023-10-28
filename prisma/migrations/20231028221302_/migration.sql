-- AlterTable
ALTER TABLE `games` ADD COLUMN `unity_id` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `games` ADD CONSTRAINT `games_unity_id_fkey` FOREIGN KEY (`unity_id`) REFERENCES `unities`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
