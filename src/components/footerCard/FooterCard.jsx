import React, { useState } from 'react'
import styles from "./FooterCard.module.css"

const FooterCard = (props) => {
  const [showMore, setShowMore] = useState(false)
  const handleMore = ()=>{
    setShowMore(true)
  }
  const handleLess = ()=>{
    setShowMore(false)
  }
  return (
    <div className={styles.cardStyle}>
       <li>
          <div className="card" style={{width: "18rem"}}>
              <img src={props.src} className="card-img-top" alt="..." />
              <div className="card-body">
                {showMore? <p style={{color: "#333"}}>{props.firstText} <span className="btn fw-bold" style={{color: "#eb2f06"}} onClick={handleLess}> بازگشت به متن کوتاه </span></p> : <p  style={{color: "#333"}}>
                    {props.secondText}
                     <span className="btn fw-bold" style={{color: "#eb2f06"}} onClick={handleMore}> متن کامل </span>
                 </p>}
              </div>
            </div>
          </li>
    </div>
  )
}

export default FooterCard
