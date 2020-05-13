import React from 'react';
import { css } from 'styled-components';
import { ResponsiveWaffle } from '@nivo/waffle';
import Layout from './Layout';

// Credit: https://nivo.rocks/waffle/
const MyResponsiveWaffle = ({ data }) => (
  <ResponsiveWaffle
    data={data}
    total={2000}
    rows={18}
    columns={14}
    margin={{ top: 10, right: 10, bottom: 10, left: 120 }}
    colors={{ scheme: 'nivo' }}
    borderColor={{ from: 'color', modifiers: [['darker', 0.3]] }}
    animate={true}
    motionStiffness={90}
    motionDamping={11}
    legends={[
      {
        anchor: 'top-left',
        direction: 'column',
        justify: false,
        translateX: -100,
        translateY: 0,
        itemsSpacing: 4,
        itemWidth: 100,
        itemHeight: 20,
        itemDirection: 'left-to-right',
        itemOpacity: 1,
        itemTextColor: '#777',
        symbolSize: 20,
        effects: [
          {
            on: 'hover',
            style: {
              itemTextColor: '#000',
              itemBackground: '#f7fafb'
            }
          }
        ]
      }
    ]}
  />

);

export default ({ data }) => (
  <Layout
    css={css`
      &:hover {
        background-color: lightyellow;
      }
    `}
  >
    <MyResponsiveWaffle data={data} />
  </Layout>
);
