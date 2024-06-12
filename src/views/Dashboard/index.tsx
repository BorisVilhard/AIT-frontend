'use client';

import { useState } from 'react';
import { ChartWrapper } from './components/ChartWrapper';
import LineGraph from '@/components/Graphs/LineGraph/LineGraph';
import DataBar from './components/DataBar';

const Dashboard = () => {
  const [dashboardData,setDashboardData]=useState<[]>([])

  const lineGraphData = [
    { title: 'Total Income', value: 200, percetageDifference: '14%' },
    { title: 'Total Income', value: 200, percetageDifference: '14%' },
    { title: 'Total Income', value: 200, percetageDifference: '14%' },
    { title: 'Total Income', value: 200, percetageDifference: '14%' },
    { title: 'Total Income', value: 200, percetageDifference: '14%' },
    { title: 'Total Income', value: 200, percetageDifference: '14%' },
    { title: 'Total Income', value: 200, percetageDifference: '14%' },
    { title: 'Total Income', value: 200, percetageDifference: '14%' },
    { title: 'Total Income', value: 200, percetageDifference: '14%' },
  ];

  const fetchData = (e:any) => {
    console.log(e); 
    setDashboardData(e);
  };

  return (
    <div className="bg-rgb-255-255-255 relative flex h-full w-full flex-col  items-center justify-center">
      <div className="absolute top-0 w-full">
        <DataBar getData={fetchData} />
      </div>
      <div className='w-[95%] flex justify-center z-20'>  
        <div className="grid z-20 mt-[120px] gap-2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {lineGraphData.map((data, index) => {
            return (
              <ChartWrapper
                key={index}
                title={data.title}
                value={data.value}
                percentageDifference={data.percetageDifference}
              >
                <LineGraph
                  id={index.toString()}
                  lineargradient={
                    <linearGradient id={index.toString()} x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="rgba(7,7,156,1)" />
                      <stop offset="55%" stopColor="rgba(39,39,231,1)" />
                    </linearGradient>
                  }
                />
              </ChartWrapper>
            );
          })}
        </div>
        </div>
    </div>
  );
};

export default Dashboard;
