import { Modality, Team, Unity, User } from "@prisma/client"

export const unities: Unity[] = [
  {
    id: 1,
    name: 'Belo Horizonte',
    spreedsheetId: 'id planilha',
  },
  {
    id: 2,
    name: 'Contagem',
    spreedsheetId: process.env.SPREAD_SHEET_ID,
  }
]
export const modalities: Modality[] = [
  {
    id: 1,
    name: 'Fut test',
    members_quantity: 2,
    teams_quantity: 2,
    unityId: 1,
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
    unityId: 1
  }
]

export const teams: Team[] = [
  {
    id: 1,
    "name": "team test 1",
    "group": "group-test",
    "genre": "misto",
    "modality_id": 1,
    "unityId": 1,
    "students": ["C123123", "C321321"]
  },
  {
    id: 2,
    "name": "team test 2",
    "group": "group-test",
    "genre": "misto",
    "modality_id": 1,
    "unityId": 1,
    "students": ["C123123", "C321321"]
  }
]

export const games = [
  {
    id: 1,
    date: new Date(),
    startHours: '08:00',
    endHours: '09:00',
    teams: [
      {
        "id": 288,
        "goals": 3,
        "points": 4,
        "fairPlay": 1
      },
      {
        "id": 311,
        "goals": 1,
        "points": 2,
        "fairPlay": 1
      }
    ],
    place_id: 1,
    modality_id: 1,
    user_id: 1,
    unityId: 1,


  }
]