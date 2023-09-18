-- AlterTable
ALTER TABLE "teams" ADD COLUMN     "unity_id" INTEGER;

-- AddForeignKey
ALTER TABLE "teams" ADD CONSTRAINT "teams_unity_id_fkey" FOREIGN KEY ("unity_id") REFERENCES "unities"("id") ON DELETE SET NULL ON UPDATE CASCADE;
