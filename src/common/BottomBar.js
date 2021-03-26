import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import VpnKey from '@material-ui/icons/VpnKeyTwoTone';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        position: 'fixed',
        bottom: 0,
        width: '100%',
        backgroundColor: 'grey',
    }
})

function BottomBar () {
    const classes = useStyles();

    return (
        <div>
        <BottomNavigation className={classes.root} showLabels>
            <BottomNavigationAction label="Created at 2021" icon={<VpnKey />}/>
        </BottomNavigation>
        </div>
    )
}

export default BottomBar;