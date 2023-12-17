import { Button, Container, HStack, Input, VStack } from '@chakra-ui/react'
import { useState } from 'react'
import Column from './components/Column'

function App() {

  const [taskName, setTaskName] = useState<string>('')

  return (
    <Container maxW={'container.xl'}>
      <VStack width={'100%'} alignItems={'center'}>
        <HStack justifyContent={'center'} maxW={'container.md'} w={'100%'}>
          <Input
            placeholder='Create a tasks'
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
          />
          <Button
            colorScheme={'teal'}
            onClick={() => {
              console.log(`Add task "${taskName}"`)
              setTaskName('')
            }}
          >Add</Button>
        </HStack>
        <HStack
          width={'100%'}
          alignItems={'flex-start'}
        >
          <Column name='To Do' tasks={['task 1', 'task 2', 'task 3', 'task 4']} />
          <Column name='Doing' tasks={[]} />
          <Column name='Done' tasks={[]} />
        </HStack>
      </VStack>
    </Container>
  )
}

export default App
