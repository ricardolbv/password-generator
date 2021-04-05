import Grid from '@material-ui/core/Grid';
import ListPsw from './ListPsw';
import FormPswControl from './FormPswControl';
import Paper from '@material-ui/core/Paper';

const FormPage = () => {
    
    return (
    <Grid container spacing={2}>
        <Grid item sm={4} xs={12} >
            <Paper elevation={3}>
                <FormPswControl />
            </Paper>
        </Grid>
        <Grid item sm={8} xs={12} >
            <Paper elevation={3} >
                <ListPsw />
            </Paper>
        </Grid>
    </Grid>
    )
}

export default FormPage;