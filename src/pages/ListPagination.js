import Pagination from '@material-ui/lab/Pagination';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        backgroundColor: "#bebebe",
    }
})


const ListPagination = props => {
    const classes = useStyles();
    const handleChange = (event, page) => {
        props.onChangePages(page);
    }
    return (
    <div>
        <Pagination className={classes.root} count={parseInt(1 + (props.amountItens / 10), 10)} onChange={handleChange} color="primary" />
    </div>
    )
}

export default ListPagination;