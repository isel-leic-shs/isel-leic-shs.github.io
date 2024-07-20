/** @jsx jsx */
import {Box, Card, Container, Grid, Heading, jsx, Text} from 'theme-ui';

const data = [
    {
        id: 1,
        title: 'https://github.com/isel-leic-shs',
        text:
            'Installed in SHS Organization',
    },
    {
        id: 2,
        title: 'Backstage Org',
        text:
            'Installed in Backstage Organization',
    },
    {
        id: 3,
        title: 'Simao Account',
        text:
            'Installed for Simao account',
    },
];

export default function ProjectsSection() {
    return (
        <section sx={{variant: 'section.feature'}}>
            <Container>
                <Box sx={{variant: 'sectionHeader'}}>
                    <Heading
                        as="h3"
                        sx={{
                            variant: 'sectionHeader.title',
                            color: 'heading_secondary',
                        }}
                    >
                        Configured Projects
                    </Heading>
                </Box>

                <Grid sx={styles.grid}>
                    {data.map((item) => (
                        <Card key={item.id} sx={{
                            padding: 2,
                            borderRadius: 4,
                            boxShadow: '0 0 8px rgba(0, 0, 0, 0.125)',
                        }}>
                            <Box sx={styles.wrapper}>
                                <Heading sx={styles.wrapper.title}>{item.title}</Heading>
                                <Text sx={styles.wrapper.subTitle}>{item.text}</Text>
                            </Box>
                        </Card>
                    ))}
                </Grid>
            </Container>
        </section>
    );
}

const styles = {
    grid: {
        pt: [0, null, null, null, null, null, null, 3],

        width: ['100%', '80%', '100%'],
        mx: 'auto',
        gridTemplateColumns: [
            'repeat(1,1fr)',
            null,
            'repeat(2,1fr)',
            null,
            'repeat(3,1fr)',
        ],
    },
    wrapper: {
        width: '100%',
        display: 'flex',
        padding: 16,
        flexDirection: 'column',
        title: {
            fontSize: 3,
            color: 'heading_secondary',
            lineHeight: 1.4,
            fontWeight: 700,
            mb: [2, null, null, null, 3],
        },

        subTitle: {
            fontSize: 1,
            fontWeight: 400,
            lineHeight: [1.85, null, 2],
        },
    },
};
