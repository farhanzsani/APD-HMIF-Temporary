ALTER TABLE `auditlog` MODIFY COLUMN `createdAt` timestamp NOT NULL DEFAULT (now());--> statement-breakpoint
ALTER TABLE `division` MODIFY COLUMN `createdAt` timestamp NOT NULL DEFAULT (now());--> statement-breakpoint
ALTER TABLE `evaluationevent` MODIFY COLUMN `startDate` timestamp NOT NULL;--> statement-breakpoint
ALTER TABLE `evaluationevent` MODIFY COLUMN `endDate` timestamp NOT NULL;--> statement-breakpoint
ALTER TABLE `evaluationevent` MODIFY COLUMN `createdAt` timestamp NOT NULL DEFAULT (now());--> statement-breakpoint
ALTER TABLE `evaluationscore` MODIFY COLUMN `createdAt` timestamp NOT NULL DEFAULT (now());--> statement-breakpoint
ALTER TABLE `evaluation` MODIFY COLUMN `createdAt` timestamp NOT NULL DEFAULT (now());--> statement-breakpoint
ALTER TABLE `indicator` MODIFY COLUMN `createdAt` timestamp NOT NULL DEFAULT (now());--> statement-breakpoint
ALTER TABLE `period` MODIFY COLUMN `createdAt` timestamp NOT NULL DEFAULT (now());--> statement-breakpoint
ALTER TABLE `proker` MODIFY COLUMN `createdAt` timestamp NOT NULL DEFAULT (now());--> statement-breakpoint
ALTER TABLE `subdivision` MODIFY COLUMN `createdAt` timestamp NOT NULL DEFAULT (now());--> statement-breakpoint
ALTER TABLE `user` MODIFY COLUMN `passwordUpdatedAt` timestamp;--> statement-breakpoint
ALTER TABLE `user` MODIFY COLUMN `createdAt` timestamp NOT NULL DEFAULT (now());--> statement-breakpoint
ALTER TABLE `indicator` ADD `category` varchar(255) NOT NULL;--> statement-breakpoint
ALTER TABLE `indicator` DROP COLUMN `type`;--> statement-breakpoint
ALTER TABLE `indicator` DROP COLUMN `evaluatorRole`;--> statement-breakpoint
ALTER TABLE `indicator` DROP COLUMN `evaluateeRole`;