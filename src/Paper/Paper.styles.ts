import {makeStyles} from "@material-ui/styles";
import {Theme} from "@material-ui/core";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";

export const useStyles = makeStyles((theme: Theme) => ({
    root: {
        ...theme.mixins.gutters(),
        paddingBottom: theme.spacing.unit * 2,
        marginTop: 30,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        maxWidth: 600
    },
}), {defaultTheme: createMuiTheme()} as any);