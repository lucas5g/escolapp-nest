/*
  Warnings:

  - You are about to drop the column `membersQuantity` on the `modalities` table. All the data in the column will be lost.
  - You are about to drop the column `teamsQuantity` on the `modalities` table. All the data in the column will be lost.
  - Added the required column `members_quantity` to the `modalities` table without a default value. This is not possible if the table is not empty.
  - Added the required column `teams_quantity` to the `modalities` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `modalities` DROP COLUMN `membersQuantity`,
    DROP COLUMN `teamsQuantity`,
    ADD COLUMN `members_quantity` INTEGER NOT NULL,
    ADD COLUMN `teams_quantity` INTEGER NOT NULL;
