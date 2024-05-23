'use client';

import { useState } from 'react';
import { ChartWrapper } from './components/ChartWrapper';
import LineGraph from '@/components/Graphs/LineGraph/LineGraph';
import DataBar from './components/DataBar';
import AreaGraph from '@/components/Graphs/AreaGraph/AreaGraph';
import PieGraph from '@/components/Graphs/PieGraph/PieGraph';

const Dashboard = () => {
  const [sectionSwitch, setSectionSwitch] = useState(false);

  const lineGraphData = [
    { title: 'Total Income', value: 200, percetageDifference: '14%' },
    { title: 'Total Income', value: 200, percetageDifference: '14%' },
    { title: 'Total Income', value: 200, percetageDifference: '14%' },
  ];

  return (
    <div className="bg-rgb-255-255-255 relative flex h-full w-full flex-col  items-center justify-center">
      <div className="absolute top-0 w-full">
        <DataBar activeSection={(section) => setSectionSwitch(section)} />
      </div>

      <div className="top-[100px] z-20 mt-[120px] flex w-full flex-col">
        <div className="flex flex-row justify-between sm:flex-col md:flex-col lg:flex-row">
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
                  margin="0 0 0 30px"
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

        <div className="flex justify-between sm:flex-col md:flex-col lg:flex-row">
          <ChartWrapper
            title={'Total Income'}
            className="w-fit lg:w-fit"
            value={1212}
            percentageDifference="14%"
          >
            <AreaGraph />
          </ChartWrapper>
          <ChartWrapper className="w-fit lg:w-fit" title={'User Behavior'}>
            <PieGraph />
          </ChartWrapper>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
