import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const condition = String(body.condition || "").toLowerCase();
  let estimate = "$2 - $10";
  if (condition.includes("work")) estimate = "$50 - $600+";
  else if (condition.includes("broken")) estimate = "$5 - $40";

  return NextResponse.json({
    estimate,
    suggestedAction: `Estimated for ${body.brand ?? "device"} ${body.model ?? ""}.`
  });
}
