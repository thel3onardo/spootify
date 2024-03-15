/*
  Warnings:

  - The primary key for the `artists` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `active_expires` on the `sessions` table. All the data in the column will be lost.
  - You are about to drop the column `idle_expires` on the `sessions` table. All the data in the column will be lost.
  - You are about to drop the column `author_id` on the `tracks` table. All the data in the column will be lost.
  - You are about to alter the column `birthDate` on the `users` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to drop the `collections` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `keys` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `track_on_collection` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[username]` on the table `artists` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `username` to the `artists` table without a default value. This is not possible if the table is not empty.
  - Added the required column `expiresAt` to the `sessions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `album_id` to the `tracks` table without a default value. This is not possible if the table is not empty.
  - Added the required column `artist_id` to the `tracks` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hashed_password` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `collections` DROP FOREIGN KEY `collections_author_id_fkey`;

-- DropForeignKey
ALTER TABLE `keys` DROP FOREIGN KEY `keys_user_id_fkey`;

-- DropForeignKey
ALTER TABLE `track_on_collection` DROP FOREIGN KEY `track_on_collection_collection_id_fkey`;

-- DropForeignKey
ALTER TABLE `track_on_collection` DROP FOREIGN KEY `track_on_collection_track_id_fkey`;

-- DropForeignKey
ALTER TABLE `tracks` DROP FOREIGN KEY `tracks_author_id_fkey`;

-- AlterTable
ALTER TABLE `artists` DROP PRIMARY KEY,
    ADD COLUMN `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `username` VARCHAR(191) NOT NULL,
    MODIFY `id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `sessions` DROP COLUMN `active_expires`,
    DROP COLUMN `idle_expires`,
    ADD COLUMN `expiresAt` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `tracks` DROP COLUMN `author_id`,
    ADD COLUMN `album_id` VARCHAR(191) NOT NULL,
    ADD COLUMN `artist_id` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `users` ADD COLUMN `email_verified` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `hashed_password` VARCHAR(191) NOT NULL,
    MODIFY `birthDate` DATETIME NOT NULL;

-- DropTable
DROP TABLE `collections`;

-- DropTable
DROP TABLE `keys`;

-- DropTable
DROP TABLE `track_on_collection`;

-- CreateTable
CREATE TABLE `albums` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NULL,
    `description` VARCHAR(191) NOT NULL,
    `artist_id` VARCHAR(191) NOT NULL,
    `cover_img` VARCHAR(191) NOT NULL,
    `background_img` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `albums_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `playlists` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `cover_img` VARCHAR(191) NULL,
    `description` VARCHAR(191) NULL,
    `author_id` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tracks_on_playlists` (
    `track_id` INTEGER NOT NULL,
    `playlist_id` VARCHAR(191) NOT NULL,
    `added_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`track_id`, `playlist_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `favorite_tracks` (
    `track_id` INTEGER NOT NULL,
    `user_Id` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`track_id`, `user_Id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `artists_username_key` ON `artists`(`username`);

-- AddForeignKey
ALTER TABLE `albums` ADD CONSTRAINT `albums_artist_id_fkey` FOREIGN KEY (`artist_id`) REFERENCES `artists`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `playlists` ADD CONSTRAINT `playlists_author_id_fkey` FOREIGN KEY (`author_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tracks` ADD CONSTRAINT `tracks_album_id_fkey` FOREIGN KEY (`album_id`) REFERENCES `albums`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tracks` ADD CONSTRAINT `tracks_artist_id_fkey` FOREIGN KEY (`artist_id`) REFERENCES `artists`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tracks_on_playlists` ADD CONSTRAINT `tracks_on_playlists_track_id_fkey` FOREIGN KEY (`track_id`) REFERENCES `tracks`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tracks_on_playlists` ADD CONSTRAINT `tracks_on_playlists_playlist_id_fkey` FOREIGN KEY (`playlist_id`) REFERENCES `playlists`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `favorite_tracks` ADD CONSTRAINT `favorite_tracks_track_id_fkey` FOREIGN KEY (`track_id`) REFERENCES `tracks`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `favorite_tracks` ADD CONSTRAINT `favorite_tracks_user_Id_fkey` FOREIGN KEY (`user_Id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
