import React from 'react'

const Platform = () => {
  return (
    <main className="ml-10 flex flex-col p-5 py-20 overflow-y-auto text-black ">
      <h1 className="text-3xl font-bold text-gray-800 pt-5 pl-10">
        Platform Logs
      </h1>
      <div class="p-6">
     <div class="bg-white p-4 rounded shadow">
      <div class="flex justify-between items-center mb-4">
       <input class="border p-2 rounded w-1/2 outline-none" placeholder="Search by name..." type="text"/>
       <button class="border p-2 rounded bg-gray-200 flex items-center space-x-2">
        <span>
         New Entries First
        </span>
        <i class="fas fa-sort-down">
        </i>
       </button>
      </div>
      <table class="w-full border-collapse">
       <thead>
        <tr class="bg-gray-100">
         <th class="border p-2 text-left">
          Action
         </th>
         <th class="border p-2 text-left">
          Level
         </th>
         <th class="border p-2 text-left">
          Date
         </th>
        </tr>
       </thead>
       <tbody>
        <tr class="bg-blue-100">
         <td class="border p-2 text-center" colspan="3">
          System activity logs are stored for up to one year.
         </td>
        </tr>
       </tbody>
      </table>
     </div>
    </div>
      </main>
  )
}

export default Platform
