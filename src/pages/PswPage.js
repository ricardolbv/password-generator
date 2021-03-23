import Grid from '@material-ui/core/Grid';
import FormPsw from './FormPsw';
import ListPsw from './ListPsw';

import Paper from '@material-ui/core/Paper';

const FormPage = () => {
    
    return (
    <Grid container spacing={2}>
        <Grid item sm={4} xs={12} >
            <Paper elevation={3}>
                <FormPsw />
            </Paper>
        </Grid>
        <Grid item sm={8} xs={12} >
            <Paper elevation={3}>
                <ListPsw />
            </Paper>
        </Grid>
    </Grid>
    )
}

export default FormPage;