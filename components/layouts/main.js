import Head from 'next/head'
import dynamic from 'next/dynamic'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'
import VoxelDogLoader from '../voxel-dog-loader'

const LazyVoxelDog = dynamic(() => import('../voxel-dog'), {
  ssr: false,
  loading: () => <VoxelDogLoader />
})

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Marcus Ho Jw's Portfolio" />
        <meta name="author" content="Marcus Ho Jw" />
        <meta name="author" content="marcushojww" />
        <link rel="miles-morales" href="miles-morales.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta property="og:site_name" content="Marcus Ho Jw's Portfolio" />
        <meta property="og:type" content="website" />
        <meta property="og:URL" content="website" />
        <meta property="og:image" content="/images/youtube-thumbnail.jpg" />
        <meta property="og:title" content="Marcus Ho Jw's Portfolio" />

        <title>Marcus Ho Jw's Portfolio</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        <LazyVoxelDog />

        {children}

        <Footer />
      </Container>
    </Box>
  )
}

export default Main
