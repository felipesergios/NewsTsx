import React,{useState ,useEffect} from "react"

//import api from './services/api';
import axios from 'axios';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  SimpleGrid,
  theme,
} from "@chakra-ui/react"

import { ColorModeSwitcher } from "./ColorModeSwitcher"
import { Logo } from "./Logo"
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
    //console.log(response.data.list);      
    }
    loadNews()
},[]);
  return(
    <ChakraProvider theme={theme}>
      <Menu>
      

<SimpleGrid columns={[2, null, 4]} spacing="15px" >
    
    {news.map((newsData)=>(
      <Box textAlign="center" fontSize="xl">
      <PostBlog key={news.title} title={newsData.title} link={newsData.link} time={newsData.time}/>
      </Box>
    ))}
    
</SimpleGrid>
    </Menu>
  </ChakraProvider>
  )
}
