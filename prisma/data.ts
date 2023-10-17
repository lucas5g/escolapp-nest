export const unities = [
  {
    id: 1,
    name: 'contagem'
  }
]
export const modalities = [
  {
    id:1,
    name: 'test-modality',
    members_quantity:2,
    teams_quantity:2,
    unity_id:1

  }
]

export const users = [
  {
    id: 1,
    email: 'admin@mail.com',
    password: 'qweqwe',
    unity_id: 1
  }
]

export const places = [
  {
    id: 1,
    name: 'place-test',
    unity_id: 1
  }
]

export const teams = [
  {
    "name":"team test 1",
    "group":"group-test",
    "genre":"misto",
    "modality_id":1,
    "unity_id": 1,
    "students":["C123123","C321321"]
  },
  {
    "name":"team test 2",
    "group":"group-test",
    "genre":"misto",
    "modality_id":1,
    "unity_id": 1,
    "students":["C123123","C321321"]
  }
]