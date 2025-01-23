import React from 'react'
// import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import GoogleMap from '../components/GoogleMap'

const Regions = () => {
  return (
    <main class="ml-10 flex flex-col p-2 py-20 overflow-y-auto text-black">
        <h1 class="text-3xl font-bold text-gray-800 pt-5 pl-10 pb-4">Geographic Regions</h1>
        <main class="flex-1 ml-10">
        <div class="bg-white shadow rounded-lg p-4">
            <div class="flex items-center mb-4">
                <div class="relative">
                    <button id="newButton" class="bg-red-600 text-white px-4 py-2 rounded mr-4">+ New</button>
                    
                </div>
                <div class="relative flex-1">
                    <input class="w-full border border-gray-300 rounded-full px-4 py-2" placeholder="Search geographic regions..." type="text"/>
                    <i class="fas fa-search absolute right-3 top-3 text-gray-500"></i>
                </div>
            </div>
            <div class="relative ">
                {/* <input class="absolute top-4 z-50 left-1/2 transform -translate-x-1/2 bg-white border border-gray-300 rounded-full px-4 py-2" placeholder="Search the map..." type="text"/> */}
            
                <GoogleMap />
            </div>
            <div class="mt-4">
                <div class="flex items-center justify-between bg-gray-100 p-2 rounded">
                    <p>Lahore-Sheikhupura</p>
                    <div class="flex items-center space-x-2">
                        <i class="fas fa-eye text-gray-600"></i>
                        <i class="fas fa-ellipsis-h text-gray-600"></i>
                    </div>
                </div>
            </div>
        </div>
        </main>
    </main>
  )
}

export default Regions
