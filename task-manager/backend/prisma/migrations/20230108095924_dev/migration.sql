-- DropIndex
DROP INDEX "Assignee_id_taskId_userId_idx";

-- DropIndex
DROP INDEX "Assignee_taskId_key";

-- DropIndex
DROP INDEX "Assignee_userId_key";

-- CreateIndex
CREATE INDEX "Assignee_taskId_userId_idx" ON "Assignee"("taskId", "userId");
