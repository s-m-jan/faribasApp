import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";


export default function QuestionCard(props) {
  return (
    <Card sx={{ maxWidth: 345, direction: "rtl" }}>
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
        <Button size="small">ادامه مطلب...</Button>
      </CardActions>
    </Card>
  );
}
