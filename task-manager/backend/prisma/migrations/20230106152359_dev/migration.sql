-- DropIndex
DROP INDEX "Assignee_taskId_userId_idx";

-- CreateIndex
CREATE INDEX "Assignee_id_taskId_userId_idx" ON "Assignee"("id", "taskId", "userId");
