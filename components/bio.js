import { Box } from '@chakra-ui/react'
import styled from '@emotion/styled'

export const BioSection = styled(Box)`
  padding-left: 8.1em;
  text-indent: -8.1em;
`

export const BioYear = styled.span`
  font-weight: bold;
  margin-right: ${props => (props.first ? '1em' : '2.4em')};
`
