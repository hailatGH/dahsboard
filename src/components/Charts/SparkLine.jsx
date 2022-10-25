import React from 'react';
import { SparklineComponent, Inject, SparklineTooltip } from '@syncfusion/ej2-react-charts';
import { render } from 'react-dom';

const SparkLine = ({ id, height, width, color, data, type, currentColor }) => {
  return (
    <h1>Future Work To Be Done</h1>
    // <SparklineComponent
    //   id={id}
    //   height={height}
    //   width={width}
    //   lineWidth={1}
    //   valueType='Numeric'
    //   fill={color}
    //   border={{ color: currentColor, width: 2 }}
    //   dataSource={data}
    //   xName='x'
    //   yName='y'
    //   type={type}
    //   tooltipSettings={{
    //     visible: true,
    //     format: '${x} : data ${y}',
    //     trackLineSettings: {
    //       visible: true
    //     }
    //   }}
    // >
    //   <Inject services={[SparklineTooltip]} />
    // </SparklineComponent>
  )
}

export default SparkLine