import 'dotenv/config';
import {
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { google } from 'googleapis';
import { env } from './env';

interface GoogleSheets {
  spreadsheetId: string;
  range: string;
}

export async function googleSheets({ spreadsheetId, range }: GoogleSheets) {
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_id: env.googleClientId,
      client_email: env.googleClientEmail,
      private_key: env.googlePrivateKey,
    },
    scopes: 'https://www.googleapis.com/auth/spreadsheets',
  });

  const { spreadsheets } = google.sheets({ version: 'v4', auth });

  try {
    const { data } = await spreadsheets.values.get({
      spreadsheetId,
      range,
    });

    const values: any[] = sheetsToArrayObjects(data.values);

    return values;
  } catch (error) {
    if (error?.errors[0]?.message) {
      throw new NotFoundException(
        'Unidadade não registrada na planilha ou intervalo de busca desconfigurado.',
      );
    }

    throw new InternalServerErrorException('Erro na integração com a planilha');
  }
}

function sheetsToArrayObjects(data: any[][] | undefined | null) {
  if (!data) return [];
  const headers: string[] = data[0];

  const array = data
    .filter((_, i) => i > 0)
    .map((row) => {
      const object: any = {};

      headers.forEach((header, i) => {
        const cell = isNaN(row[i]) ? row[i] : Number(row[i]);
        object[header] = cell;
      });

      return object;
    });
  return array;
}
