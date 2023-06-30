import { styled } from '@stitches/react';
import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <Wrapper>
      <ul>
        <li>
          <Link href='/'>Home</Link>
        </li>
        <li>
          <Link href='/movie'>Movie</Link>
        </li>
        <li>
          <Link href='/magazine'>Magazine</Link>
        </li>
      </ul>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled('div', {
  marginTop: 10,
  ul: {
    display: 'flex',
    margin: 0,
    padding: 0,
  },
  li: {
    listStyle: 'none',
    marginRight: '10px',
  },

  a: {
    textDecoration: 'none',
    color: 'Black',
  },
});
