/*
  Warnings:

  - You are about to drop the column `authorId` on the `tracks` table. All the data in the column will be lost.
  - You are about to drop the column `collectionId` on the `tracks` table. All the data in the column will be lost.
  - You are about to drop the column `coverUrl` on the `tracks` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `tracks` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `tracks` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `users` table. All the data in the column will be lost.
  - Added the required column `author_id` to the `collections` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cover_url` to the `collections` table without a default value. This is not possible if the table is not empty.
  - Added the required column `author_id` to the `tracks` table without a default value. This is not possible if the table is not empty.
  - Added the required column `collection_id` to the `tracks` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cover_url` to the `tracks` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `tracks` table without a default value. This is not possible if the table is not empty.
  - Added the required column `artist` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cover_url` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `profile_url` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `tracks` DROP FOREIGN KEY `tracks_authorId_fkey`;

-- DropForeignKey
ALTER TABLE `tracks` DROP FOREIGN KEY `tracks_collectionId_fkey`;

-- AlterTable
ALTER TABLE `collections` ADD COLUMN `author_id` INTEGER NOT NULL,
    ADD COLUMN `cover_url` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `tracks` DROP COLUMN `authorId`,
    DROP COLUMN `collectionId`,
    DROP COLUMN `coverUrl`,
    DROP COLUMN `createdAt`,
    DROP COLUMN `updatedAt`,
    ADD COLUMN `author_id` INTEGER NOT NULL,
    ADD COLUMN `collection_id` VARCHAR(191) NOT NULL,
    ADD COLUMN `cover_url` VARCHAR(191) NOT NULL,
    ADD COLUMN `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updated_at` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `users` DROP COLUMN `createdAt`,
    DROP COLUMN `updatedAt`,
    ADD COLUMN `artist` BOOLEAN NOT NULL,
    ADD COLUMN `cover_url` VARCHAR(191) NOT NULL,
    ADD COLUMN `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `profile_url` VARCHAR(191) NOT NULL,
    ADD COLUMN `updated_at` DATETIME(3) NOT NULL;

-- AddForeignKey
ALTER TABLE `collections` ADD CONSTRAINT `collections_author_id_fkey` FOREIGN KEY (`author_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tracks` ADD CONSTRAINT `tracks_collection_id_fkey` FOREIGN KEY (`collection_id`) REFERENCES `collections`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tracks` ADD CONSTRAINT `tracks_author_id_fkey` FOREIGN KEY (`author_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
