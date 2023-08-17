import { styled } from '@stitches/react';
import React from 'react';

const Calc = () => {
  return (
    <Container>
      <h1>Hello Container</h1>
    </Container>
  );
};

export default Calc;

const Container = styled('div', {
  width: '100%',
  background: 'AntiqueWhite',
  height: `calc(var(--vh, 1vh) * 90)`, // Fixed here
});
