import { useQuery } from "react-query";
import Axios from "axios";
import { useParams } from "react-router-dom";
import style from "./Article.module.css";
const Article = () => {
  const params = useParams();
  const { data } = useQuery(["singleArticle"], () => {
    return Axios.get(`http://localhost:8000/questions/${params.id}`).then(
      (res) => res.data
    );
  });
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
