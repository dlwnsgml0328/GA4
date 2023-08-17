import { styled } from '@stitches/react';
import React, { useState } from 'react';

const Calc = () => {
  const [isModal, setIsModal] = useState(false);
  return (
    <Container>
      <h1>Hello Container</h1>

      <button onClick={() => setIsModal(true)}>Modal</button>

      {isModal && (
        <Modal>
          <button onClick={() => setIsModal(false)}>X</button>

          <div>
            <h1>Hello Modal</h1>
          </div>
        </Modal>
      )}
    </Container>
  );
};

export default Calc;

const Container = styled('div', {
  width: '100%',
  background: 'Aqua',
  height: `calc(var(--vh, 1vh) * 90)`,
});

const Modal = styled('div', {
  width: '100%',
  height: `calc(var(--vh, 1vh) * 100)`,
  backdropFilter: 'blur(150px)',
  zIndex: 100,
  position: 'absolute',
  top: 0,
  left: 0,
});
