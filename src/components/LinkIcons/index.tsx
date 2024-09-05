import { Flex, Icon } from '@chakra-ui/react'
import Link from 'next/link'
import { links } from './LinksList'

type LinkIconsProps = {
  theme: 'bgRed' | 'bgBlack' | 'bgWhite'
}

export function LinkIcons({ theme }: LinkIconsProps) {

  return (
    <Flex align="center"  gap="16px" display="flex"
    color={
      theme === 'bgRed' ? "terciary" : 
      theme === 'bgBlack' ? "terciary" :
      "secundary"
    }
    >
      {links.map((link) => (
        <Link
          key={link.actionLink}
          href={link.actionLink}
          aria-label={link.actionDescription}
          target="_blank"
        >
          <Icon as={link.icon}
            boxSize="24px"
            _hover={{
              color: 
                theme === 'bgRed' ? "secundary" :
                theme === 'bgBlack' ? "primary" :
                "primary"
            }}
            transition="0.2s"
          />
        </Link>
      ))}
    </Flex>
  )
}