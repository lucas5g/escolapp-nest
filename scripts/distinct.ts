const array = [
  { group: 'M1CAM', id: 5 },
  { group: 'F4AMARELO', id: 6 },
  { group: 'F4AZUL', id: 7 },
  { group: 'F4LARANJA', id: 8 },
  { group: 'F4VERDE', id: 9 },
  { group: 'F4AMARELO', id: 10 },
  { group: 'F4AZUL', id: 11 },
  { group: 'F4LARANJA', id: 12 },
  { group: 'F4VERDE', id: 13 },
  { group: 'F4AMARELO', id: 14 },
  { group: 'F4AZUL', id: 15 },
  { group: 'F4LARANJA', id: 16 },
  { group: 'F4VERDE', id: 17 }
 ];

//  const groups = array.reduce((accumulator, currentValue) => {
//   console.log({accumulator, currentValue })

//  }, [])

const groupsTest = array.map(group => group.group)
// const groups = [...new Set(groupsName)]
//  .map(group => {
//   return {
//     name: group,
//     teams: array.filter(row => row.group === group).map(row => row.id)
//   }
//  })
//  console.log(groupsName)
console.log(groupsTest)
