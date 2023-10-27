/*
  Warnings:

  - You are about to drop the `TrackCollection` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `TrackCollection` DROP FOREIGN KEY `TrackCollection_collection_id_fkey`;

-- DropForeignKey
ALTER TABLE `TrackCollection` DROP FOREIGN KEY `TrackCollection_track_id_fkey`;

-- DropTable
DROP TABLE `TrackCollection`;

-- CreateTable
CREATE TABLE `track_on_collection` (
    `track_id` INTEGER NOT NULL,
    `collection_id` VARCHAR(191) NOT NULL,
    `added_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`track_id`, `collection_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `track_on_collection` ADD CONSTRAINT `track_on_collection_track_id_fkey` FOREIGN KEY (`track_id`) REFERENCES `tracks`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `track_on_collection` ADD CONSTRAINT `track_on_collection_collection_id_fkey` FOREIGN KEY (`collection_id`) REFERENCES `collections`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
