
import { useParams } from "react-router-dom";
import style from "./Article.module.css";
import useFetch from "../../hooks/useFetch";
const Article = () => {
  const params = useParams();

  const {data}= useFetch("singleArticle", `http://localhost:8000/questions/${params.id}`)
  return (
    <div className={style.container}>
      <h1>{data?.title}</h1>
      <div className={style.title}>
        <p>{data?.content}</p>
        <div className={style.imgWrapper}>

        <img src={data?.imageUrl} />
        </div>
      </div>

      <p>{data?.body}</p>
    </div>
  );
};

export default Article;
