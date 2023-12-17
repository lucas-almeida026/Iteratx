import { Card, HStack, Heading, IconButton, VStack } from '@chakra-ui/react'
import { Icon } from '@chakra-ui/icons'
import { MdEdit } from 'react-icons/md'

export default function Column({ name, tasks }: { name: string, tasks: string[] }) {

  return (
    <VStack
      w={'100%'}
      maxW={'450px'}
      bgColor={'gray.200'}
      rounded={'md'}
      spacing={4}
      align={'stretch'}
    >
      <HStack
        w={'100%'}
        h={'50px'}
        justifyContent={'space-between'}
        bgColor={'gray.300'}
        borderRadius={'8px 8px 0px 0px'}
        shadow={'md'}
        px={3}
      >
        <Heading variant={'h3'} fontSize={'18px'}>{name}</Heading>
        <HStack>
          <IconButton aria-label='Edit Column Name' size={'sm'}>
            <Icon
              as={MdEdit}
              fontSize={'18px'}
              transition={'0.1s ease'}
              _hover={{ color: 'teal.500' }}
            />
          </IconButton>
        </HStack>
      </HStack>
      <VStack spacing={4} p={4}>
        {
          tasks.map(task => (
            <Card w={'100%'}>
              <h2>{task}</h2>
            </Card>
          ))
        }
      </VStack>
    </VStack>
  )
}