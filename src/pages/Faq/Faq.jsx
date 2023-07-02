import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Alert, AlertTitle, TextField, Typography } from "@mui/material";
import styled from "./Faq.module.css";
import InputForm from "../../components/InputForm/InputForm";

export default function Faq() {
  return (
    <div>
      <Navbar />
      <form className={styled.faqForm}>
        <Alert sx={{lineHeight: '50px', fontSize: "1.5rem"}} severity="info">
          
        شما هم می توانید سوالتان را بپرسید
        </Alert>
        <InputForm type="text" title="نام و نام خانوادگی" />
        <InputForm type="email" title=" ایمیل  " />
        <InputForm type="text" title=" شماره تماس  " />
        <label>متن سوال</label>
        <textarea />
      </form>
    </div>
  );
}
