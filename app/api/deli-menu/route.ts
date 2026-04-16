import { NextResponse } from "next/server";

const SERVICE_DOMAIN = process.env.MICROCMS_SERVICE_DOMAIN;
const API_KEY = process.env.MICROCMS_API_KEY;

export async function GET() {
  if (!SERVICE_DOMAIN || !API_KEY) {
    console.error("MICROCMS env missing", {
      SERVICE_DOMAIN,
      hasApiKey: !!API_KEY,
    });
    return NextResponse.json(
      { error: "MICROCMS_SERVICE_DOMAIN or MICROCMS_API_KEY is missing" },
      { status: 500 }
    );
  }

  // 2) microCMS の API ID が deli-menu の想定
  const url = `https://${SERVICE_DOMAIN}.microcms.io/api/v1/deli-menu?orders=order`;

  try {
    const res = await fetch(url, {
      headers: {
        "X-MICROCMS-API-KEY": API_KEY,
      },
      cache: "no-store",
    });

    if (!res.ok) {
      const text = await res.text();
      console.error("microCMS response not ok", {
        status: res.status,
        body: text,
      });
      return NextResponse.json(
        {
          error: "Failed to fetch from microCMS",
          status: res.status,
          body: text,
        },
        { status: 500 }
      );
    }

    const data = await res.json();
    console.log("microCMS deli-menu success", data);

    return NextResponse.json(data.contents);
  } catch (err) {
    console.error("Unexpected error in /api/deli-menu", err);
    return NextResponse.json(
      { error: "Unexpected error in /api/deli-menu" },
      { status: 500 }
    );
  }
}
