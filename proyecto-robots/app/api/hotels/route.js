import { readrobotsService } from "@/server/BL/services/robot.service";
import { connectToMongo } from "@/server/connectToMongo";
import { NextResponse } from "next/server";

export const GET = async () => {
   try {
      await connectToMongo()
      const robots = await readrobotsService()
      return NextResponse.json(robots)
   } catch (error) {
      console.log(error);
   }
}

export const POST = async () => {

}