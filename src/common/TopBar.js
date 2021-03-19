import AppBar  from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    barText: {
      marginLeft: 'auto',
      marginRight: 'auto',
    },
});
  


const TopBar = () => {
    const classes = useStyles();

    return (
    <AppBar position="static">
        <ToolBar>
            <Typography variant='h5' className={classes.barText} >
                Password generator
            </Typography>
        </ToolBar>
    </AppBar>
    )
}

export default TopBar;