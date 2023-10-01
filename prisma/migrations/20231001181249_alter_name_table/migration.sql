/*
  Warnings:

  - You are about to drop the `TeamStudent` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "TeamStudent" DROP CONSTRAINT "TeamStudent_team_id_fkey";

-- DropTable
DROP TABLE "TeamStudent";

-- CreateTable
CREATE TABLE "teams_students" (
    "id" SERIAL NOT NULL,
    "team_id" INTEGER NOT NULL,
    "student_ra" TEXT NOT NULL,

    CONSTRAINT "teams_students_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "teams_students" ADD CONSTRAINT "teams_students_team_id_fkey" FOREIGN KEY ("team_id") REFERENCES "teams"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
