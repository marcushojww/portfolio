import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  UnorderedList,
  Box,
  AspectRatio,
  Icon
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { ProjectsTitle, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="SingHealth Web App">
    <Container>
      <ProjectsTitle>
        #SGUNITED - Python GUI Game <Badge>MAR 2020 - APR 2020</Badge>
      </ProjectsTitle>
      <P>
        Part of SUTD’s 10.009 ‘The Digital World’ module that aimed to solidify
        our knowledge on Object Oriented Programming and develop our confidence
        to program in the Python language. <br />
        Awarded as one of the top projects showcased in SUTD’s Virtual Design
        and Exhibition Students Project Showcase 2020
      </P>

      <List my={4} spacing={1}>
        <ListItem>
          <Meta>Languages</Meta>
          <span>Python, Kivy</span>
        </ListItem>
        <ListItem>
          <Meta>Github</Meta>
          <Link href="https://github.com/marcushojww/SGUNITED">
            View Source Code
            <Icon ml={2} as={ExternalLinkIcon}></Icon>
          </Link>
        </ListItem>
      </List>

      <AspectRatio maxW="full" ratio={4 / 3} mb={4}>
        <iframe
          title="Singhealth App Demo"
          src="https://www.youtube.com/embed/q87jkWRHpik"
          allowFullScreen
        ></iframe>
      </AspectRatio>
    </Container>
  </Layout>
)

export default Work
