import React from "react";
import Layout from "@layout";
import { getAllProducts } from '@core_modules/newPage/services/graphql';
import Content from '@core_modules/newPage/pages/default/components';
import dynamic from 'next/dynamic';

const ErrorView = dynamic(() => import('@core_modules/error/pages/default'), { ssr: false });

const CoreDefault = (props) => {
    const { loading, data, error } = getAllProducts();
    const config ={
        title : 'Custom Page',
        header:'relative',
        headerTitle:'Welcome to Custom Page',
        bottomNav:false
    }

    if (!loading && error) {
        return <ErrorView statusCode={404} {...props} />;
    }
    return(
        <Layout pageConfig={config}{...props}>
            <Content data={data} storeConfig={config} />
        </Layout>
    )
};

export default CoreDefault;