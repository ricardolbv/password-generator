import TopBar from './common/TopBar';
import Grid from '@material-ui/core/Grid'
import PswPage from './pages/PswPage';

function App() {
  return (
    <Grid container direction="column" >
      <Grid item>
        <TopBar />
      </Grid>
      <Grid item container>
        <Grid item  sm={2} xs={0}> Hellooo</Grid>
        <Grid item sm={8} xs={8}>
            <PswPage />
        </Grid>
        <Grid item sm={2} xs={0}> Hellooo</Grid>
      </Grid>
    </Grid>
  );
}

export default App;
