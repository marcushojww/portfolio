import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Flex,
  Image,
  SimpleGrid,
  Button,
  List,
  ListItem,
  Icon,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { MdOutlineWavingHand } from 'react-icons/md'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import { SkillsSection, SkillsType, SkillsValues } from '../components/skills'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import { IoLogoLinkedin, IoLogoGithub, IoMailOutline } from 'react-icons/io5'
import { SiGmail } from 'react-icons/si'
import thumbYouTube from '../public/images/links/youtube.png'
import thumbInkdrop from '../public/images/experience/inkdrop_eyecatch.png'

const Home = () => (
  <Layout>
    <Container>
      <Flex
        borderRadius="lg"
        mb={6}
        p={3}
        justifyContent="center"
        align="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
      >
        Hey <Icon ml={1} mr={2} as={MdOutlineWavingHand} /> I'm an aspiring
        full-stack developer based in Singapore!
      </Flex>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Marcus Ho Jun Wei
          </Heading>
          <p>Friendly Neighbourhood Developer</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="/images/marcushojw.png"
            alt="Profile image"
          />
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading
          display="flex"
          alignItems="center"
          as="h3"
          variant="section-title"
        >
          About Me
        </Heading>
        <Paragraph>
          Marcus is a final year CSD (Computer Science & Design) student at SUTD
          and an aspiring full-stack developer with a passion for building
          digital products he wants. He has a flair for everything related to
          product launch, from planning and design to solving real-world
          challenges with code. When he's not coding, you might see him playing
          tennis or playing the latest online shooter game with his friends.
        </Paragraph>
        <Box align="center" my={4}>
          {/* <NextLink href="/works">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My portfolio
            </Button>
          </NextLink> */}
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Education
        </Heading>
        <BioSection>
          <BioYear first>2019 - Present</BioYear>
          Final year CSD student at Singapore University of Technology and
          Design, specializing in the Software & Systems Engineering Track
        </BioSection>
        <BioSection>
          <BioYear>2011 - 2016</BioYear>
          Completed GCE 'A' Levels (Science) and 6 year Integrated Program at
          Hwa Chong Institution
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Skills
        </Heading>
        <SkillsSection>
          <SkillsType>Languages</SkillsType>
          <SkillsValues>
            HTML, CSS, JavaScript, Python, Java, TypeScript
          </SkillsValues>
        </SkillsSection>
        <SkillsSection>
          <SkillsType>Libraries</SkillsType>
          <SkillsValues>Next.js, React, Redux, jQuery</SkillsValues>
        </SkillsSection>
        <SkillsSection>
          <SkillsType>Frameworks</SkillsType>
          <SkillsValues>Vue.js, Node.js</SkillsValues>
        </SkillsSection>
        <SkillsSection>
          <SkillsType>UI Prototyping</SkillsType>
          <SkillsValues>Figma</SkillsValues>
        </SkillsSection>
        <SkillsSection>
          <SkillsType>Database</SkillsType>
          <SkillsValues>MySQL</SkillsValues>
        </SkillsSection>
      </Section>

      <Section delay={0.3}>
        <Heading display="flex" align="center" as="h3" variant="section-title">
          On the Web
          <Image
            src={useColorModeValue(
              '/images/spiderweb-black.png',
              '/images/spiderweb-white.png'
            )}
            w={6}
            alt="Spiderweb image"
            ml={2}
          ></Image>
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/marcushojww" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoGithub} />}
              >
                GitHub
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href="https://www.linkedin.com/in/marcus-ho-jun-wei-201bb71a0/"
              target="_blank"
            >
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoLinkedin} />}
              >
                LinkedIn
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="mailto:marcushojww@gmail.com" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoMailOutline} />}
              >
                marcushojww@gmail.com
              </Button>
            </Link>
          </ListItem>
        </List>

        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            href="https://www.youtube.com/devaslife"
            title="Dev as Life"
            thumbnail={thumbYouTube}
          >
            My YouTube channel
          </GridItem>
          <GridItem
            href="https://www.inkdrop.app/"
            title="Inkdrop"
            thumbnail={thumbInkdrop}
          >
            A Markdown note-taking app
          </GridItem>
        </SimpleGrid>

        <Box align="center" my={4}>
          <NextLink href="/posts">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Popular posts
            </Button>
          </NextLink>
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Home
