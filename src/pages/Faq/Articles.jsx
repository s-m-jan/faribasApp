import React, { useState } from "react";
import {  Box } from "@mui/material";
import styled from "./Faq.module.css"
import QuestionCard from "../../components/QuestionCard/QuestionCard";
import useFetch from "../../hooks/useFetch";
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function Faq() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  const {data}= useFetch("questions", "http://localhost:8000/questions")
  return (
    <div className="container">
     
      <h1>{}</h1>
      <Box className={styled.questionCards} >
        {data?.map((item)=>{
          return <QuestionCard id={item.id}  imageUrl={item.imageUrl} title={item.title} content={item.content}/>
        })}

      
      </Box>
     
    </div>
  );
}
