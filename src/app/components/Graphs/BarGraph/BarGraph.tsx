import React, { ReactNode } from 'react';
import { Line, Tooltip, ResponsiveContainer, BarChart } from 'recharts';

type lineargradient = {
  lineargradient?: ReactNode;
  id: string;
  lineColor?: string;
  margin?: string;
  width?: number;
  data: [];
};

const BarGraph = ({ lineargradient, id, lineColor, data }: lineargradient) => {
  return (
    <div className="h-[17vh] w-[50vw] md:w-[20vw]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart width={500} height={500} data={data}>
          <defs>{lineargradient}</defs>
          <Tooltip />
          <Line
            type="monotone"
            dataKey="uv"
            stroke={lineargradient === undefined ? lineColor : `url(#${id}`}
            strokeWidth={'4.5px'}
            dot={false}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarGraph;
