import React from 'react';
import { useGlobal } from '../../context/GlobalContext';
import MaterialTable from "@material-table/core";


export const DatosRegistros = () => {

  const { globalState } = useGlobal();

  console.log(globalState)

  const columns = [
    { title: "Nombre", field: "name" },
    { title: "Cedula", field: "idNumber" },
    { title: "Placa", field: "licensePlate" },
    { title: "Marca", field: "brand" },
    { title: "Modelo", field: "model" },
    { title: "Cilindraje", field: "cylinder" },
    { title: "Fecha", field: "admissionDate" },
    { title: "Hora", field: "hour" },
    { title: "celda", field: "celda" },

  ];

  return (
    <div className="container-list">
      <div className="container-item">
        <MaterialTable
          title="Lista De Usuarios"
          columns={columns}
          data={globalState.vehicles}
          actions={[
            {
              icon: "edit",
              tooltip: "Editar",
              onClick: () => { },
            },

            (rowData) => ({
              icon: "delete",
              tooltip: "Delete User",
              onClick: () => {
                alert('dhd')
              },
            }),
          ]}
          options={{
            actionsColumnIndex: -1,
          }}
        />
      </div>
    </div>
  );
};


