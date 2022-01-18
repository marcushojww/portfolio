import {
  Container,
  Badge,
  List,
  ListItem,
  UnorderedList
} from '@chakra-ui/react'
import { ExperienceTitle, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Jublia">
    <Container>
      <ExperienceTitle>
        Jublia <Badge>MAY 2021 - SEP 2021</Badge>
      </ExperienceTitle>
      <P>
        Jublia is a global pioneer in data analytics for business matching and
        event networking. During my fulfilling internship stint as a{' '}
        <strong>Frontend Software Engineer </strong>there, I worked on several
        big projects for their platform Sense, namely a new smart Home page and
        a new feature to upload multiple sponsorship banners.
      </P>
      <UnorderedList mt={4}>
        <ListItem>
          Actively involved in the migration of code base from jQuery to Vue.js
          to create a more maintainable and modular architecture
        </ListItem>
        <ListItem>
          Converted business and user requirements into high fidelity UI
          prototypes using Figma
        </ListItem>
        <ListItem>
          Revamped UI interface for web platform with a newly designed smart
          home page and user-friendly navigation side bar
        </ListItem>
        <ListItem>
          Ensuring proper documentation and reports in all stages of product
          life cycle
        </ListItem>
      </UnorderedList>

      <List my={4} spacing={1}>
        <ListItem>
          <Meta>Languages</Meta>
          <span>HTML5, CSS3, SASS, JavaScript, TypeScript</span>
        </ListItem>
        <ListItem>
          <Meta>Frameworks</Meta>
          <span>Vue.js, Bootstrap</span>
        </ListItem>
        <ListItem>
          <Meta>Libraries</Meta>
          <span>jQuery</span>
        </ListItem>
        <ListItem>
          <Meta>UI/UX</Meta>
          <span>Figma</span>
        </ListItem>
      </List>

      <WorkImage
        src="/images/experience/jublia-homepage.jpg"
        alt="Jublia Homepage"
      />
      <WorkImage
        src="/images/experience/jublia-navbar.jpg"
        alt="Jublia Navbar"
      />
      <WorkImage
        src="/images/experience/jublia-sponsorship-banners.jpg"
        alt="Jublia Sponsorship Banners"
      />
    </Container>
  </Layout>
)

export default Work
