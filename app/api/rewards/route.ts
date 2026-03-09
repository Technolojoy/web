import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    levels: ["Explorer", "Recycler", "TechHero", "PlanetGuardian"],
    incentives: ["$10 coupon after 3 devices", "$25 reward after 10 devices"]
  });
}
