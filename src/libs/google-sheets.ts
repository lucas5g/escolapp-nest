import { NotFoundException } from "@nestjs/common";
import { google } from "googleapis";
import { env } from "src/utils/env";

export async function googleSheets({range}:{range:string}){
  const auth = new google.auth.GoogleAuth({
    credentials:{
      client_id: env.googleClientId,
      client_email: env.googleClientEmail,
      private_key: env.googlePrivateKey
    },
    scopes: 'https://www.googleapis.com/auth/spreadsheets'
  })

  const { spreadsheets } = google.sheets({version: 'v4', auth})

  try{

    const { data } = await spreadsheets.values.get({
      spreadsheetId: env.spreadSheetId,
      range
    })
    
    const values = sheetsToArrayObjects(data.values)
    
    return values
  }catch(error){
    throw new NotFoundException('Unidadade não registrada na planilha')
  }
}

function sheetsToArrayObjects(data: any[][] | undefined | null) {

  if (!data) return []
  const headers: string[] = data[0]

  const array = data
    .filter((_, i) => i > 0)
    .map(row => {
      const object: any = {}

      headers.forEach((header, i) => {
        const cell = isNaN(row[i]) ? row[i] : Number(row[i])
        object[header] = cell
      })

      return object
    })
  return array
}