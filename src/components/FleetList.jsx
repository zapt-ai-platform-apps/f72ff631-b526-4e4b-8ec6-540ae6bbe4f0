import React from 'react';
import FleetTable from './FleetTable';

export default function FleetList() {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Fleet Management</h1>
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
          Add Vehicle
        </button>
      </div>
      <FleetTable />
    </div>
  );
}