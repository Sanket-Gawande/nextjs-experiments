import { writeFileSync } from "fs";
import { NextRequest, NextResponse } from "next/server";

//test if fs works on vercel and file is persisted across req
export function POST(req :NextRequest){
    const filename =crypto.randomUUID()+'.txt';1
writeFileSync("public/"+filename, filename);
console.info(filename);

return NextResponse.json({filename :"http://localhost:3000/"+filename})
}