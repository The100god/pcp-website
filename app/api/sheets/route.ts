// app/api/sheets.ts
import { appendToSheet, readSheet } from "../../../lib/googleSheets";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    // console.log("POST body:", body);

    const { sheet, data } = body;
    if (!sheet || !data) {
      return new Response(JSON.stringify({ error: "Missing sheet or data" }), {
        status: 400,
      });
    }

    await appendToSheet(sheet, [data]);
    return new Response(JSON.stringify({ message: "Saved" }), {
      status: 200,
    });
  } catch (error) {
    console.error("POST Error:", error);
    return new Response(JSON.stringify({ error: "Failed to save data" }), {
      status: 500,
    });
  }
}

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const sheet = searchParams.get("sheet");

    if (!sheet) {
      return new Response(JSON.stringify({ error: "Missing sheet" }), {
        status: 400,
      });
    }

    const sheetData = await readSheet(sheet);
    return new Response(JSON.stringify(sheetData), {
      status: 200,
    });
  } catch (error) {
    console.error("GET Error:", error);
    return new Response(JSON.stringify({ error: "Failed to read data" }), {
      status: 500,
    });
  }
}