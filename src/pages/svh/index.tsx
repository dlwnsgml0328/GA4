import { styled } from '@stitches/react';
import React from 'react';

const SVH = () => {
  return (
    <Container>
      <h1>SVH</h1>
    </Container>
  );
};

export default SVH;

const Container = styled('div', {
  background: 'AliceBlue',
  height: '90svh',
});
