"use client"
import Image from 'next/image';
import { Button } from '@/shared/ui/button';
import Post from '@/widgets/post/post';
import { axiosRequest } from '@/shared/utils/axiosRequest';
import { useEffect, useState } from 'react';
export default function HomePage() {
  const [data, setData] = useState([]) 
  async function getPosts() {
    try{
      const {data} = await axiosRequest("/Post/get-posts")
      setData(data.data)
    }catch(error){
      console.log(error)
    }
  }
   useEffect(() => {
    getPosts()
  }, [])
  
  console.log(data)
  return (
    <div className="flex w-[1400] bg-black text-white">
      <main className="flex-1 p-4 flex flex-col items-center">
        <div className="flex space-x-4 mb-6 overflow-x-auto">
          {[...Array(7)].map((_,index) => (
            <div key={index} className="w-16 h-16 rounded-full border-2 border-pink-500 overflow-hidden">
              <Image src="/profile-placeholder.png" width={64} height={64} alt="Story" />
            </div>
          ))}
        </div>
          <div className="bg-gray-900 p-4 rounded-lg w-full max-w-lg">
          <div className="flex items-center mb-4">
            <Image src="/profile-placeholder.png" width={40} height={40} alt="User" className="rounded-full" />
            <span className="ml-2">asiaplustj</span>
          </div>
          <Image src="/instagram-mockup.png" width={500} height={500} alt="Post" className="rounded" />
        </div>
        </main> 
        <aside className="hidden md:block w-64 p-4 border-l border-gray-700">
        <h2 className="text-lg font-semibold mb-4">Recommended for you</h2>
        <div className="space-y-4">
         {["user1", "user2", "user3"].map((user) => (
            <div key={user} className="flex items-center justify-between">
              <div className="flex items-center">
                <Image src="/profile-placeholder.png" width={40} height={40} alt="User" className="rounded-full" />
                <span className="ml-2">{user}</span>
              </div>
              <Button variant="outline">Follow</Button>
            </div>
          ))}
          </div>
      </aside>
    </div>
  );
}
  