import AccordionItem from "../accordionItem/AccordionItem";
import style from "./AccQuestion.module.css";

export default function AccQuestion() {
  return (
    <div className={` ${style.acc}`}>
      <div className=" p-5">
        <div className="row">
          <div className="col-lg-8 mb-2">
            <AccordionItem number={1} identity={1} />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8 mb-2">
            <AccordionItem number={2} identity={2} />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8 mb-2">
            <AccordionItem number={3} identity={3} />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8 mb-2">
            <AccordionItem number={4} identity={4} />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8 mb-2">
            <AccordionItem number={5} identity={5} />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8 mb-2">
            <AccordionItem number={6} identity={6} />
          </div>
        </div>
      </div>
    </div>
  );
}
