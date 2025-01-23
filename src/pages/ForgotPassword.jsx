import React from 'react';

const ForgotPassword = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-red-600 mb-4">Forgot Password</h2>
        <form>
          <input className="w-full p-3 border rounded-lg mb-4" placeholder="Email" type="email" />
          <button className="w-full bg-red-600 text-white p-3 rounded-lg" type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;