/*
  Warnings:

  - You are about to drop the column `cover_url` on the `collections` table. All the data in the column will be lost.
  - You are about to drop the column `cover_url` on the `tracks` table. All the data in the column will be lost.
  - You are about to drop the column `cover_url` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `profile_url` on the `users` table. All the data in the column will be lost.
  - Added the required column `cover_img` to the `collections` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cover_img` to the `tracks` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cover_img` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `profile_img` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `collections` DROP COLUMN `cover_url`,
    ADD COLUMN `cover_img` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `tracks` DROP COLUMN `cover_url`,
    ADD COLUMN `cover_img` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `users` DROP COLUMN `cover_url`,
    DROP COLUMN `profile_url`,
    ADD COLUMN `cover_img` VARCHAR(191) NOT NULL,
    ADD COLUMN `profile_img` VARCHAR(191) NOT NULL;
