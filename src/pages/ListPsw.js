import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';

const list = [
    {id: "01", beforeHash: "Test", afterHash: "sgfwgrg" },
]

const ListPsw = () => (
    <TableContainer >
        <Table size="small" arial-label="a dense table">
            <TableHead>
                <TableRow>
                    <TableCell>
                        <Typography variant="h7" align="center"> Number of psw </Typography>
                    </TableCell>
                    <TableCell>
                        <Typography variant="h7" align="center"> Before hash </Typography>
                    </TableCell>
                    <TableCell>
                        <Typography variant="h7" align="center"> After hash </Typography>
                    </TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {list.map(item => 
                    <TableRow>
                        <TableCell >
                            <Typography variant="body1">
                            {item.id}
                            </Typography>
                        </TableCell>
                        <TableCell >
                            <Typography variant="body1">    
                            {item.beforeHash}
                            </Typography>
                        </TableCell>
                        <TableCell >
                            <Typography variant="overline">
                            {item.afterHash}
                            </Typography>
                        </TableCell>
                    </TableRow>
                )}
            </TableBody>
        </Table>
    </TableContainer>
)

export default ListPsw;