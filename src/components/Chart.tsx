import React from 'react';
import { ResponsiveLine } from '@nivo/line';
import monthlyExchangeRate from '../monthlyExchangeRate.json';

const MyResponsiveLine = () => {
  return (
    <ResponsiveLine
      data={monthlyExchangeRate}
      margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
      xScale={{ type: 'point' }}
      yScale={{
        type: 'linear',
        min: 'auto',
        max: 'auto',
        stacked: true,
        reverse: false,
      }}
      yFormat=" >-.2f"
      curve="basis"
      axisTop={null}
      axisRight={null}
      axisBottom={null}
      axisLeft={null}
      enableGridX={false}
      enableGridY={false}
      colors={'#55FED8'}
      lineWidth={5}
      enablePoints={false}
      pointSize={10}
      pointColor={{ theme: 'background' }}
      pointBorderWidth={2}
      pointBorderColor={{ from: 'serieColor' }}
      pointLabelYOffset={-12}
      enableArea={true}
      areaBlendMode="multiply"
      areaOpacity={0.05}
      enableSlices="x"
      useMesh={true}
      legends={[]}
    />
  );
};

export default MyResponsiveLine;
