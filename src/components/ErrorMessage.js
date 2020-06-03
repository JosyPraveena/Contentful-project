import React from "react"
import Alert from '@material-ui/lab/Alert';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '30%',
      marginLeft: "100px",
      fontFamily: "Bangers",
      fontSize: "1.5rem",
    },
  }),
);

const ErrorMessage = () =>{
    const classes = useStyles();
    return(
        <Alert justify="center" className={classes.root} severity="error">Only five items can be added at a time</Alert>
    )
}

export default ErrorMessage