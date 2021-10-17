//import Image from 'next/image';
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
  Image
} from '@chakra-ui/react';
interface postProps{
    title: string;
    link:string;
    time:string;
}

export default function PostBlog({title,link,time}:postProps) {
  return (
    <Center py={6}>
      <Box
        maxW={'445px'}
        maxH={'400px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'md'}
        p={6}
        overflow={'hidden'}>
        
        <Stack>
    
          <Heading
            color={useColorModeValue('gray.700', 'white')}
            fontSize={'2xl'}
            fontFamily={'body'}>
            {title}
          </Heading>
          <Text color={'gray.500'}>
           
          </Text>
        </Stack>
        <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
          <Stack direction={'column'} spacing={0} fontSize={'sm'}>
            <Text fontWeight={600}>postado em :</Text>
            <Text color={'gray.500'}>{time}</Text>
          </Stack>
        </Stack>
      </Box>
    </Center>
  );
}