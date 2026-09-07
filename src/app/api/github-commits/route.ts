import { NextResponse } from "next/server";

const OWNER = "arham-ali1323";
const REPO = "Arham-pro-portfolio";

export async function GET() {
  try {
    const response = await fetch(
      `https://api.github.com/repos/${OWNER}/${REPO}/contributors?per_page=100`,
      {
        headers: {
          Accept: "application/vnd.github+json",
        },
        next: {
          revalidate: 60,
        },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch GitHub contributors");
    }

    const contributors = await response.json();

    const commitCount = contributors.reduce(
      (total: number, contributor: { contributions?: number }) =>
        total + (contributor.contributions || 0),
      0
    );

    return NextResponse.json({
      commits: commitCount,
    });
  } catch (error) {
    console.error("GitHub commit error:", error);

    return NextResponse.json(
      {
        commits: 159,
      },
      { status: 500 }
    );
  }
}