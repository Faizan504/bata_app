import React from 'react';
import logo from "../images/bata.png"
import NotificationsIcon from '@mui/icons-material/Notifications';
import MessageIcon from '@mui/icons-material/Message';
const Header = () => {
  return (
      <header class="fixed top-0 left-0 right-0 z-50  p-4 bg-white shadow ">
        <div class="flex items-center w-100 justify-between">
   <img alt="Bata logo" class="h-10" src={logo} width="150" />
   <div class="flex items-center space-x-4">
    <NotificationsIcon /> 
    <MessageIcon />
    <div class="flex items-center space-x-2">
     <img alt="User avatar" class="h-10 w-10 rounded-full" height="40" src="https://storage.googleapis.com/a1aa/image/8F4dbOnDaqKoHZ8OV1BnU4ke1LPWQDfffa1bhpYgfweR002BF.jpg" width="40"/>
     <div>
      <p class="text-gray-800">
       Mathew Liam
      </p>
      <p class="text-gray-500 text-sm">
       User
      </p>
     </div>
    </div>
   </div>
   </div>
   {/* <h1>
    Title
   </h1> */}
   
  </header>
  

  );
};

export default Header;