import NextLink from 'next/link'
import Image from 'next/image'
import { Box, Text, LinkBox, LinkOverlay, Badge, Flex } from '@chakra-ui/react'
import { Global } from '@emotion/react'

export const GridItem = ({ children, href, title, thumbnail }) => (
  <Box w="100%" textAlign="center">
    <LinkBox cursor="pointer">
      <Image
        src={thumbnail}
        alt={title}
        className="grid-item-thumbnail"
        placeholder="blur"
        loading="lazy"
      />
      <LinkOverlay href={href} target="_blank">
        <Text mt={2}>{title}</Text>
      </LinkOverlay>
      <Text fontSize={14}>{children}</Text>
    </LinkBox>
  </Box>
)

export const WorkGridItem = ({
  children,
  id,
  title,
  thumbnail,
  role,
  desc
}) => (
  <Box w="100%" textAlign="center" className="grid-item-box">
    <LinkBox cursor="pointer">
      <Image
        src={thumbnail}
        alt={title}
        placeholder="blur"
        className="grid-item-thumbnail"
        objectFit="cover"
        height={300}
      />
      <Box p={4}>
        <NextLink href={`/experience/${id}`} passHref>
          <LinkOverlay>
            <Text mt={-2} fontSize={20}>
              {title}
            </Text>
          </LinkOverlay>
        </NextLink>
        <Flex direction="column" mt={1}>
          <Text
            display="flex"
            justifyContent="center"
            alignItems="center"
            fontSize={14}
          >
            <Badge colorScheme="teal" mr={2}>
              ROLE
            </Badge>
            {role}
          </Text>
          <Text mt={1} fontSize={14}>
            {desc}
          </Text>
        </Flex>
      </Box>
    </LinkBox>
  </Box>
)

export const GridItemStyle = () => (
  <Global
    styles={`
      .grid-item-thumbnail {
        border-radius: 12px 12px 0 0;
      }
      .grid-item-box {
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px; 
        border-radius: 12px;
      }
    `}
  />
)
