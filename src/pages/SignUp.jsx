import React from 'react';

const SignUp = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-red-600 mb-4">Sign Up</h2>
        <form>
          <input className="w-full p-3 border rounded-lg mb-4" placeholder="First Name" type="text" />
          <input className="w-full p-3 border rounded-lg mb-4" placeholder="Last Name" type="text" />
          <input className="w-full p-3 border rounded-lg mb-4" placeholder="Email" type="email" />
          <input className="w-full p-3 border rounded-lg mb-4" placeholder="Password" type="password" />
          <input className="w-full p-3 border rounded-lg mb-4" placeholder="Confirm Password" type="password" />
          <button className="w-full bg-red-600 text-white p-3 rounded-lg" type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;