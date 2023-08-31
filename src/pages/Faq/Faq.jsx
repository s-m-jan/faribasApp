import React, { useState } from "react";
import { Alert, Box } from "@mui/material";
import InputForm from "../../components/InputForm/InputForm";
import styled from "./Faq.module.css"
import QuestionCard from "../../components/QuestionCard/QuestionCard";
import { useQuery } from "react-query";
import Axios from "axios"

export default function Faq() {
  

  const {data}= useQuery(["questions"], ()=>{
    return Axios.get("http://localhost:8000/questions").then((res)=>res.data)
  })

  console.log(data)
 
  return (
    <div className="container">
     
      <h1>{}</h1>
      <Box className={styled.questionCards} >
        {data?.map((item)=>{
          return <QuestionCard  imageUrl={item.imageUrl} title={item.title} content={item.content}/>
        })}

      
      </Box>
      <div className="d-flex justify-content-center align-items-center my-5" >
        <Alert sx={{ lineHeight: "50px", fontSize: "1.5rem" }} severity="info">
          شما هم می توانید سوالتان را بپرسید
        </Alert>
      </div>
      <InputForm/> 
    </div>
  );
}
