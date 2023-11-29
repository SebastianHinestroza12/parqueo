import React from 'react';
import { useGlobal } from '../../context/GlobalContext';
import { Button, Stack } from '@chakra-ui/react'


export const DatosRegistros = () => {

  const { globalState } = useGlobal();

  return (
      <Stack height={600} justifyContent='center' alignItems='center' spacing={4} direction='row' align='center'>
        <Button color={'red'} size='lg'>
          Salir
        </Button>
        <Button color={'green'} size='lg'>
          Ingresar
        </Button>
  </Stack>
  );
};


