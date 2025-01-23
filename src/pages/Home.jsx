import React from 'react';
import 
{ BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill}
 from 'react-icons/bs'
 import 
 { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } 
 from 'recharts';


const Home = () => {
  const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  return (
    <main className="ml-10 flex flex-col p-5 py-10 overflow-y-auto text-black mt-10">
      <h1 className="text-3xl font-bold text-gray-800 pt-5 pb-10 pl-10">
        Dashboard
      </h1>
  {/* <div className="grid grid-cols-4 gap-5 mb-5">
    <div className="flex flex-col justify-around p-4 rounded bg-blue-600">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold">PRODUCTS</h3>
        <BsFillArchiveFill className="text-2xl" />
      </div>
      <h1 className="text-2xl font-bold">300</h1>
    </div>
    <div className="flex flex-col justify-around p-4 rounded bg-orange-600">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold">CATEGORIES</h3>
        <BsFillGrid3X3GapFill className="text-2xl" />
      </div>
      <h1 className="text-2xl font-bold">12</h1>
    </div>
    <div className="flex flex-col justify-around p-4 rounded bg-green-700">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold">CUSTOMERS</h3>
        <BsPeopleFill className="text-2xl" />
      </div>
      <h1 className="text-2xl font-bold">33</h1>
    </div>
    <div className="flex flex-col justify-around p-4 rounded bg-red-600">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold">ALERTS</h3>
        <BsFillBellFill className="text-2xl" />
      </div>
      <h1 className="text-2xl font-bold">42</h1>
    </div>
  </div> */}

  <div className="grid grid-cols-2 gap-5 h-[200px]">
    
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={500}
        height={200}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="pv" fill="#8884d8" />
        <Bar dataKey="uv" fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>

    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        width={500}
        height={200}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="pv"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  </div>
  <div className="grid grid-cols-2 gap-5 h-[200px]">
  <ResponsiveContainer width="100%" height="100%">
      <LineChart
        width={500}
        height={200}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="pv"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={500}
        height={200}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="pv" fill="#8884d8" />
        <Bar dataKey="uv" fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>

    
  </div>
</main>

  );
};

export default Home;