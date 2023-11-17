import AccordionNewItem from "../accordionNewItem/AccordionNewItem";
import style from "./AccQuestion.module.css";

export default function AccQuestion() {
  return (
    <div className={` ${style.acc}`}>
      <div className="row" style={{padding: "50px 80px"}}>
        <div className="col-lg-12">
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
              <AccordionNewItem number={6} />
            </div>
          </div>
          <div className="row">
            <div className=" mb-2">
              <AccordionNewItem number={7} />
            </div>
          </div>
          <div className="row">
            <div className=" mb-2">
              <AccordionNewItem number={8} />
            </div>
          </div>
          <div className="row">
            <div className=" mb-2">
              <AccordionNewItem number={9} />
            </div>
          </div>
          <div className="row">
            <div className=" mb-2">
              <AccordionNewItem number={10} />
            </div>
          </div>
        </div>

        {/* <div className="col-lg-4">
       
        </div> */}
      </div>
    </div>
  );
}
