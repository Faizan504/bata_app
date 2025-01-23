import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const Region = () => {
  return (
    <main className="ml-10 flex flex-col p-5 py-20 overflow-y-auto text-black ">
      <h1 className="text-3xl font-bold text-gray-800 pt-5 pl-10">
        Regions
      </h1>
      <div class="flex-1 p-6 ">
    <div class="bg-white p-4 rounded-lg shadow ">
     <div class="flex justify-between items-center mb-4">
      <button class="bg-red-500 text-white px-4 py-2 rounded flex items-center space-x-2">
       <AddIcon/>
       <span>
        Add New
       </span>
      </button>
      <div class="flex items-center space-x-2">
       <input class="border border-gray-300 rounded px-4 py-2 w-64" placeholder="Search by name..." type="text"/>
       <button class="bg-gray-300 px-4 py-2 rounded">
        Search
       </button>
      </div>
     </div>
     <div class="space-y-4">
      <div class="flex justify-between items-center border-b pb-4">
       <div>
        <h3 class="text-lg font-semibold">
         Punjab
        </h3>
        <p class="text-sm text-gray-600">
         Serving its valued customers through a strong retail network comprising of more than 500 retail outlets, 200 registered wholesale dealers,10 sales offices, 9 distributers &amp; 5 wholesaler across the country.
        </p>
       </div>
       <div class="flex space-x-2">
        <button class="bg-red-500 text-white h-10 w-36 p-4 rounded flex items-center space-x-2">
        <AddIcon/>
         <span>
          Add New
         </span>
        </button>
        <button class="bg-gray-300 px-4 py-2 rounded">
         <EditIcon/>
        </button>
        <button class="bg-gray-300 px-4 py-2 rounded">
         <DeleteOutlineIcon/>
        </button>
       </div>
      </div>
      <div class="flex justify-between items-center border-b pb-4">
       <div>
        <h3 class="text-lg font-semibold">
         Sindh
        </h3>
        <p class="text-sm text-gray-600">
         Serving its valued customers through a strong retail network comprising of more than 500 retail outlets, 200 registered wholesale dealers,10 sales offices, 9 distributers &amp; 5 wholesaler across the country.
        </p>
       </div>
       <div class="flex space-x-2">
        <button class="bg-red-500 text-white h-10 w-36 p-4 rounded flex items-center space-x-2">
        <AddIcon/>
         <span>
          Add New
         </span>
        </button>
        <button class="bg-gray-300 px-4 py-2 rounded">
        <EditIcon/>
        </button>
        <button class="bg-gray-300 px-4 py-2 rounded">
        <DeleteOutlineIcon/>
        </button>
       </div>
      </div>
      <div class="flex justify-between items-center ">
       <div>
        <h3 class="text-lg font-semibold">
         Khyber Pakhtunkhwa
        </h3>
        <p class="text-sm text-gray-600">
         Serving its valued customers through a strong retail network comprising of more than 500 retail outlets, 200 registered wholesale dealers,10 sales offices, 9 distributers &amp; 5 wholesaler across the country.
        </p>
       </div>
       <div class="flex space-x-2">
        <button class="bg-red-500 text-white h-10 w-36 p-4 rounded flex items-center space-x-2">
        <AddIcon/>
         <span>
          Add New
         </span>
        </button>
        <button class="bg-gray-300 px-4 py-2 rounded">
        <EditIcon/>
        </button>
        <button class="bg-gray-300 px-4 py-2 rounded">
        <DeleteOutlineIcon/>
        </button>
       </div>
      </div>
      
     </div>
    </div>
   </div>
      </main>
  )
}

export default Region
