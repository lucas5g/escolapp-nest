-- CreateEnum
CREATE TYPE "Genre" AS ENUM ('misto', 'mas', 'fem');

-- CreateTable
CREATE TABLE "Teams" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "group" TEXT NOT NULL,
    "genre" "Genre" NOT NULL,
    "modality_id" INTEGER,

    CONSTRAINT "Teams_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Teams" ADD CONSTRAINT "Teams_modality_id_fkey" FOREIGN KEY ("modality_id") REFERENCES "modalities"("id") ON DELETE SET NULL ON UPDATE CASCADE;
