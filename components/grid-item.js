import NextLink from 'next/link'
import Image from 'next/image'
import {
  Box,
  Text,
  LinkBox,
  LinkOverlay,
  Badge,
  Flex,
  Button
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
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
  type,
  title,
  thumbnail,
  role,
  desc
}) => {
  let link = type === 'project' ? `/projects/${id}` : `/experience/${id}`

  return (
    <Box w="100%" textAlign="center" className="grid-item-box">
      <LinkBox cursor="pointer">
        <Image
          src={thumbnail}
          alt={title}
          placeholder="blur"
          className="grid-item-thumbnail"
          objectFit="cover"
          height={400}
        />
        <Box p={4}>
          <Text mt={-2} fontSize={20}>
            {title}
          </Text>

          <Flex direction="column">
            {role && (
              <Text
                display="flex"
                justifyContent="center"
                alignItems="center"
                fontSize={14}
                mt={1}
              >
                <Badge colorScheme="teal" mr={2}>
                  ROLE
                </Badge>

                {role}
              </Text>
            )}
            <Text mt={1} fontSize={14}>
              {desc}
            </Text>
          </Flex>
          <NextLink href={link} passHref>
            <LinkOverlay>
              <Button
                mt={3}
                size="md"
                variant="outline"
                fontSize={14}
                rightIcon={<ChevronRightIcon />}
                colorScheme="teal"
              >
                Dive Deeper
              </Button>
            </LinkOverlay>
          </NextLink>
        </Box>
      </LinkBox>
    </Box>
  )
}

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
