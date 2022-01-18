import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  UnorderedList,
  Box,
  AspectRatio,
  Icon,
  Button
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { ProjectsTitle, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Proper Mask Detection">
    <Container>
      <ProjectsTitle>
        Proper Mask Detection<Badge ml={2}>SEP 2021 - DEC 2021</Badge>
      </ProjectsTitle>
      <P>
        Part of SUTD’s 50.038 ‘Computational Data Science’ module where we were
        tasked to use machine learning tools to tackle a problem or topic of
        choice. As we have chosen to tackle a computer vision task, we used a
        popular open source machine learning framework, PyTorch, to train and
        deploy our deep learning models. In this project, we employed 3
        different Convolution Neural Network(CNN) models, namely LeNet, ResNet
        and GoogLeNet, to test the efficacy of each model and see if a
        particular model was more suited towards the problem at hand.
      </P>

      <List my={4} spacing={1}>
        <ListItem>
          <Meta>Languages</Meta>
          <span>Python</span>
        </ListItem>
        <ListItem>
          <Meta>Frameworks</Meta>
          <span>PyTorch</span>
        </ListItem>
        <ListItem>
          <Meta>GitHub</Meta>
          <Link href="https://github.com/marcushojww/properMaskWearingDetector">
            View Source Code
            <Icon ml={2} as={ExternalLinkIcon}></Icon>
          </Link>
        </ListItem>
      </List>
      <Button colorScheme="teal" mb={4}>
        <a href="/assets/mask_detector_report.pdf" download>
          Download PDF Report
        </a>
      </Button>
    </Container>
  </Layout>
)

export default Work
