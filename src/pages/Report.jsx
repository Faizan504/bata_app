import React from 'react'
import PostAddIcon from '@mui/icons-material/PostAdd';

const Report = () => {
  return (
    <main className="ml-10 flex flex-col p-5 py-20 overflow-y-auto text-black ">
      <h1 className="text-3xl font-bold text-gray-800 pt-5 pl-10">
        Report
      </h1>
      <div class="p-4 ">
        <div class="bg-white p-4 rounded shadow ">
          <div class="flex space-x-4 mb-4">
            <button class="bg-red-500 text-white px-4 py-2 rounded">Single Reports</button>
            <button class="bg-gray-200 text-gray-700 px-4 py-2 rounded">Scheduled Reports</button>
            <button class="bg-red-500 text-white px-4 py-2 rounded">+ New Report</button>
          </div>
          <div class="border rounded p-8 flex flex-col items-center justify-center">
            <div class="flex border rounded-full bg-gray-300 cursor-pointer p-4 h-42 w-42 flex-col items-center justify-center">
            <PostAddIcon class="text-4xl w-32 h-32" />
            </div>
            <p class="text-lg font-semibold mb-2">Get reports on your content!</p>
            <p class="text-gray-500">Click New Report to create one.</p>
          </div>
        </div>
      </div>
      </main>
  )
}

export default Report
