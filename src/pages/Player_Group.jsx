import React from 'react';

const Player_Group = () => {
  return (
    <div className="ml-10 flex flex-col p-5 py-10 overflow-y-auto text-black mt-10">
      <h1 className="text-3xl font-bold text-gray-800 pt-5 pl-10">
        Player Group
      </h1>
      <main class="flex-1 p-6">
    
    <div class="flex items-center mb-4">
     <div class="relative dropdown">
      <button class="bg-red-500 text-white px-4 py-2 rounded mr-2" onclick="toggleDropdown('createDropdown')">
       + Create Player Group
      </button>
      <div class="absolute hidden dropdown-menu bg-white shadow-lg rounded mt-2 w-48" id="createDropdown">
       <a class="block px-4 py-2 text-gray-800 hover:bg-gray-200" href="#">
        Option 1
       </a>
       <a class="block px-4 py-2 text-gray-800 hover:bg-gray-200" href="#">
        Option 2
       </a>
       <a class="block px-4 py-2 text-gray-800 hover:bg-gray-200" href="#">
        Option 3
       </a>
      </div>
     </div>
     <input class="border border-gray-300 rounded px-4 py-2 flex-1" placeholder="Search by name..." type="text"/>
     <button class="ml-2 bg-gray-200 px-4 py-2 rounded">
      Search
     </button>
     <div class="ml-2 relative dropdown">
      <button class="bg-gray-200 px-4 py-2 rounded flex items-center" onclick="toggleDropdown('nameDropdown')">
       Name
       <i class="fas fa-sort-down ml-2">
       </i>
      </button>
      <div class="absolute hidden dropdown-menu bg-white shadow-lg rounded mt-2 w-48" id="nameDropdown">
       <a class="block px-4 py-2 text-gray-800 hover:bg-gray-200" href="#">
        Name Option 1
       </a>
       <a class="block px-4 py-2 text-gray-800 hover:bg-gray-200" href="#">
        Name Option 2
       </a>
       <a class="block px-4 py-2 text-gray-800 hover:bg-gray-200" href="#">
        Name Option 3
       </a>
      </div>
     </div>
    </div>
    <div class="bg-white shadow rounded p-4">
     <div class="flex items-center justify-between border-b pb-2 mb-2">
      <div class="flex items-center">
       <input class="mr-2" type="checkbox"/>
       <p class="text-lg font-semibold">
        Sheraz
       </p>
      </div>
      <p class="text-gray-500">
       2 Players
      </p>
     </div>
     <div class="flex items-center justify-between">
      <div class="flex items-center space-x-2">
       <input class="mr-2" type="checkbox"/>
       <div class="flex items-center space-x-2">
        <span class="bg-purple-200 text-purple-800 px-2 py-1 rounded">
         player group
        </span>
        <span class="bg-purple-200 text-purple-800 px-2 py-1 rounded">
         wfc
        </span>
       </div>
      </div>
      <div class="flex items-center space-x-4">
       <div class="flex items-center space-x-2">
        <img alt="Player 1" class="h-10 w-10 rounded" height="50" src="https://storage.googleapis.com/a1aa/image/0tGTQ6Uw99IVKdB8nfCNWEhdcvWdFdFQpgXLGpFoeHTSTbHUA.jpg" width="50"/>
        <img alt="Player 2" class="h-10 w-10 rounded" height="50" src="https://storage.googleapis.com/a1aa/image/ZS33UoUnfxWgU6YvVUs75WBUGO7WQzlx5Z79Lzy1j1RqptDKA.jpg" width="50"/>
       </div>
       <div class="flex items-center space-x-2">
        <img alt="Campaign 1" class="h-10 w-20 rounded" height="50" src="https://storage.googleapis.com/a1aa/image/mjoCxa05MNY6GtvfXXYeIdZw8d42dohuJU13HUHBK4RWTbHUA.jpg" width="100"/>
        <p class="text-gray-500">
         1 Campaigns
        </p>
       </div>
      </div>
     </div>
    </div>
   </main>

      </div>
  );
};

export default Player_Group;