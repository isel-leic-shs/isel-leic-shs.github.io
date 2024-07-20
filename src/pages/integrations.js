import React from 'react';
import Layout from 'components/layout';
import {ThemeProvider} from "theme-ui";
import theme from "../theme";
import {StickyProvider} from "../contexts/app/app.provider";
import IntegrationsPageContent from "../sections/integrations-page-content";

export default function IntegrationsPage() {
    return (
        <ThemeProvider theme={theme}>
            <StickyProvider>
                <Layout reserved path="/" buttonTitle="Go Home">
                    <IntegrationsPageContent/>
                </Layout>
            </StickyProvider>
        </ThemeProvider>
    );
}
