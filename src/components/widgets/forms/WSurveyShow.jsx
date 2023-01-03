import { Show, TextField, DateField, SimpleShowLayout, ReferenceField, NumberField } from "react-admin";
import UIMapField from "@components/ui/fields/UIMapField";

const WSurveyShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="id" fullWidth />
            <DateField source="beginDate" fullWidth />
            <DateField source="endDate" fullWidth />
            <TextField source="title" fullWidth />
            <TextField source="description" fullWidth />
            <NumberField source="formsCount" fullWidth />
            <ReferenceField label="resources.surveys.fields.form" source="formId" reference="forms" link="show">
                <TextField source="title" />
            </ReferenceField>
            <UIMapField width="100%" height="400px" source="area" />
        </SimpleShowLayout>
    </Show>
);

export default WSurveyShow;
