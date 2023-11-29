import React, { useState, useEffect } from 'react';
import { useGlobal } from '../../context/GlobalContext';
import { Button, Stack, Text } from '@chakra-ui/react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Input, 
  FormControl,
  FormLabel,
  useDisclosure, 
  
} from '@chakra-ui/react';

export const DatosRegistros = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { globalState, setGlobalState } = useGlobal();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [filteredVehicles, setFilteredVehicles] = useState(globalState.vehicles);
  
  useEffect(() => {
    // Actualizar los resultados filtrados cada vez que globalState.vehicles cambia
    setFilteredVehicles(globalState.vehicles);
  }, [globalState.vehicles]);

  const handleSelectVehicle = (vehicle) => {
    setSelectedVehicle(vehicle);
  };

  const handleIngresarVehiculo = () => {
    // Filtrar para excluir el vehículo seleccionado
    const updatedFilteredVehicles = filteredVehicles.filter(vehicle => vehicle !== selectedVehicle);

    // Actualizar el estado local y global
    setFilteredVehicles(updatedFilteredVehicles);

    // Restablecer el estado local
    onClose();
    setSearchTerm('');
    setSelectedVehicle(null);
  };

  return (
    <Stack height={600} justifyContent='center' alignItems='center' spacing={4} direction='row' align='center'>
      <Button color={'red'} size='lg'>
        Salir
      </Button>
      <Button onClick={onOpen}>Ingresar Vehiculo</Button>

      <Modal isOpen={isOpen} onClose={() => { onClose(); setSearchTerm(''); setSelectedVehicle(null); }}>
        <ModalOverlay />
        <ModalContent>
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Buscar Por Placa O CC.</FormLabel>
              <Input
                placeholder='Ingrese Placa o CC'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </FormControl>
            {filteredVehicles.length > 0 ? (
              <Stack mt={4}>
                <Text fontWeight="bold">Resultados:</Text>
                {filteredVehicles.map((vehicle, index) => (
                  <Text
                    key={index}
                    onClick={() => handleSelectVehicle(vehicle)}
                    cursor="pointer"
                    color={selectedVehicle === vehicle ? "blue.500" : "inherit"}
                  >{`Nombre: ${vehicle.name}, Placa: ${vehicle.licensePlate}, CC: ${vehicle.idNumber}`}</Text>
                ))}
              </Stack>
            ) : (
              <Text mt={4} color="red.500">No se encontraron resultados.</Text>
            )}
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={handleIngresarVehiculo} isDisabled={!selectedVehicle}>
              Ingresar Vehiculo
            </Button>
            <Button onClick={() => { onClose(); setSearchTerm(''); setSelectedVehicle(null); }}>Cancelar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Stack>
  );
};
