/*
  Warnings:

  - You are about to drop the column `collection_id` on the `tracks` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `tracks` DROP FOREIGN KEY `tracks_collection_id_fkey`;

-- AlterTable
ALTER TABLE `tracks` DROP COLUMN `collection_id`;

-- CreateTable
CREATE TABLE `TrackCollection` (
    `track_id` INTEGER NOT NULL,
    `collection_id` VARCHAR(191) NOT NULL,
    `added_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`track_id`, `collection_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `TrackCollection` ADD CONSTRAINT `TrackCollection_track_id_fkey` FOREIGN KEY (`track_id`) REFERENCES `tracks`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TrackCollection` ADD CONSTRAINT `TrackCollection_collection_id_fkey` FOREIGN KEY (`collection_id`) REFERENCES `collections`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
