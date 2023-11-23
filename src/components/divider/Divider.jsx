import style from "./Divider.module.css";

export default function Divider(props) {
  return (
    <div className={`my-2 ${style.divider}`}>
      <div className="col-md-5">
        <h1>{props.title} </h1>
      </div>
    </div>
  );
}
