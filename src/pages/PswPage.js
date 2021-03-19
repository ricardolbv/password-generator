import Grid from '@material-ui/core/Grid';
import FormPsw from './FormPsw';

const FormPage = () => (
    <Grid container>
        <Grid item sm={6} xs={12}>
            <FormPsw />
        </Grid>
        <Grid item sm={6} xs={12}>
            <div style={{ backgroundColor: 'grey'}}> Testando list</div>
        </Grid>
    </Grid>
)

export default FormPage;