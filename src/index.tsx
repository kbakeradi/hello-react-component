import * as React from 'react'
import './styles.scss'
// import styled from 'styled-components';

type HelloProps = {
  name: string;
}

// const Component = styled.section`
//   padding: 4em;
//   background: papayawhip;
// `;


const HelloComponent:React.FC<HelloProps> = ({ name }) => {
  // name is string!
  return <div className='make-big'>Hello {name}</div>
};

export default HelloComponent;
