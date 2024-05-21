import { readRobotByIdService, readRobotsService } from '@/server/BL/services/robot.service'
import { connectToMongo } from '@/server/connectToMongo'
import Image from 'next/image'


export async function generateStaticParams() {
   await connectToMongo()
   const all = await readRobotsService()
   return all.map((robot) => ({ id: String(robot._id) }))
}

export default async function page({ params: { id } }) {
   await connectToMongo()
   const robot = await readRobotByIdService(id)

   return (
      <div>
         <h1>{robot.title}</h1>
         <p>{robot.description}</p>
         <Image src={robot.image} alt={robot.title} width={600} height={400} />
      </div>
   )
}
