import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Divider,
  Heading,
  OrderedList,
  ListItem,
  Grid,
  GridItem,
  theme,
  Image,
  Button,
  Link,
  Flex,
  Spacer,
} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons'
import image from './images/zuri.jpeg';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Box mb={20} bg='#718096'>
        <Flex>
  <Box p="2">
  <Image
  borderRadius="full"
  boxSize="150px"
  src={image}
  alt="Zuri Internship"
/>
  </Box>
  <Spacer />
  <Box mt={12} mr={6}>
  <Button>
  <Link href="https://internship.zuri.team/" isExternal>
  Vist Zuri Internship <ExternalLinkIcon mx="2px" />
</Link>
  </Button>
  </Box>
</Flex>
</Box>
        <Grid
  h="200px"
  templateRows="repeat(3, 1fr)"
  templateColumns="repeat(3, 1fr)"
  gap={4}
>
  <GridItem rowSpan={3} colSpan={1} bg="#38B2AC"><Heading as="h3" size="lg" color='white'>PROFILE</Heading>
  <Divider />
  <Box alignItems="start">
  <Box
      p={5}
      shadow="md"
      borderWidth="1px"
      flex="1"
      borderRadius="md"
    >
      <Heading fontSize="xl" color='white'>Name</Heading>
      <Text mt={4}>Atwine Nickson</Text>
    </Box>
    <Box
      p={5}
      shadow="md"
      borderWidth="1px"
      flex="1"
      borderRadius="md"
    >
      <Heading fontSize="xl" color='white'>Date of Birth</Heading>
      <Text mt={4}>16-10-1980</Text>
    </Box>
    <Box
      p={5}
      shadow="md"
      borderWidth="1px"
      flex="1"
      borderRadius="md"
    >
      <Heading fontSize="xl" color='white'>Address</Heading>
      <Text mt={4}>Mengo Kampala</Text>
    </Box>
    <Box
      p={5}
      shadow="md"
      borderWidth="1px"
      flex="1"
      borderRadius="md"
    >
      <Heading fontSize="xl" color='white'>Email</Heading>
      <Text mt={4}>a@gmail.com</Text>
    </Box>
    <Box
      p={5}
      shadow="md"
      borderWidth="1px"
      flex="1"
      borderRadius="md"
    >
      <Heading fontSize="xl" color='white'>Phone</Heading>
      <Text mt={4}>+256700988564</Text>
    </Box>
    <Box
      p={5}
      shadow="md"
      borderWidth="1px"
      flex="1"
      borderRadius="md"
    >
      <Heading fontSize="xl" color='white'>Website</Heading>
      <Text mt={4}>www.zuri.com</Text>
    </Box>
  </Box>
    </GridItem>
  <GridItem colSpan={2} bg="white" ><Heading as="h3" size="lg" color="#9DECF9" >JOB EXPERIENCE</Heading >
  <Divider />
  <Grid
  h="200px"
  templateRows="repeat(2, 1fr)"
  templateColumns="repeat(3, 1fr)"
  gap={4}
>
<GridItem rowSpan={1} colSpan={1} bg="#E2E8F0">2019-2021
    </GridItem>
    <GridItem  colSpan={2} bg="#E2E8F0">
      <Box>
        <Text fontSize="md">
          Worked at Microsoft where i worked on solving bugs and making sure the platform
          is working well
        </Text>
      </Box>
    </GridItem>
    <GridItem rowSpan={1} colSpan={1} bg="#E2E8F0">2015-2019
    </GridItem>
    <GridItem  colSpan={2} bg="#E2E8F0">
    <Box>
        <Text fontSize="md">
          Worked at Microsoft where i worked on solving bugs and making sure the platform
          is working well
        </Text>
      </Box>
    </GridItem>
  </Grid>
  
  </GridItem>
  <GridItem colSpan={2} bg="white" ><Heading as="h3" size="lg" color="#9DECF9" >Education</Heading >
  <Divider />
  <Grid
  h="200px"
  templateRows="repeat(2, 1fr)"
  templateColumns="repeat(3, 1fr)"
  gap={4}
>
<GridItem rowSpan={1} colSpan={1} bg="#E2E8F0">2015-2021
    </GridItem>
    <GridItem  colSpan={2} bg="#E2E8F0">
    <Box>
        <Text fontSize="md">
          Makerere University
        </Text>
      </Box>
    </GridItem>
    <GridItem rowSpan={1} colSpan={1} bg="#E2E8F0">2009-2014
    </GridItem>
    <GridItem  colSpan={2} bg="#E2E8F0">Lubaga High School Kampala
    </GridItem>
  </Grid>
  
  </GridItem>
  <GridItem colSpan={2} bg="white" ><Heading as="h3" size="lg" color="#9DECF9">SKILLS</Heading >
  <Divider />
  <Grid
  h="200px"
  templateRows="repeat(1, 1fr)"
  templateColumns="repeat(2, 1fr)"
  gap={4}
>
<GridItem rowSpan={1} colSpan={1} bg="#E2E8F0">
<Box alignItems="start">
<Heading as="h3" size="md" >Software Development</Heading >
<OrderedList>
  <ListItem>Lorem ipsum dolor sit amet</ListItem>
  <ListItem>Consectetur adipiscing elit</ListItem>
  <ListItem>Integer molestie lorem at massa</ListItem>
  <ListItem>Facilisis in pretium nisl aliquet</ListItem>
</OrderedList>
  </Box>
    </GridItem>
    <GridItem colSpan={1} bg="#E2E8F0">
    <Box alignItems="start">
    <Heading as="h3" size="md" >System Administration</Heading >
    <OrderedList>
  <ListItem>Lorem ipsum dolor sit amet</ListItem>
  <ListItem>Consectetur adipiscing elit</ListItem>
  <ListItem>Integer molestie lorem at massa</ListItem>
  <ListItem>Facilisis in pretium nisl aliquet</ListItem>
</OrderedList>
  </Box>
    </GridItem>
  
  </Grid>
  
  
  </GridItem>
</Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
