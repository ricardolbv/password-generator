import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import VpnKey from '@material-ui/icons/VpnKeyTwoTone';


const FormPsw = () => (
    <form>
        <div>
            <VpnKey />
        </div>
        <div>
        <TextField variant="outlined" label="Inser actual psw"/>
        </div>
        <div>
        <Button  color="primary"> Hash </Button>
        </div>
    </form>
)

export default FormPsw;


