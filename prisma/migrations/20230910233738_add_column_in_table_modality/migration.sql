/*
  Warnings:

  - Added the required column `membersQuantity` to the `modalities` table without a default value. This is not possible if the table is not empty.
  - Added the required column `teamsQuantity` to the `modalities` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `modalities` ADD COLUMN `membersQuantity` INTEGER NOT NULL,
    ADD COLUMN `teamsQuantity` INTEGER NOT NULL;
