import React from "react";

const ExampleComponent = () => {
  return (
    <div className='container mx-auto p-4'>
      <h1 className='text-2xl font-bold text-center'>
        Welcome to Tailwind CSS
      </h1>
      <div className='grid grid-cols-3 gap-4 mt-4'>
        <div className='bg-blue-500 text-white p-4 rounded-lg shadow-lg'>
          Box 1
        </div>
        <div className='bg-green-500 text-white p-4 rounded-lg shadow-lg'>
          Box 2
        </div>
        <div className='bg-red-500 text-white p-4 rounded-lg shadow-lg'>
          Box 3
        </div>
      </div>
    </div>
  );
};

export default ExampleComponent;
