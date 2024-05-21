import { connectToMongo } from "@/server/connectToMongo";
import styles from "./style.module.scss";
import { addRobotsToDB, robotsJson } from "@/server/test";
import { readRobotsService, createRobotService } from "@/server/BL/services/robot.service";

export default async function Home() {
  await connectToMongo();
  // await addRobotsToDB()
// const createdRobots = await createRobotService(robotsJson);
  const robots = await readRobotsService().lean();

  console.table(robots);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      home
      
    </main>
  );
}
