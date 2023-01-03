import {
    Datagrid,
    TextField,
    DateField,
    List,
    DeleteWithConfirmButton,
    FunctionField,
    BooleanField,
    ReferenceField
} from "react-admin";

const WResultsList = () => (
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
            <DateField source="beginDate" showTime />
            <DateField source="endDate" showTime />
            <BooleanField source="completed" />
            <FunctionField
                label="resources.results.fields.answers_count"
                render={record => record?.questions?.length || 0}
            />
            <ReferenceField label="resources.results.fields.survey" source="surveyId" reference="surveys" link="show">
                <TextField source="title" />
            </ReferenceField>
            <ReferenceField
                label="resources.results.fields.account"
                source="accountId"
                reference="accounts"
                link="show">
                <TextField source="userName" />
            </ReferenceField>
            <DeleteWithConfirmButton />
        </Datagrid>
    </List>
);

export default WResultsList;
