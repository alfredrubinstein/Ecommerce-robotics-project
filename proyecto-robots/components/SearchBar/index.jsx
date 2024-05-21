"use client"

import { useRouter } from "next/navigation"

export default function SearchBar() {
   const router = useRouter()
   
   const handleSearch = e => {
      if (e.target.value) {
         
         router.push(`/roboti/result?search=${e.target.value}`)
      } else {
         router.push('/roboti')
      }
   }

   return (
      <div className="p-4 flex justify-center">
         <input type="text" onChange={handleSearch} placeholder="search" className="rounded-md p-2" />
      </div>
   )
}
