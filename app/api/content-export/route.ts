import { NextResponse } from "next/server";
import { getContentExportParsed } from "@/lib/content-export";

export async function GET() {
  const data = getContentExportParsed();
  return NextResponse.json({
    success: true,
    pageCount: data.pages.length,
    sectionCount: data.sections.length,
    pages: data.pages
  });
}
