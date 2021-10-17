import React from 'react';
import {Button ,useColorMode} from '@chakra-ui/react'

export default function ChangeColor() {
    const { colorMode, toggleColorMode } = useColorMode()
    return (
      <header>
        <Button onClick={toggleColorMode}>
          Toggle {colorMode === "light" ? "Dark" : "Light"}
        </Button>
      </header>
    )
  }