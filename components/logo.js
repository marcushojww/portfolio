import Link from 'next/link'
import Image from 'next/image'
import { Box, Heading, Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;

  img {
    transition: 200ms ease;
    padding-right: 5px !important;
  }

  &:hover img {
    transform: rotate(20deg);
  }
`

const Logo = () => {
  const footPrintImg = `/images/${useColorModeValue(
    'black',
    'white'
  )}-spider.png`

  return (
    <Link href="/">
      <a>
        <LogoBox>
          <Image src={footPrintImg} width={30} height={30} alt="logo" />
          <Heading
            color={useColorModeValue('gray.800', 'whiteAlpha.900')}
            fontFamily='M PLUS Rounded 1c", sans-serif'
            fontWeight="bold"
            size="lg"
            letterSpacing={'tighter'}
          >
            Marcus Ho Jw
          </Heading>
        </LogoBox>
      </a>
    </Link>
  )
}

export default Logo
