import {
    Show,
    TextField,
    SimpleShowLayout,
    ArrayField,
    Datagrid,
    BooleanField,
    SelectField,
    DateField
} from "react-admin";

const Answers = () => (
    <ArrayField source="answers">
        <Datagrid bulkActionButtons={false}>
            <TextField source="text" label="resources.forms.fields.question.answer.text" />
            <TextField source="code" label="resources.forms.fields.question.answer.code" />
        </Datagrid>
    </ArrayField>
);

const WFormShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="id" fullWidth />
            <TextField source="title" fullWidth />
            <TextField source="description" fullWidth />
            <ArrayField source="questions">
                <Datagrid bulkActionButtons={false} expand={<Answers />}>
                    <TextField source="title" label="resources.forms.fields.question.title" />
                    <SelectField
                        source="type"
                        label="resources.forms.fields.question.type"
                        choices={[
                            { id: "single", name: "resources.forms.questionTypes.single" },
                            { id: "multiple", name: "resources.forms.questionTypes.multiple" },
                            { id: "open", name: "resources.forms.questionTypes.open" }
                        ]}
                    />
                    <BooleanField source="required" label="resources.forms.fields.question.required" fullWidth />
                </Datagrid>
            </ArrayField>
            <DateField source="createdAt" showTime fullWidth />
            <DateField source="updatedAt" showTime fullWidth />
        </SimpleShowLayout>
    </Show>
);

export default WFormShow;
