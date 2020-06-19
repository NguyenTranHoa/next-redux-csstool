import { AppProvider, Page, Layout } from "@shopify/polaris"
import Generator from "../../components/box-shadow/generator"
import Head from "next/head"
import LayerList from "../../components/box-shadow/layer-list"

const BoxShadow = (props) => {

    return (
        <>
        <Head>
            <title>Box shadow</title>
        </Head>
            <AppProvider>
                <Page>
                    <Layout>
                        <Layout.Section oneHalf>
                            <Generator/>
                            <LayerList/>
                        </Layout.Section>

                        <Layout.Section oneHalf>

                        </Layout.Section>
                    </Layout>
                </Page>
            </AppProvider>
        </>
    )
}

export default BoxShadow