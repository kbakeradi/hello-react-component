import * as React from 'react'
import './styles.scss'

type HelloProps = {
  name: string;
}

const HelloComponent:React.FC<HelloProps> = ({ name }) => {
  // name is string!
  return <h1 className='make-big'>Hello {name}</h1>
};

export default HelloComponent;
