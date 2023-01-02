import { Show, TextField, DateField, SimpleShowLayout, ReferenceField } from "react-admin";
import UIMapField from "@components/ui/fields/UIMapField";

const WSurveyShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="id" fullWidth />
            <DateField source="beginDate" fullWidth />
            <DateField source="endDate" fullWidth />
            <TextField source="title" fullWidth />
            <TextField source="description" fullWidth />
            <TextField source="formId" fullWidth />
            <ReferenceField label="resources.surveys.fields.form" source="formId" reference="forms">
                <TextField source="title" />
            </ReferenceField>
            <UIMapField width="100%" height="400px" source="area" />
        </SimpleShowLayout>
    </Show>
);

export default WSurveyShow;
