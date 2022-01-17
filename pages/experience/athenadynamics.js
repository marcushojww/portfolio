import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  UnorderedList,
  Box,
  Icon
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { ExperienceTitle, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Athena Dynamics">
    <Container>
      <ExperienceTitle>
        Athena Dynamics <Badge>JUN 2020 - DEC 2020</Badge>
      </ExperienceTitle>
      <P>
        Backed by Singapore SGX main-board listed company BH Global Corporation
        Ltd, Athena Dynamics sources and distributes proven technologies to
        Singapore and the Asia Pacific region. As a{' '}
        <strong>Business Development Intern</strong>, I assist the organization
        in generating sales through lead generation, marketing, and other
        corporate strategies.
      </P>
      <UnorderedList mt={4}>
        <ListItem>
          Regularly secured C-suite executives time by overcoming objections and
          tailoring my sales approach, generating over $20,000 in sales revenue
        </ListItem>
        <ListItem>
          Partnered extensively with IMDA, SGTECH and other participating tech
          corporations in setting up webinars to promote cyber security
          solutions under the SMEs Go Digital initiative
        </ListItem>
        <ListItem>
          Spearheaded lead generation campaigns through the active use of
          digital marketing tools such as Sendinblue, Canva and Wix to create
          electronic direct mails, webinar registration pages and solution
          showcase websites
        </ListItem>
      </UnorderedList>

      <List my={4} spacing={1}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://www.appscreener.athenadynamics.com/">
            Wix website to promote Solar appScreener{' '}
            <Icon as={ExternalLinkIcon}></Icon>
          </Link>
        </ListItem>
      </List>
    </Container>
  </Layout>
)

export default Work
