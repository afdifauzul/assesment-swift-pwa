import makeStyles from '@material-ui/core/styles/makeStyles';
import { GRAY_PRIMARY, WHITE } from '@theme_color';
import { FlexColumn, FlexRow } from '@theme_mixins';

const useStyles = makeStyles(() => ({
    container: {
        width: '100%',
        height: '100%',
        ...FlexColumn,
    },
    header:{
        textAlign: 'center'
    },
    border: {
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
        borderRadius: '5px',
        padding: '10px',
        margin: '10px',
        width: '350px !important',
        height: 'auto !important',
        ...FlexColumn,
        alignItems: 'center',
    },
    title: {
        textAlign: 'center',
        font: '15px Arial',
    },
    contentContainer:{
        ...FlexRow,
        flexWrap:'wrap',
        justifyContent:'center'
    },
    Cart:{
        width : '90%',
        // height: '100%',
        ...FlexRow,
        flexWrap:'wrap',
        justifyContent:'space-evenly',
    }
}));

export default useStyles;
