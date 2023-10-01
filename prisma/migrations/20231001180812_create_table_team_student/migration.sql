-- CreateTable
CREATE TABLE "TeamStudent" (
    "id" SERIAL NOT NULL,
    "team_id" INTEGER NOT NULL,
    "student_ra" TEXT NOT NULL,

    CONSTRAINT "TeamStudent_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "TeamStudent" ADD CONSTRAINT "TeamStudent_team_id_fkey" FOREIGN KEY ("team_id") REFERENCES "teams"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
