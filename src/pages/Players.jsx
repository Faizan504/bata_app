import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import EditNoteOutlinedIcon from '@mui/icons-material/EditNoteOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import SettingsIcon from '@mui/icons-material/Settings';

const Players = () => {
  return (
    <div className="ml-10 flex flex-col p-5 py-10 overflow-y-auto text-black mt-10">
      <h1 className="text-3xl font-bold text-gray-800 pt-5 pl-10">
        Players
      </h1>

        <div class="flex-grow p-4">
          <div class="bg-white shadow rounded-lg p-4">
            <div class="flex justify-between items-center mb-4">
              <div class="flex space-x-4">
                <button class="bg-red-600 text-white px-4 py-2 rounded">Players</button>
                <button class="bg-gray-200 text-gray-600 px-4 py-2 rounded">Dashboard</button>
              </div>
            </div>
            <div class="flex justify-between items-center mb-4">
              <div class="flex space-x-4">
                <div class="relative">
                  <button class="bg-red-600 text-white px-4 py-2 rounded flex items-center" >
                   <AddIcon/> Setup Player
                  </button>
                  <div id="dropdownMenu" class="absolute mt-2 w-48 bg-white shadow rounded hidden">
                    <a href="#" class="block px-4 py-2 hover:bg-gray-100">Add New Player</a>
                    <a href="#" class="block px-4 py-2 hover:bg-gray-100">Import Players</a>
                    <a href="#" class="block px-4 py-2 hover:bg-gray-100">Manage Players</a>
                  </div>
                </div>

                <div class="relative">
                  <input class="border rounded-full px-4 py-2 w-96" placeholder="Search by name..." type="text"/>
                  <i class="fas fa-search absolute right-3 top-3 text-gray-500"></i>
                </div>
              </div>
              <button class="bg-red-600 text-white px-4 py-2 rounded">Player Report</button>
            </div>
            <div class="overflow-x-auto">
              <table class="min-w-full bg-white">
                <thead>
                  <tr>
                    <th class="py-2 px-4 border-b flex items-center">
                      <input class="mr-2" type="checkbox"/>
                      Player Name
                    </th>
                    <th class="py-2 px-4 border-b"></th>
                    <th class="py-2 px-4 border-b"></th>
                    <th class="py-2 px-4 border-b"></th>
                    <th class="py-2 px-4 border-b"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="py-2 px-4 border-b flex items-center">
                      <input class="mr-2" type="checkbox"/>
                      <div class="flex flex-col">
                        <span class="font-semibold">Android TV Device</span>
                        <span class="text-sm text-gray-500">Online</span>
                        <span class="text-sm text-gray-500">Original Android Player 10.0.3.3 Deploytime</span>
                      </div>
                    </td>
                    <td class="py-2 px-4 border-b">
                      <button class="bg-blue-500 text-white px-2 py-1 rounded">Deploy</button>
                    </td>
                    <td class="py-2 px-4 border-b">
                      
                    </td>
                    <td class="py-2 px-4 border-b">
                    <div class="flex iltems-center space-x-6 pl-1">
                        <EditNoteOutlinedIcon/>
                        <DeleteOutlineOutlinedIcon/>
                        <SettingsIcon/>
                      </div>
                      <span class="text-sm text-gray-500">Last Seen 6 mins ago</span>
                    </td>
                    <td class="py-2 px-4 border-b">
                      <img alt="Player Image" class="h-10" height="40" src="https://storage.googleapis.com/a1aa/image/61tdtMMgJKK6CxNuUT9W0Eg6aAHmZRq7mrm0Cka7BI1lp2BF.jpg" width="100"/>
                    </td>
                  </tr>
                  <tr>
                    <td class="py-2 px-4 border-b flex items-center">
                      <input class="mr-2" type="checkbox"/>
                      <div class="flex flex-col">
                        <span class="font-semibold">WTESTING</span>
                        <span class="text-sm text-gray-500">Online</span>
                        <span class="text-sm text-gray-500">Original Android Player 10.0.3.3 Deploytime</span>
                      </div>
                    </td>
                    <td class="py-2 px-4 border-b">
                      <button class="bg-blue-500 text-white px-2 py-1 rounded">Deploy</button>
                    </td>
                    <td class="py-2 px-4 border-b">
                      
                    </td>
                    <td class="py-2 px-4 border-b">
                    <div class="flex iltems-center space-x-6 pl-1">
                        <EditNoteOutlinedIcon/>
                        <DeleteOutlineOutlinedIcon/>
                        <SettingsIcon/>
                      </div>
                      <span class="text-sm text-gray-500">Last Seen 6 mins ago</span>
                    </td>
                    <td class="py-2 px-4 border-b">
                      <img alt="Player Image" class="h-10" height="40" src="https://storage.googleapis.com/a1aa/image/61tdtMMgJKK6CxNuUT9W0Eg6aAHmZRq7mrm0Cka7BI1lp2BF.jpg" width="100"/>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Players;