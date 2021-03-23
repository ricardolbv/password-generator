import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import VpnKey from '@material-ui/icons/VpnKeyTwoTone';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    Form: {
      margin: "0 auto",
      width: "200px"
    },
    FormElements: {
      margin: '6px',
    },
    FormButton: {
      position: 'relative',
      left: '110px',
      margin: '6px'
    } 
});

const FormPsw = () => {
    const classes = useStyles();
    return (
    <form className={classes.Form}>
        <div className={classes.FormElements}>
            <VpnKey />
            <Typography variant='h6'>
                Hashing passwords!
            </Typography>
        </div>
        <div className={classes.FormElements}>
        <TextField variant="outlined" label="Insert a value"/>
        </div>
        <div className={classes.FormElements}>
        <Button className={classes.FormButton} color="primary" variant="contained" > 
            Hash 
        </Button>
        </div>
    </form>
    )
}

export default FormPsw;


