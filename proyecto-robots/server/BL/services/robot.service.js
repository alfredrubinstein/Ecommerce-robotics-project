import { createRobot, readRobotsById, readRobots } from "@/server/DL/controllers/robot.controller";


export const createRobotService = (data) => createRobot(data)
export const readRobotsService = (filter) => readRobots(filter)
export const readRobotByIdService = (id) => readRobotsById(id)