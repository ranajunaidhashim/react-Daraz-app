import React from 'react'
import FlashDeal from '../Components/FlashDeal';
import { Home } from '../pages/Home';
import Products from './Products';
export const Mypage = ({productItems , cartItem , addCart}) => {
  return (
    <>
    <Home cartItem={cartItem}/>
    <Products/>
    <FlashDeal productItems={productItems} addCart={addCart}/> 
    </>
  )
}
