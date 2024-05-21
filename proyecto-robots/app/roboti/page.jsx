import RobotForm from '@/components/RobotForm'
import {  readRobotsService } from '@/server/BL/services/robot.service'
import { connectToMongo } from '@/server/connectToMongo'
import { unstable_noStore } from 'next/cache'
import Image from 'next/image'
import Link from 'next/link'


export default async function Roboti() {
  // unstable_noStore()
  await connectToMongo()
  const robots = await readRobotsService()
  //revisar cambiar por fotos reales de robots
  const robotsList = robots.map((robot) => ({...robot, image: '/1.jpg'}))

  return (
    <div>

      <section className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {robotsList.map((robot) => (
          <Link className='flex flex-col' key={robot._id} href={`/roboti/${robot._id}`} >
            <Image src={robot.image} alt={robot.title} width={600} height={400} />
            {robot.title}
          </Link>
        ))}
      </section>
      <RobotForm/>

    </div>
  )
}
