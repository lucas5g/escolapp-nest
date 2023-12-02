import { PrismaClient } from "@prisma/client";
import { games, modalities, places, teams, unities, users } from "./data";
import { setTimeout } from "timers/promises";
import { hash } from "bcrypt";

const prisma = new PrismaClient()

async function main() {

  unities.forEach(async(unity) => {
    await prisma.unity.upsert({
      where: { id: unity.id },
      create: unity,
      update: unity
    })
  })
  await setTimeout(2000)
  modalities.forEach(async (modality) => {
    await prisma.modality.upsert({
      where: { id: modality.id },
      create: modality,
      update: modality
    })
  })
   
  teams.forEach(async (team) => {
    await prisma.team.upsert({
      where: { id: team.id },
      create: team,
      update: team
    })
  })

  users.forEach(async user => {
    user.password = await hash(user.password, 12)

    await prisma.user.upsert({
      where: { id: user.id },
      create: user,
      update: user
    })
  })

  places.forEach(async place => {
    await prisma.place.upsert({
      where: { id: place.id },
      create: place,
      update: place
    })
  })

  await setTimeout(5000)
  games.forEach(async game => {
    await prisma.game.upsert({
      where:{id: game.id},
      create:game,
      update:game
    })
  })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })