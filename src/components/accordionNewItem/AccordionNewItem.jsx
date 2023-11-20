import { useState } from "react";
import style from "./AccordionNewItem.module.css";

export default function AccordionNewItem(props) {
  const [showAnswer, setShowAnswer] = useState(false)

  const handleClick = () => {
    setShowAnswer(!showAnswer)
  }
  return (
    <div className={style.tab}>

      <label onClick={handleClick} className={style.queryLabel}>
        <div className={style.querylabelContent}>
          <h2 className={showAnswer ? style.h2two : style.h2one}>{props.number}</h2>
          <h3 className={showAnswer ? style.h3two : style.h3one}>این یک سوال ساختگی است؟</h3>
        </div>
        <div className={style.addition}>
          {showAnswer ? <ion-icon name="close-outline"></ion-icon> : <ion-icon name="add-outline"></ion-icon>}
        </div>
      </label>

      <div className={showAnswer ? style.contentWrappertwo : style.contentWrapperone}>
        <p className={style.content}>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
          کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی
          در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می
          طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
          الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این
          صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و
          شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای
          اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده
          قرار گیرد.
        </p>
      </div>
    </div>
  );
}
