import { PrismaClient } from "@prisma/client";
import { modalities, unities, users } from "./data";
import { setTimeout } from "timers/promises";
import { hash } from "bcrypt";

const prisma = new PrismaClient()

async function main() {

  unities.forEach(async unity => {
    await prisma.unity.upsert({
      where: {id: unity.id},
      create: unity,
      update: unity
    })
  })

  modalities.forEach(async (modality) => {
    await setTimeout(1000)
    await prisma.modality.upsert({
      where: { id: modality.id },
      create: modality,
      update: modality
    })
  })

  users.forEach(async user => {
    user.password = await hash(user.password, 12)
    
    await prisma.user.upsert({      
      where:{ id: user.id},
      create: user,
      update: user
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