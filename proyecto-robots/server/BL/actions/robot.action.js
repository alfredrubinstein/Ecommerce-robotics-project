"use server"

import { connectToMongo } from "@/server/connectToMongo"
import { createRobotService } from "../services/robot.service"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"


export const createRobotAction = async (fd) => {
   const body = Object.fromEntries(fd)

   try {
      await connectToMongo()
      await createRobotService(body)
      revalidatePath('/roboti')
   } catch (error) {
      console.log({ error });
   }
   redirect('/roboti')
} 