import { Entry } from '@/views/Dashboard';
import React from 'react';
import {
  XAxis,
  YAxis,
  CartesianGrid,
  AreaChart,
  Area,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

interface Props {
  data: Entry[];
  key: any;
}

const AreaGraph = (props: Props) => {
  const title = props.data.map((data) => data.title);

  return (
    <div className="flex w-full items-center justify-between">
      <h1 className="text-[17px] font-bold">{title[0]}:</h1>
      <AreaChart key={props.key} data={props.data} height={130} width={280}>
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="20%" stopColor="#e6e6ff" stopOpacity={1} />
            <stop offset="90%" stopColor="white" stopOpacity={1} />
          </linearGradient>
        </defs>

        <CartesianGrid
          horizontal={true}
          vertical={false}
          strokeWidth={'1px'}
          color="whiteSmoke"
          strokeOpacity={'0.4'}
          strokeDasharray="0"
        />

        <XAxis dataKey="date" strokeOpacity={0} fontSize={'14px'} />
        <Tooltip />
        <YAxis strokeOpacity={0} fontSize={'14px'} />
        <Area
          type="monotone"
          dataKey="value"
          fill="url(#colorUv)"
          strokeWidth={'3.8px'}
          stroke="#053fff"
          data={props.data}
        />
      </AreaChart>
    </div>
  );
};

export default AreaGraph;
