import TopBar from './common/TopBar';
import Grid from '@material-ui/core/Grid'

function App() {
  return (
    <Grid container xl={12}>
      <Grid item xl={12} sm={12}>
        <TopBar />
      </Grid>
    </Grid>
  );
}

export default App;
