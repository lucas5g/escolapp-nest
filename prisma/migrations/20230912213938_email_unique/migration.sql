-- CreateTable
CREATE TABLE "unities" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "unities_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "places" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "unity_id" INTEGER,

    CONSTRAINT "places_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "modalities" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "members_quantity" INTEGER NOT NULL,
    "teams_quantity" INTEGER NOT NULL,
    "unity_id" INTEGER,

    CONSTRAINT "modalities_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "unity_id" INTEGER,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- AddForeignKey
ALTER TABLE "places" ADD CONSTRAINT "places_unity_id_fkey" FOREIGN KEY ("unity_id") REFERENCES "unities"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "modalities" ADD CONSTRAINT "modalities_unity_id_fkey" FOREIGN KEY ("unity_id") REFERENCES "unities"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_unity_id_fkey" FOREIGN KEY ("unity_id") REFERENCES "unities"("id") ON DELETE SET NULL ON UPDATE CASCADE;
