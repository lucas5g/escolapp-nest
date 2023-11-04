import groups from './groups.json'
import gamesTeams from './gamesTeams.json'


const points = groups
  .map(group => {
    return {
      name: group.name,
      teams: gamesTeams.filter(gameTeam => group.teams.find(team => team === gameTeam.id))
    }
  }).map(group => {
    return {
      name: group.name,
      totalPoints: group.teams.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.points
      },0)
    }    
  }).sort((a, b) => a.totalPoints > b.totalPoints ? -1 : 1)
  // console.log(points)
// return 

// console.log(groups.slice(0,5))
// console.log('groups => ',groups.slice(0,3))
// console.log('gamesTeams => ', gamesTeams.slice(0,3))

const show = 20
console.log(groups.slice(0, show))
console.log('points => ', points.slice(0, 3))

