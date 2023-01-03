import { Datagrid, TextField, DateField, List, DeleteWithConfirmButton, EditButton, NumberField } from "react-admin";

const WSurveyList = () => (
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
            <DateField source="beginDate" />
            <DateField source="endDate" />
            <NumberField source="formsCount" />
            <EditButton />
            <DeleteWithConfirmButton />
        </Datagrid>
    </List>
);

export default WSurveyList;
