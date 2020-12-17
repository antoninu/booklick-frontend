import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});

export default function Booklistcard({ name = "mmgv", owner = "mateo",content }) {
  const classes = useStyles();
  const content2 = localStorage.getItem("content")

  
  const filteredContent = () => {
    return JSON.parse(content2).filter(book =>{
     if(content.includes(book.id.toString())){
       return true
     }
     return false
    })
  }
  console.log(filteredContent())
  return (
    <Card >
      <CardContent>
        <Typography variant="h5" component="h2">
          {name}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {owner}
        </Typography>
        <Typography variant="body2" component="p">
          <b>Contenido:</b>
        </Typography>
        {filteredContent().map(({title,upload},i)=> {return <>
        <Button key={i} href={upload} >{title}</Button></>})}
      </CardContent>
        
    </Card>
  );
}
