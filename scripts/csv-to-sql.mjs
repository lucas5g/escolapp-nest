import csv from 'csvtojson'

import path from "path"

async function main(){
  const file = path
  // console.log(file.)
  const array = await csv().fromFile('teams.csv')
  console.log(array)
  
}

main()
