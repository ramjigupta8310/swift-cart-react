import React from 'react'
import SectionProduct from './SectionProduct';
import { mensWear, wfhWear} from './Data';

const Men = () => {
  const categoryArray = [...mensWear,...wfhWear];
  return (
    <>
      <SectionProduct  catArray={categoryArray}/>
    </>
  )
}

export default Men
