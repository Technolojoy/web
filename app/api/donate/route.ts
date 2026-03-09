import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  return NextResponse.json({
    success: true,
    message: "Donation intent created (Stripe placeholder)",
    donationType: body.type ?? "direct"
  });
}
