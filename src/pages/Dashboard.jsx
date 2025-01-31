import React from 'react';

export default function Dashboard() {
  return (
    <div className="p-6 bg-gray-100 min-h-full">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Fleet Management Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2">Total Vehicles</h2>
            <p className="text-3xl">0</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2">Active Vehicles</h2>
            <p className="text-3xl">0</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2">Pending Maintenance</h2>
            <p className="text-3xl">0</p>
          </div>
        </div>

        {/* Placeholder for Charts */}
        <div className="bg-white p-6 rounded-lg shadow mb-8">
          <h2 className="text-xl font-semibold mb-4">Monthly Costs</h2>
          <div className="h-64 bg-gray-200 rounded"></div>
        </div>

        {/* Placeholder for Recent Activities */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Recent Activities</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((_, i) => (
              <div key={i} className="p-4 border rounded-lg">
                <div className="animate-pulse flex space-x-4">
                  <div className="flex-1 space-y-4 py-1">
                    <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                    <div className="space-y-2">
                      <div className="h-4 bg-gray-300 rounded"></div>
                      <div className="h-4 bg-gray-300 rounded w-5/6"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}