import { readRobotsService } from '@/server/BL/services/robot.service'
import { connectToMongo } from '@/server/connectToMongo'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default async function Page({ searchParams: { search } }) {
   await connectToMongo()
   const result = await readRobotsService({
      $or: [{ title: { $regex: search, $options: 'i' } }, { description: { $regex: search, $options: 'i' } }]
   })

   return (
      <div>
         <section className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            {result.map((robot) => (
               <Link className='flex flex-col' key={robot._id} href={`/roboti/${robot._id}`} >
                  <Image src={robot.image} alt={robot.title} width={600} height={400} />
                  {robot.title}
               </Link>
            ))}
         </section>
      </div>
   )
}
