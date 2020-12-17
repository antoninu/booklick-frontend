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

export default function Insitutioncard({ name , address ,members }) {
  const classes = useStyles();
 

  return (
    <Card >
      <CardContent>
        <Typography variant="h5" component="h2">
          {name}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {address}
        </Typography>
        <Typography variant="body2" component="p">
          Miembros:
        </Typography>
        {members}
      </CardContent>
        
    </Card>
  );
}
