import React from 'react'
import Typography from '@common_typography';
import useStyles from '@core_modules/newpage/pages/default/components/style';
import Card from '@core_modules/newpage/pages/default/components/card';

const ContentPage = ({
  data, storeConfig, t,
}) => {
  const styles = useStyles();

  return (
    <>
      <div className={styles.container}>
        <Typography variant="h1" className={styles.header}>
          {storeConfig.headerTitle}
        </Typography>
        <div className={styles.contentContainer}>
          {data?.products?.items.map((item)=>(
            <div key={item.id}>
              <Card
                t={item.name}
                img={item.small_image.url}
                currency = {item.price_range.maximum_price.regular_price.currency}
                price = {item.price_range.maximum_price.regular_price.value}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default ContentPage