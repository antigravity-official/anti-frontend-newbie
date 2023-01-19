import React from 'react';
import BasicCard from '../BasicCard';

interface ParamProps {
  stateOne: string;
  stateTwo: string;
  priceOne: number;
  priceTwo: number;
}

const DataCard = ({ stateOne, stateTwo, priceOne, priceTwo }: ParamProps) => {
  return (
    <>
      <BasicCard width={10.5} height={10.5}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            width: '9.25rem',
            height: '7.5rem',
            marginLeft: '1.25rem',
          }}
        >
          <div>
            <p
              style={{
                marginBottom: '0.5rem',
                color: '#B9BAC1',
                fontSize: '0.75rem',
                fontWeight: '300',
              }}
            >
              {stateOne}
            </p>
            <p
              style={{
                color: '#55FED8',
                fontSize: '1.5rem',
                fontWeight: '700',
              }}
            >
              {priceOne}
            </p>
          </div>
          <div>
            <p
              style={{
                marginBottom: '0.5rem',
                color: '#B9BAC1',
                fontSize: '0.75rem',
                fontWeight: '300',
              }}
            >
              {stateTwo}
            </p>
            <p
              style={{
                color: '#FE55F7',
                fontSize: '1.5rem',
                fontWeight: '700',
              }}
            >
              {priceTwo}
            </p>
          </div>
        </div>
      </BasicCard>
    </>
  );
};

export default DataCard;
