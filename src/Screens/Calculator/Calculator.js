import { Layout } from "../../components";
import { Screen } from "../../components/Screen/Screen";
import { Keyboard } from "../../components/Keyboard/Keyboard";

export const Calculator = () => {
    return <Layout width={'400px'} margin={'0 auto'}>
        <Layout padding={'20px'}background={'#7d7d7f'}>
            <Screen />
        </Layout>
        <Layout padding={'20px'} display={'flex'} flexWrap={'wrap'} background={'#7d7d7f'}>
            <Keyboard />
        </Layout>
    </Layout>;
}