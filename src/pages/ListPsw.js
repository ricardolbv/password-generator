import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import ListPagination from './ListPagination';
import { useState } from 'react';



const useStyles = makeStyles({
    Table: {
        margin: "6px"
    }
})

function ListPsw ({ passwords }) {
    const classes = useStyles();
    const [pagination, setPagination] = useState(1);
    const ref = pagination === 1 ? 0 : (pagination * 10);
    const filterPsws = passwords.slice(ref, pagination * 10);

    return (
    <>
    <TableContainer className={classes.Table}>
        <Table size="small" arial-label="a dense table">
            <TableHead>
                <TableRow >
                    <TableCell>
                        <Typography variant="subtitle1" align="center" > Number of psw </Typography>
                    </TableCell>
                    <TableCell>
                        <Typography variant="subtitle1" align="center"> Before hash </Typography>
                    </TableCell>
                    <TableCell>
                        <Typography variant="subtitle1" align="center"> After hash </Typography>
                    </TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {passwords.length === 0 ? 
                <TableRow>
                    <TableCell colSpan={3}>
                    <Typography variant="h5" align="center" color="primary">
                      Empty List!
                    </Typography>
                    </TableCell>
                </TableRow>
                 : 
                filterPsws.map((item, i) => 
                    <TableRow key={i}>
                        <TableCell align="center">
                            <Typography variant="body1">
                            {i + 1}
                            </Typography>
                        </TableCell>
                        <TableCell align="center">
                            <Typography variant="body1">    
                            {item.psw}
                            </Typography>
                        </TableCell>
                        <TableCell align="center">
                            <Typography variant="overline">
                            {item.hashPsw}
                            </Typography>
                        </TableCell>
                    </TableRow>
                )}
            </TableBody>
        </Table>
    </TableContainer>
    { passwords.length >= 10 ?
        <ListPagination amountItens={passwords.length} onChangePages={setPagination} />
        :
        null
    }
    </>
    )
}

const mapStateToProps = state => ({
    passwords : state.Passwords
  })
  
export default connect(mapStateToProps, null)(ListPsw);