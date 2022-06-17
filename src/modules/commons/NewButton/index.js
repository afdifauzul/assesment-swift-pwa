import React from 'react';
import Button from '@material-ui/core/Button';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import useStyles from '@core_modules/commons/NewButton/style';
import CircularProgress from '@material-ui/core/CircularProgress';

const NewButton = ({ 
    text, 
    disabled = false,
    loading = false,
    onClick = () => { },
    href = null,
    }) => {
    const classes = useStyles();
    return (
        <Button
            className={classes.button}
            variant="contained"    
            onClick={
                href !== '' && href ? () => Router.push(href) : onClick
            }
            disabled={disabled || loading}
            href={null}
            startIcon={<ShoppingCartIcon />}
        >
            {text}
            {loading && (
                <CircularProgress
                    size={24}
                    className={styles.buttonProgress}
                />
            )}
        </Button>
    );
};

export default NewButton;