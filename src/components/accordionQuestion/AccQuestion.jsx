
import AccordionNewItem from "../accordionNewItem/AccordionNewItem";
import style from "./AccQuestion.module.css";

export default function AccQuestion() {
  return (
    <div className={` ${style.acc}`}>
      <div className=" p-5">
        <div className="row">
          <div className="col-lg-8 mb-2">
            <AccordionNewItem number={1} />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8 mb-2">
          <AccordionNewItem number={2} />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8 mb-2">
          <AccordionNewItem number={3} />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8 mb-2">
          <AccordionNewItem number={4} />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8 mb-2">
          <AccordionNewItem number={5} />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8 mb-2">
          <AccordionNewItem number={6} />
          </div>
        </div>
      </div>
    </div>
  );
}
