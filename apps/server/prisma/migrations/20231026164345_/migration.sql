/*
  Warnings:

  - You are about to drop the column `bio` on the `collections` table. All the data in the column will be lost.
  - The primary key for the `tracks` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `tracks` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.

*/
-- AlterTable
ALTER TABLE `collections` DROP COLUMN `bio`,
    ADD COLUMN `description` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `tracks` DROP PRIMARY KEY,
    MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id`);
