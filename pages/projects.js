import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbnailSinghealth from '../public/images/projects/singhealth.jpg'
import thumbnailMaskDetector from '../public/images/projects/mask-detector.jpg'
import thumbnailGoDutchLeh from '../public/images/projects/godutchleh.jpg'
import thumbnailSGUNITED from '../public/images/projects/sgunited.png'

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
            desc="A full stack web application designed to ease auditing in SingHealth."
          ></WorkGridItem>
        </Section>

        <Section>
          <WorkGridItem
            id="maskdetector"
            title="Proper Mask Detector"
            thumbnail={thumbnailMaskDetector}
            type="project"
            desc="Detecting proper wearing of mask using machine learning and computer vision."
          ></WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="godutchleh"
            title="GoDutchLeh - Android Mobile App"
            thumbnail={thumbnailGoDutchLeh}
            type="project"
            desc="An Android App that allows users to 
            keep track of bills with their friends and split group expenses with ease."
          ></WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem
            id="sgunited"
            thumbnail={thumbnailSGUNITED}
            title="#SGUNITED - Python GUI Game"
            type="project"
            desc="A fun Python GUI game created to raise awareness on the importance of
             wearing a mask during the COVID-19 pandemic."
          ></WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Projects
