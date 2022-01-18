import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbnailJublia from '../public/images/experience/jublia-card2.png'
import thumbnailAthena from '../public/images/experience/athenadynamics.jpg'

const Experience = () => (
  <Layout title="Professional Experience">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Professional Experience
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem
            id="jublia"
            title="Jublia"
            thumbnail={thumbnailJublia}
            role="Frontend Software Engineer"
            desc="Worked on several big projects for their platform Sense, 
            namely a new smart Home page and a feature to upload multiple 
            sponsorship banners."
          ></WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="athenadynamics"
            title="Athena Dynamics"
            thumbnail={thumbnailAthena}
            role="Business Development Intern"
            desc="Assisted the organization in 
            generating sales through lead generation, 
            marketing, and other corporate strategies."
          ></WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Experience
