import { env } from "@/utils/env"
import { Modality, Setup, Team, Unity, User } from "@prisma/client"
import { format } from 'date-fns'
export const unities: Unity[] = [
  {
    id: 1,
    name: 'Belo Horizonte',
    spreedsheetId: 'id planilha',
    createdAt: new Date(),
    updatedAt: new Date(),
    
  },
  {
    id: 2,
    name: 'Contagem',
    spreedsheetId: env.spreadSheetId,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 3,
    name: 'outra  unidade',
    spreedsheetId: 'id',
    createdAt: new Date(),
    updatedAt: new Date(),
  }
]
export const modalities: Modality[] = [
  {
    id: 1,
    name: 'Fut test',
    membersQuantity: 2,
    teamsQuantity: 2,
    unityId: 2,
    type: 'collective'

  }
]

export const users: User[] = [
  {
    id: 1,
    email: 'test@mail.com',
    password: 'qweqwe',
    unityId: 1,
    profile: 'admin'
  },
  {
    id: 2,
    email: 'admin@mail.com',
    password: 'qweqwe',
    unityId: 1,
    profile: 'admin'
  },
  {
    id: 3,
    email: 'mediador@mail.com',
    password: 'qweqwe',
    unityId: 1,
    profile: 'judge'
  }
]

export const places = [
  {
    id: 1,
    name: 'place-test',
    unityId: 2
  }
]

export const teams: Team[] = [
  {
    id: 1,
    "name": "team test 1",
    "group": "group-test",
    "genre": "misto",
    "modalityId": 1,
    "unityId": 2,
    "students": ["C123123", "C321321"]
  },
  {
    id: 2,
    "name": "team test 2",
    "group": "group-test",
    "genre": "misto",
    "modalityId": 1,
    "unityId": 2,
    "students": ["C123123", "C321321"]
  }
]

export const games = [
  {
    id: 1,
    date: format(new Date(), 'yyyy-MM-dd'),
    startHours: '08:00',
    endHours: '09:00',
    teams: [
      {
        "id": 1,
        "goals": 3,
        "points": 4,
        "fairPlay": 1
      },
      {
        "id": 2,
        "goals": 1,
        "points": 2,
        "fairPlay": 1
      }
    ],
    placeId: 1,
    modalityId: 1,
    userId: 1,
    unityId: 2,


  }
]

export const setups:Setup[] = [
  {
    id:1,
    documentLink:'some-id',
    unityId:2
  }
]