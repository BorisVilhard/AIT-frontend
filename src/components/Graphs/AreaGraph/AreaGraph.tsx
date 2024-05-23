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

const data = [
  {
    day: '28.3',
    price: 10,
  },
  {
    day: '29.3',
    price: 15,
  },
  {
    day: '30.3',
    price: 12,
  },
  {
    day: '31.3',
    price: 12,
  },
  {
    day: '1.4',
    price: 20,
  },
  {
    day: '2.4',
    price: 25,
  },
  {
    day: '3.4',
    price: 30,
  },
  {
    day: '4.4',
    price: 25,
  },
  {
    day: '5.4',
    price: 20,
  },
  {
    day: '6.4',
    price: 30,
  },
  {
    day: '7.4',
    price: 35,
  },
  {
    day: '8.4',
    price: 40,
  },
  {
    day: '9.4',
    price: 50,
  },
  {
    day: '10.4',
    price: 55,
  },
  {
    day: '11.4',
    price: 100,
  },
  {
    day: '12.4',
    price: 70,
  },
  {
    day: '13.4',
    price: 75,
  },
  {
    day: '14.4',
    price: 80,
  },
  {
    day: '15.4',
    price: 90,
  },
  {
    day: '16.4',
    price: 100,
  },
  {
    day: '17.4',
    price: 90,
  },
  {
    day: '18.4',
    price: 120,
  },
  {
    day: '19.4',
    price: 150,
  },
  {
    day: '20.4',
    price: 120,
  },
  {
    day: '21.4',
    price: 170,
  },
  {
    day: '22.4',
    price: 190,
  },
  {
    day: '23.4',
    price: 150,
  },
  {
    day: '24.4',
    price: 140,
  },
  {
    day: '25.4',
    price: 170,
  },
  {
    day: '26.4',
    price: 210,
  },
  {
    day: '27.4',
    price: 190,
  },
  {
    day: '28.4',
    price: 180,
  },
  {
    day: '29.4',
    price: 200,
  },
];

const AreaGraph = () => {
  return (
    <div style={{ width: '45vw', height: '45vh' }}>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
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

          <XAxis dataKey="day" strokeOpacity={0} fontSize={'14px'} />
          <Tooltip />
          <YAxis strokeOpacity={0} fontSize={'14px'} />
          <Area
            type="monotone"
            dataKey="price"
            fill="url(#colorUv)"
            strokeWidth={'3.8px'}
            stroke="#053fff"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AreaGraph;
