import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { makeStyles } from '@material-ui/core/styles';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        position: 'fixed',
        bottom: 0,
        width: '100%',
        backgroundColor: "#bebebe",
        height: "50px"
    },
    text : {
        margin: "0 auto",
        position: "absolute",
        left: "10px"
    }
})

function BottomBar () {
    const classes = useStyles();
    return (
        <>
        <BottomNavigation className={classes.root} showLabels >
            <a href="https://www.linkedin.com/in/ricardo-vieira-13b864136/" target="_blank" rel="noreferrer">
                <BottomNavigationAction classname={classes.id} label="" icon={<LinkedInIcon />} /> 
            </a>  
            <a href="https://github.com/ricardolbv" target="_blank" rel="noreferrer">
            <BottomNavigationAction classname={classes.id} label="" icon={<GitHubIcon />} />
            </a> 
        <Typography color="textSecondary" variant="body2" className={classes.text}> Created at 2021</Typography>
        </BottomNavigation>
        </>
    )
}

export default BottomBar;