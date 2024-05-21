import { RobotModel } from "../models/robots.model"

export const readRobots = (filter) => RobotModel.find(filter)
export const readRobotsById = (id) => RobotModel.findById(id)
export const createRobot = (data) => RobotModel.create(data)





