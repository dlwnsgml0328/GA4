import { styled } from '@stitches/react';
import React from 'react';

const SVH = () => {
  return (
    <Container>
      <h1>LVH</h1>
    </Container>
  );
};

export default SVH;

const Container = styled('div', {
  background: 'AntiqueWhite',
  height: '90lvh',
});
