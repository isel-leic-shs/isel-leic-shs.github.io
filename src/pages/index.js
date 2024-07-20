import React from 'react';
import {ThemeProvider} from 'theme-ui';
import {StickyProvider} from 'contexts/app/app.provider';
import theme from 'theme';
import Layout from 'components/layout';
import BannerSection from 'sections/bannerSection';
import CorePhilosophySection from 'sections/core-philosophy-section';
import FeaturesSection from 'sections/featuresSection';
import WorkFlowSection from 'sections/workFlowSection';
import IntegrationsSection from "../sections/IntegrationsSection";

export default function IndexPage() {
    return (
        <ThemeProvider theme={theme}>
            <StickyProvider>
                <Layout>
                    <BannerSection/>
                    <FeaturesSection/>
                    <CorePhilosophySection/>
                    <IntegrationsSection/>
                    <WorkFlowSection/>
                </Layout>
            </StickyProvider>
        </ThemeProvider>
    );
}
