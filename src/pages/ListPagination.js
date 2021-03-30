import Pagination from '@material-ui/lab/Pagination';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    root: {
        backgroundColor: "#bebebe",
    }
})


const ListPagination = props => {
    const classes = useStyles();
    const handleChange = (event, page) => {
        console.log(page);
    }
    return (
    <div>
        <Pagination className={classes.root} count={props.amountItens / 10} onChange={handleChange} color="primary" />
    </div>
    )
}

export default ListPagination;