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
  <Layout title="GoDutchLeh">
    <Container>
      <ProjectsTitle>
        GoDutchLeh - Android Mobile App <Badge>SEP 2020 - DEC 2020</Badge>
      </ProjectsTitle>
      <P>
        Part of SUTD’s 50.001 ‘Introduction to Information Systems &
        Programming’ module where we built an Android App that allows users to
        keep track of bills with their friends and split group expenses with
        ease.
      </P>
      <UnorderedList mt={4}>
        <ListItem>
          Played a key role in implementing application logic using Android
          Studio IDE and Android SDK
        </ListItem>
        <ListItem>
          Actively prototyped GoDutchLeh’s user interface (UI) with Figma before
          programming the final UI with clean, modular, robust code using XML
          with Android SDK platform
        </ListItem>
      </UnorderedList>

      <List my={4} spacing={1}>
        <ListItem>
          <Meta>Languages</Meta>
          <span>Java, XML</span>
        </ListItem>
        <ListItem>
          <Meta>IDE</Meta>
          <span>Android Studio</span>
        </ListItem>
        <ListItem>
          <Meta>UI/UX</Meta>
          <span>Figma</span>
        </ListItem>
        <ListItem>
          <Meta>Github</Meta>
          <Link href="https://github.com/marcushojww/GoDutchLeh">
            View Source Code
            <Icon ml={2} as={ExternalLinkIcon}></Icon>
          </Link>
        </ListItem>
      </List>

      <WorkImage
        src="/images/projects/godutchleh-poster.png"
        alt="Jublia Homepage"
      />
    </Container>
  </Layout>
)

export default Work
