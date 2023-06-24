import { NextResponse } from "next/server";
import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL
const KEY = process.env.NEXT_PUBLIC_RAJAONGKIR_KEY

export async function POST(request: Request) {
  const data = await request.json()
  
  const res = await axios.post(API_URL+'/cost', data, {
    headers: {
      key: KEY,
    },
  })
  
  return NextResponse.json(res.data)
}