// lib/googleSheets.ts
// @typescript-eslint/no-explicit-any
import { google } from "googleapis";

const SCOPES = ["https://www.googleapis.com/auth/spreadsheets"];


// console.log("Client email:", process.env.GOOGLE_CLIENT_EMAIL);
// console.log("Private key exists:", !!process.env.GOOGLE_PRIVATE_KEY);
const auth = new google.auth.JWT({
  email: process.env.GOOGLE_CLIENT_EMAIL!,
  key: process.env.GOOGLE_PRIVATE_KEY!.replace(/\\n/g, "\n"),
  scopes: SCOPES,
}
);

const sheets = google.sheets({ version: "v4", auth });

export async function appendToSheet(sheetName: string, values: string[][]) {
//     console.log("sheet", values)
//     console.log("Using spreadsheet ID:", process.env.NEXT_PUBLIC_SHEET_ID);
// console.log("Using sheet/tab name:", sheetName);
// console.log("Using values:", values);
  await sheets.spreadsheets.values.append({
    spreadsheetId: process.env.NEXT_PUBLIC_SHEET_ID!,
    range: `${sheetName}!A1`,
    valueInputOption: "RAW",
    insertDataOption: "INSERT_ROWS",
    requestBody: {
      values,
    },
  });
}

export async function readSheet(sheetName: string) {
  const response = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.NEXT_PUBLIC_SHEET_ID!,
    range: sheetName,
  });
  const rows = response.data.values || [];
  const headers = rows[0] || [];
  const dataRows = rows.slice(1);
  return { headers, rows: dataRows };
}
