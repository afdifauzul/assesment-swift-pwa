import React from 'react';
import NewButton from '@core_modules/commons/NewButton';
import useStyles from './style';
import { Typography } from '@material-ui/core/index';

const Card = (props) => {
    const styles = useStyles();
    const { img } = props;
    const { t } = props;
    const {price} =props;
    const {currency} =props;
    

    return (
        <div className={styles.border}>
            <img
                src={img}
                alt={t}
            />
            <h1 className={styles.title}>{t}</h1>
            <div className={styles.Cart}>
                <Typography variant="subtitle1" component="p">
                    {currency} - {price}
                </Typography>
                <NewButton text="Add to Cart"/>
            </div>
        </div>
    );
};

export default Card;