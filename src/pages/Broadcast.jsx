import React from 'react'
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import PersonIcon from '@mui/icons-material/Person';
import BroadcastImg from "../images/Untitled-Project-_2_.webp"

const Broadcast = () => {
  return (
    <main className="ml-10 flex flex-col px-5 pt-20 overflow-y-auto text-black ">
    <h1 className="text-3xl font-bold text-gray-800 pt-5 pl-10">
      Broadcast
    </h1>
    <div class="px-8 py-2">
     <div class="bg-white shadow rounded-lg overflow-hidden">
        <div class="flex justify-center">
      <img alt="Live broadcast of a person with a headset in front of a chalkboard with mathematical equations" class="w-3/4"  src={BroadcastImg} width="800"/>
            </div>
      <div class="flex justify-between items-center p-4 px-40">
       <div class="flex items-center space-x-2">
        <VolumeUpIcon/>
        <p class="text-red-500">
         ● Live
        </p>
       </div>
       <div class="flex items-center space-x-2">
        <PersonIcon/>
        <p>
         1,234
        </p>
       </div>
      </div>
     </div>
    </div>
    </main>

  )
}

export default Broadcast
