import React from 'react';

const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-red-600 mb-4">Log In</h2>
        <form>
          <input className="w-full p-3 border rounded-lg mb-4" placeholder="Username or Email" type="text" />
          <input className="w-full p-3 border rounded-lg mb-4" placeholder="Password" type="password" />
          <button className="w-full bg-red-600 text-white p-3 rounded-lg" type="submit">Log In</button>
        </form>
      </div>
    </div>
  );
};

export default Login;