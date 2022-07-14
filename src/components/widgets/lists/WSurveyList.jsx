import { Datagrid, TextField, DateField, List, DeleteWithConfirmButton, EditButton } from 'react-admin';

const WSurveyList = () => (
    <List exporter={false}>
        <Datagrid sx={{
            "& .RaDatagrid-headerCell": {
                fontWeight: "bold"
            }
        }}
                  rowClick="show">
            <TextField source="id" />
            <TextField source="title" />
            <DateField source="beginDate" />
            <DateField source="endDate" />
            <EditButton />
            <DeleteWithConfirmButton />
        </Datagrid>
    </List>
);

export default WSurveyList;