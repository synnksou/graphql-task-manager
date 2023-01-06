/*
  Warnings:

  - A unique constraint covering the columns `[taskId]` on the table `Assignee` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[userId]` on the table `Assignee` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Assignee_taskId_key" ON "Assignee"("taskId");

-- CreateIndex
CREATE UNIQUE INDEX "Assignee_userId_key" ON "Assignee"("userId");
