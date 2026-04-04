import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();

    console.log(body);

    return NextResponse.json({
      message: "Success",
      data: body,
    });
  } catch (error) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}