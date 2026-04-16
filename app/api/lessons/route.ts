import { NextResponse } from "next/server";

const SERVICE_DOMAIN = process.env.MICROCMS_SERVICE_DOMAIN;
const API_KEY = process.env.MICROCMS_API_KEY;

type LessonItem = {
  id: string;
  title: string;
  date: string;
  capacity: number;
  price: string;
  image?: {
    url: string;
    width: number;
    height: number;
  };
  applyUrl: string;
  order?: number;
};

type MicroCMSListResponse<T> = {
  contents: T[];
  totalCount: number;
  offset: number;
  limit: number;
};

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

  // API ID: lessons（指定通り）
  // 並び順は order（数値フィールド）を使う
  const url = `https://${SERVICE_DOMAIN}.microcms.io/api/v1/lessons?orders=order`;

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

    const data = (await res.json()) as MicroCMSListResponse<LessonItem>;
    return NextResponse.json<LessonItem[]>(data.contents);
  } catch (err) {
    console.error("Unexpected error in /api/lessons", err);
    return NextResponse.json(
      { error: "Unexpected error in /api/lessons" },
      { status: 500 }
    );
  }
}
