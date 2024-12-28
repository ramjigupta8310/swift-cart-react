import React from 'react'
import SectionProduct from './SectionProduct';
import { kidsWear} from './Data';

const Kids = () => {
  const categoryArray = [...kidsWear];
  return (
    <>
      <SectionProduct  catArray={categoryArray}/>
    </>
  )
}

export default Kids
