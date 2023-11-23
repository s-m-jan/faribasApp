import React from 'react'
import MovieBg from '../../components/movieBg/MovieBg'
import AccQuestion from '../../components/accordionQuestion/AccQuestion'
import Divider from '../../components/divider/Divider'
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ProductSlide from '../../components/productSlide/ProductSlide';





export default function Home() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div>
      <MovieBg/>
      <Divider title="خدمات آموزشی"/>
      <ProductSlide/>
      <Divider title="سوالات متداول"/>
      <AccQuestion/>
    </div>
  )
}
