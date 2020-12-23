import { button } from "../../constants/constants";
import { Layout } from "../index";

export const Keyboard = () => {
    function addItem(item) {
        console.log('123', item);
    }

    const keyboard = button.map((item, index) => {
        return (<Layout
            flex={'0 0 33.333%'}
            background={'#7d7d7f'}
            key={index}
        >
            <Layout
                onClick={() => addItem(item)}
                margin={'10px auto'}
                height={'100px'}
                width={'100px'}
                background={'#63636e'}
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}
                borderRadius={'5px'}
                border={'1px solid #252528'}
            >
                <span style={{fontSize: '40px', color: 'white'}}>{item.character}</span>
            </Layout>
        </Layout>);
    });

    return <>
        {keyboard}
    </>;
}