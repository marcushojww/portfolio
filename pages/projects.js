import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbnailSinghealth from '../public/images/experience/singhealth.jpg'
import thumbInkdrop from '../public/images/experience/inkdrop_eyecatch.png'
import thumbnailAthena from '../public/images/experience/athenadynamics.jpg'
import thumbFourPainters from '../public/images/experience/the-four-painters_eyecatch.jpg'
import thumbMenkiki from '../public/images/experience/menkiki_eyecatch.png'
import thumbModeTokyo from '../public/images/experience/modetokyo_eyecatch.png'
import thumbStyly from '../public/images/experience/styly_eyecatch.png'
import thumbPichu2 from '../public/images/experience/pichu2_eyecatch.png'
import thumbFreeDBTagger from '../public/images/experience/freedbtagger_eyecatch.png'
import thumbAmembo from '../public/images/experience/amembo_eyecatch.png'

const Projects = () => (
  <Layout title="Projects">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Projects
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem
            id="singhealth"
            title="SingHealth Retail Management Web App"
            type="project"
            thumbnail={thumbnailSinghealth}
            desc="A full stack web application designed to ease the auditing process in SingHealth."
          ></WorkGridItem>
        </Section>

        <Section>
          <WorkGridItem
            id="godutchleh"
            title="Athena Dynamics"
            thumbnail={thumbnailAthena}
            role="Business Development Intern"
            desc="Assisted the organization in 
            generating sales through lead generation, 
            marketing, and other corporate strategies."
          ></WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="fourpainters"
            title="The four painters"
            thumbnail={thumbFourPainters}
          >
            A video work generated with deep learning, imitating famous four
            painters like Van Gogh
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem id="menkiki" thumbnail={thumbMenkiki} title="Menkiki">
            An app that suggests ramen(noodle) shops based on a given photo of
            the ramen you want to eat
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Collaborations
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.3}>
          <WorkGridItem
            id="modetokyo"
            thumbnail={thumbModeTokyo}
            title="mode.tokyo"
          >
            The mode magazine for understanding to personally enjoy Japan
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem id="styly" thumbnail={thumbStyly} title="Styly">
            A VR Creative tools for fashion brands
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.4}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Old works
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.5}>
          <WorkGridItem id="pichu2" thumbnail={thumbPichu2} title="Pichu*Pichu">
            Twitter client app for iPhone Safari
          </WorkGridItem>
        </Section>
        <Section delay={0.5}>
          <WorkGridItem
            id="freedbtagger"
            thumbnail={thumbFreeDBTagger}
            title="freeDBTagger"
          >
            Automatic audio file tagging tool using FreeDB for Windows
          </WorkGridItem>
        </Section>
        <Section delay={0.6}>
          <WorkGridItem id="amembo" thumbnail={thumbAmembo} title="Amembo">
            P2P private file sharing tool with MSN Messenger integration for
            Windows
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Projects
