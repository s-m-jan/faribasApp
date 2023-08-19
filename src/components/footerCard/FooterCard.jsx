import React from 'react'
import styles from "./FooterCard.module.css"

const FooterCard = (props) => {
  return (
    <div className={styles.cardStyle}>
       <li>
          <div className="card" style={{width: "18rem"}}>
              <img src={props.src} className="card-img-top" alt="..." />
              <div className="card-body">
                {props.showMore? <p style={{color: "#333"}}>{props.firstText}</p> : <p  style={{color: "#333"}}>
                    {props.secondText}
                     <span className="btn fw-bold" style={{color: "#eb2f06"}} onClick={props.onClick}> بیشتر بخوانید</span>
                 </p>}
              </div>
            </div>
          </li>
    </div>
  )
}

export default FooterCard
