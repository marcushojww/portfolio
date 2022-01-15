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
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="SingHealth Web App">
    <Container>
      <Title>
        SingHealth Retail Management App <Badge>JAN 2021 - APR 2021</Badge>
      </Title>
      <P>
        Part of SUTD’s 50.003 ‘Elements of Software Construction’ module where
        we built a full stack application to ease the auditing process in the
        SingHealth Institution. We engaged with the SingHealth staff regularly
        to finetune the user requirements and employed the Scrum methodology in
        our app development process.
      </P>
      <UnorderedList mt={4}>
        <ListItem>
          Partnered extensively with the backend team to implement RESTful API
          to optimize HTTP requests and responses in our application
        </ListItem>
        <ListItem>
          Designed and developed responsive and browser compatible pages
        </ListItem>
      </UnorderedList>

      <List my={4} spacing={1}>
        <ListItem>
          <Meta>Languages</Meta>
          <span>HTML5, CSS3, JavaScript, Java, mySQL</span>
        </ListItem>
        <ListItem>
          <Meta>Frameworks</Meta>
          <span>Spring</span>
        </ListItem>
        <ListItem>
          <Meta>Libraries</Meta>
          <span>React, Material UI</span>
        </ListItem>
        <ListItem>
          <Meta>UI/UX</Meta>
          <span>Figma</span>
        </ListItem>
        <ListItem>
          <Meta>Source Code</Meta>
          <Link href="https://github.com/marcushojww/SingHealthAuditApp">
            View Source Code
            <Icon ml={2} as={ExternalLinkIcon}></Icon>
          </Link>
        </ListItem>
      </List>

      <AspectRatio maxW="full" ratio={4 / 3} mb={4}>
        <iframe
          title="Singhealth App Demo"
          src="https://www.youtube.com/embed/z_dIINeOghI"
          allowFullScreen
        ></iframe>
      </AspectRatio>
    </Container>
  </Layout>
)

export default Work
