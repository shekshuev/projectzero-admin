import { Datagrid, TextField, List, DeleteWithConfirmButton, EditButton } from "react-admin";

const WAccountList = ({ showEdit }) => (
    <List exporter={false}>
        <Datagrid
            sx={{
                "& .RaDatagrid-headerCell": {
                    fontWeight: "bold"
                }
            }}
            bulkActionButtons={false}
            rowClick="show">
            <TextField source="id" />
            <TextField source="userName" />
            <TextField source="firstName" />
            <TextField source="lastName" />
            <TextField source="role" />
            {showEdit && <EditButton />}
            {showEdit && <DeleteWithConfirmButton />}
        </Datagrid>
    </List>
);

export default WAccountList;
