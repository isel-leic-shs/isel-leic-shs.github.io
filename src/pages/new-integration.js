import React from 'react';
import Layout from 'components/layout';
import {ThemeProvider} from "theme-ui";
import theme from "../theme";
import {StickyProvider} from "../contexts/app/app.provider";
import NewIntegrationPageContent from "../sections/new-integration-page-content";

export default function NewIntegrationPage() {
    return (
        <ThemeProvider theme={theme}>
            <StickyProvider>
                <Layout reserved path="/integrations" buttonTitle="Go Back">
                    <NewIntegrationPageContent/>
                </Layout>
            </StickyProvider>
        </ThemeProvider>
    );
}
