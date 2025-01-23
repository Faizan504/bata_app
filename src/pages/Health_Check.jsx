import React from 'react'
import SearchIcon from '@mui/icons-material/Search';

const Health_Check = () => {
  return (
    <div className="ml-10 flex flex-col p-5 py-10 overflow-y-auto text-black mt-10">
      <h1 className="text-3xl font-bold text-gray-800 pt-5 pl-10">
        Health Check
      </h1>
      <main class="flex-1 p-6">
      
      <div class="bg-white shadow rounded-lg p-4">
        <div class="flex justify-between items-center mb-4">
            <button class="bg-gray-200 text-gray-600 px-3 py-3 rounded whitespace-nowrap">Add Filter</button>
            <div class="flex items-center space-x-2 w-full">
              <div class="relative flex justify-between items-center border border-gray-300 rounded-full p-2 ml-2 w-full">
                <SearchIcon/>
                <input class="w-full px-2 outline-none" placeholder="Search by name..." type="text"/>
              </div>
              <button class="bg-gray-200 text-gray-600 px-6 py-3 rounded whitespace-nowrap">Health Check Report</button>
            </div>
          </div>
          
        <table class="w-full">
          <thead>
            <tr class="bg-gray-100">
              <th class="p-2 text-left"><input type="checkbox"/></th>
              <th class="p-2 text-left">Information</th>
              <th class="p-2 text-left">Date</th>
              <th class="p-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-b">
              <td class="p-2"><input type="checkbox"/></td>
              <td class="p-2 flex items-center space-x-2">
                <img alt="WFC TESTING icon" class="h-10 w-10" height="40" src="https://storage.googleapis.com/a1aa/image/eIFCHkZ8Ky1PWySHTDUehuJyaeDFat7mq6Bz8CRaqxwB72OoA.jpg" width="40"/>
                <div>
                  <p class="font-semibold">Player WFC TESTING</p>
                  <p class="text-gray-600 text-sm">This device is not rooted. If you wish to have more advanced features like: Remote View, Remote Reboot, and Remote Player Updates to be available, please enable root access to the Player App.</p>
                </div>
              </td>
              <td class="p-2 text-gray-600">Updated at: Jan 13, 2025 5:57 PM</td>
              <td class="p-2">
                <button class="bg-blue-500 text-white px-6 py-2 rounded whitespace-nowrap">View Player Information</button>
              </td>
              
            </tr>
            <tr>
              <td class="p-2"><input type="checkbox"/></td>
              <td class="p-2 flex items-center space-x-2">
                <img alt="Sheraz icon" class="h-10 w-10" height="40" src="https://storage.googleapis.com/a1aa/image/fK9lkp3Bmb1rFypudgOhfqrvEMb1FJnoJsnYEGr6W5HjdbHUA.jpg" width="40"/>
                <div>
                  <p class="font-semibold">Player Sheraz</p>
                  <p class="text-gray-600 text-sm">This device is not rooted. If you wish to have more advanced features like: Remote View, Remote Reboot, and Remote Player Updates to be available, please enable root access to the Player App.</p>
                </div>
              </td>
              <td class="p-2 text-gray-600">Updated at: Jan 13, 2025 6:00 PM</td>
              <td class="p-2">
                <button class="bg-blue-500 text-white px-6 py-2 rounded">View Player Information</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
      </div>
  )
}

export default Health_Check
