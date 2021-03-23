import Grid from '@material-ui/core/Grid';
import FormPsw from './FormPsw';
import ListPsw from './ListPsw';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    Cont: {
        borderStyle: "groove",
        alignContent: "center"
    }
})

const FormPage = () => {
    const classes = useStyles();

    return (
    <Grid container>
        <Grid item sm={6} xs={12} >
            <FormPsw />
        </Grid>
        <Grid item sm={6} xs={12} className={classes.Cont}>
            <ListPsw />
        </Grid>
    </Grid>
    )
}

export default FormPage;