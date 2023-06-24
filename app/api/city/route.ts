import { NextResponse } from "next/server";
import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL
const KEY = process.env.NEXT_PUBLIC_RAJAONGKIR_KEY

export async function GET(request: Request) {
  
  const res = await axios.get(API_URL+'/city', {
    headers: {
      key: KEY,
    }
  })
  
  return NextResponse.json(res.data)
}