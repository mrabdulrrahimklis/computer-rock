import { useState } from 'react';
import { Layout } from "../index";

export const Screen = () => {


    return (<>
        <Layout
            height={'120px'}
            borderRadius={'5px'}
            background={'#7fffff'}
            border={'1px solid #252528'}
            display={'flex'}
            justifyContent={'space-between'}
        >
            <h4 style={{ margin: '0', padding: '10px', fontWeight: 'normal' }}>
                Unlocked
            </h4>
            <h1 style={{ margin: '0', padding: '10px', lineHeight: '164px' }}>
                Ready
            </h1>
        </Layout>
    </>);
}