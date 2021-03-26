import TopBar from './common/TopBar';
import Grid from '@material-ui/core/Grid'
import PswPage from './pages/PswPage';
import BottomBar from './common/BottomBar';


function App() {
  
  return (
    <>
    <Grid container direction="column" >
      <Grid item>
        <TopBar />
      </Grid>
      <Grid item container >
        <Grid item  sm={2} xs={0} ></Grid>
        <Grid item sm={8} xs={8} >
            <PswPage />
        </Grid>
        <Grid item sm={2} xs={0}  ></Grid>
      </Grid>
    </Grid>
    <BottomBar />
    </>
  );
}

export default App;
