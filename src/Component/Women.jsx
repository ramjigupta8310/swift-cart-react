import React from 'react'
import SectionProduct from './SectionProduct';
import { ethnicWear, sleepWear, workWear, officeWear,  casualStyles, westernWear } from './Data';


const Women = () => {
  const categoryArray = [...ethnicWear, ...sleepWear,...workWear,...officeWear,...casualStyles,...westernWear]
  // console.log(categoryArray);


  return (
    <>
      <SectionProduct  catArray={categoryArray}/>
    </>
  )
}

export default Women
