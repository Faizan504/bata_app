import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import SortIcon from '@mui/icons-material/Sort';

const Content = () => {
  return (
    <main className="ml-10 flex flex-col p-5 py-20 overflow-y-auto text-black ">
      <h1 className="text-3xl font-bold text-gray-800 pt-5 pl-10">
        Content
      </h1>
      <div class="flex-1 p-6">
     <div class="flex justify-between items-center mb-4">
     
      <div class="flex items-center space-x-2">
       <input type='file' class="bg-red-600 text-white px-4 py-2 rounded flex items-center hidden" id="file-upload"/>
       <label
        htmlFor="file-upload"
        className="cursor-pointer bg-red-600 text-white px-4 py-2 rounded flex items-center  hover:bg-red-700 transition duration-300"
      > 
      <AddIcon />
      New
      </label>
        
        
       
       <div class="flex items-center space-x-2">
        <input class="form-checkbox" id="name" type="checkbox"/>
        <label class="text-sm" for="name">
         Name
          
        </label>
        <SortIcon />

       </div>
      </div >
      <div class="flex justify-between border border-gray-300 rounded-full p-2 w-60">
      <SearchIcon />
      <input  placeholder="Search by name..." type="text" class="outline-none px-2"/>
     </div>
     </div>
     <div class="bg-white p-4 rounded shadow">
      <div class="flex justify-between items-center mb-4">
       <div class="flex items-center space-x-2">
        <i class="fas fa-folder text-xl">
        </i>
        <span>
         Folders
        </span>
       </div>
       
      </div>
      <div class="border-t border-gray-300 mt-4 pt-4">
      <div class="flex items-center space-x-2 pb-4 ">
        <button class="flex items-center space-x-2 pr-5 w-40">
         <CreateNewFolderIcon class="w-8"/>
         <span class="text-xs w-32 ml-1">
          Content Library
         </span>
        </button>
        <button class="flex items-center space-x-2 pr-5 w-40">
         <FolderOpenIcon class=" w-10"/>
         <span class="text-xs w-32 ml-1">
          Mine Folder
         </span>
        </button>
       </div>
       <div class="flex items-center space-x-4 border-t border-gray-300 pt-4">
        <div class="flex flex-col items-center">
         <img alt="Chauburji.jpg" class="w-24 h-24 object-cover" height="100" src="https://storage.googleapis.com/a1aa/image/1O5TSVUYtc5xDdlqy3KO3ClkT7AjV0we64upM23ngoBpzsDKA.jpg" width="100"/>
         <span class="text-sm mt-2">
          Chauburji.jpg
         </span>
        </div>
        <div class="flex flex-col items-center">
         <img alt="Minar-e-Pakistan.jpg" class="w-24 h-24 object-cover" height="100" src="https://storage.googleapis.com/a1aa/image/h4nsLY0R1V5TFZLVXFnBXfsjyamdI3KD2peh0jENzVBMnZHUA.jpg" width="100"/>
         <span class="text-sm mt-2">
          Minar-e-Pakistan.jpg
         </span>
        </div>
        <div class="flex flex-col items-center">
         <img alt="Nature.mp4" class="w-24 h-24 object-cover" height="100" src="https://storage.googleapis.com/a1aa/image/HW1kxoTA2P4ZAJd5VgAqVMKjmA2WeltLjU0memXLB8uInZHUA.jpg" width="100"/>
         <span class="text-sm mt-2">
          Nature.mp4
         </span>
        </div>
        <div class="flex flex-col items-center">
         <img alt="Ship.mp4" class="w-24 h-24 object-cover" height="100" src="https://storage.googleapis.com/a1aa/image/2N7txq0ZLQZdJVRpdEu0RfWFjsh26321XnYtHizw7PTlzsDKA.jpg" width="100"/>
         <span class="text-sm mt-2">
          Ship.mp4
         </span>
        </div>
        <div class="flex flex-col items-center">
         <img alt="Meeting.jpg" class="w-24 h-24 object-cover" height="100" src="https://storage.googleapis.com/a1aa/image/zTWygxUhrC5BEd3lwVy04gXlqpnH6M4hpA60IaUUULenzsDKA.jpg" width="100"/>
         <span class="text-sm mt-2">
          Meeting.jpg
         </span>
        </div>
       </div>
      </div>
     </div>
    </div>
    </main>
  );
};

export default Content;