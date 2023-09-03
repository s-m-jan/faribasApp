import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import { Link, useParams } from "react-router-dom";



export default function QuestionCard(props) {
 
  return (
    <Card sx={{ maxWidth: 345, direction: "rtl", marginBottom: "10px" }}>
      <CardMedia component="img" alt="green iguana" image={props.imageUrl} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {props.content}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={`/articles/article/${parseInt(props.id)}`}>
        <Button  size="small">ادامه مطلب...</Button>
        </Link>
      </CardActions>
    </Card>
  );
}
