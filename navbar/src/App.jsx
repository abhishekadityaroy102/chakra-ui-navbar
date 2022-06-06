import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Text,Box, Button, Heading, Stack,HStack, Flex, Spacer,Menu,MenuButton,MenuList,MenuItem,ButtonGroup} from '@chakra-ui/react'
function App() {
  // const [count, setCount] = useState(0)


  return (
    // <div className="App">
    // <Flex direction="row">
    //   <Box w="100%">
        <Flex flexDirection="row" border="1px" justifyContent="space-between" borderColor="gray" alignItems='center' minHeight="60px">
          
        <Box w='37%'>
          <Flex flexDirection="row" justifyContent="space-around">
            {/* <Spacer> */}
          <Heading size='md'>Logo</Heading>
          {/* </Spacer> */}
          {/* <Spacer> */}
          <Text>
          <Menu isLazy>
  <MenuButton>Hire Designers</MenuButton>
  <MenuList>
    <MenuItem>New Window</MenuItem>
    <MenuItem>Open Closed Tab</MenuItem>
    <MenuItem>Open File</MenuItem>
  </MenuList>
</Menu>
          </Text>
          {/* </Spacer> */}
          {/* <Spacer> */}
          <Text>Learn Design</Text>
          {/* </Spacer> */}
          {/* <Spacer> */}
          <Text><Menu isLazy>
  <MenuButton>Find work</MenuButton>
  <MenuList>
    <MenuItem>New Window</MenuItem>
    <MenuItem>Open Closed Tab</MenuItem>
    <MenuItem>Open File</MenuItem>
  </MenuList>
</Menu></Text>
          {/* </Spacer> */}
          {/* <Spacer> */}
          <Text>Inspiration</Text>
          {/* </Spacer> */}
          </Flex>
        </Box>
        <Spacer/>
        
        <Box w='15%'>
          <Flex flexDirection='row'>
        <ButtonGroup gap='7'>
          <Button>Sign In</Button>
        
        
          <Button bgColor="pink.400" color="white">Sign Up</Button>
          </ButtonGroup>
          </Flex>
        </Box>
      
        </Flex>
    //   </Box>
    // </Flex>
    // </div>
  )
}

export default App
