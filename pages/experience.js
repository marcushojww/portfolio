import { Container, Heading, SimpleGrid, Divider, Box } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbnailJublia from '../public/images/experience/jublia-card2.png'
import thumbInkdrop from '../public/images/experience/inkdrop_eyecatch.png'
import thumbnailAthena from '../public/images/experience/athenadynamics.jpg'
import thumbFourPainters from '../public/images/experience/the-four-painters_eyecatch.jpg'
import thumbMenkiki from '../public/images/experience/menkiki_eyecatch.png'
import thumbModeTokyo from '../public/images/experience/modetokyo_eyecatch.png'
import thumbStyly from '../public/images/experience/styly_eyecatch.png'
import thumbPichu2 from '../public/images/experience/pichu2_eyecatch.png'
import thumbFreeDBTagger from '../public/images/experience/freedbtagger_eyecatch.png'
import thumbAmembo from '../public/images/experience/amembo_eyecatch.png'

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
