import { Datagrid, TextField, List, DeleteWithConfirmButton, EditButton } from 'react-admin';

const WAccountList = () => (
    <List exporter={false}>
        <Datagrid sx={{
                      "& .RaDatagrid-headerCell": {
                          fontWeight: "bold"
                      }
                  }}
                  rowClick="show" bulkActionButtons={false}>
            <TextField source="id" />
            <TextField source="userName" />
            <TextField source="firstName" />
            <TextField source="middleName" />
            <TextField source="lastName" />
            <TextField source="role" />
            <EditButton />
            <DeleteWithConfirmButton />
        </Datagrid>
    </List>
);

export default WAccountList;