import React,{useState ,useEffect} from "react"
import axios from 'axios';
import {
  ChakraProvider,
  Box,
  SimpleGrid,
  Link,
  theme,
  Center,
  Text,
} from "@chakra-ui/react"

import PostBlog from "./components/card"
import Menu from './components/navbar'

export default function App() {
  const [news,setNews]=useState([]);
  useEffect(() => {
    async function loadNews(){
      var date_now = new Date();
      console.log(date_now.toLocaleDateString());
    const response = await axios.get('https://apinoticias.tedk.com.br/api',{
        params: {
            q:"natal",
            date:date_now.toLocaleDateString()
        },
       
    })
    setNews(response.data.list);  
    }
    loadNews()
},[]);
  return(
    <ChakraProvider theme={theme}>
      <Menu>
<Center>
<Text fontSize="3xl" as="i" center>
        Bem vindo ao React-News
      </Text>
</Center>
      

<SimpleGrid columns={[1, null, 3]} spacing="15px" >
    
    {news.map((newsData)=>(
      <Link color="teal.500" href={newsData.link}>
      <Box textAlign="center" fontSize="xl">
      <PostBlog key={news.title} title={newsData.title} link={newsData.link} time={newsData.time}/>
      </Box>
      </Link>
    ))}
    
</SimpleGrid>
    </Menu>
  </ChakraProvider>
  )
}
