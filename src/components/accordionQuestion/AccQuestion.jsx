import AccordionNewItem from "../accordionNewItem/AccordionNewItem";
import style from "./AccQuestion.module.css";
import InputForm from "../../components/InputForm/InputForm";
import { Alert } from "@mui/material";

export default function AccQuestion() {
  return (
    <div className={` ${style.acc}`}>
      <div className="row p-5">
        <div className="col-lg-6">
          <div className="row">
            <div className=" mb-2">
              <AccordionNewItem number={1} />
            </div>
          </div>
          <div className="row">
            <div className=" mb-2">
              <AccordionNewItem number={2} />
            </div>
          </div>
          <div className="row">
            <div className=" mb-2">
              <AccordionNewItem number={3} />
            </div>
          </div>
          <div className="row">
            <div className=" mb-2">
              <AccordionNewItem number={4} />
            </div>
          </div>
          <div className="row">
            <div className=" mb-2">
              <AccordionNewItem number={5} />
            </div>
          </div>
          <div className="row">
            <div className=" mb-2">
              <AccordionNewItem number={1} />
            </div>
          </div>
          <div className="row">
            <div className=" mb-2">
              <AccordionNewItem number={2} />
            </div>
          </div>
          <div className="row">
            <div className=" mb-2">
              <AccordionNewItem number={3} />
            </div>
          </div>
          <div className="row">
            <div className=" mb-2">
              <AccordionNewItem number={4} />
            </div>
          </div>
          <div className="row">
            <div className=" mb-2">
              <AccordionNewItem number={5} />
            </div>
          </div>
        </div>

        <div className="col-lg-6">
        <div className="d-flex justify-content-center align-items-center my-2" >
        <Alert sx={{ lineHeight: "50px", fontSize: "1.7rem" }} severity="info">
          شما هم می توانید سوالتان را بپرسید
        </Alert>
      </div>
          <div className=" mb-2 text-center">
            <InputForm />
          </div>
        </div>
      </div>
    </div>
  );
}
