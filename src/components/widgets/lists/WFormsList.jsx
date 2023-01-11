import { Datagrid, TextField, List, DeleteWithConfirmButton, EditButton, FunctionField } from "react-admin";

const WFormsList = () => (
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
            <TextField source="title" />
            <FunctionField source="questionsCount" render={record => record?.questions?.length || 0} />
            <EditButton />
            <DeleteWithConfirmButton />
        </Datagrid>
    </List>
);

export default WFormsList;
