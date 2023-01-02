import { Show, TextField, SimpleShowLayout, ArrayField, Datagrid, useTranslate, BooleanField } from "react-admin";

const Answers = () => {
    const translate = useTranslate();
    return (
        <ArrayField source="answers">
            <Datagrid bulkActionButtons={false}>
                <TextField source="text" label={translate("resources.surveys.fields.question.answer.text")} />
                <TextField source="code" label={translate("resources.surveys.fields.question.answer.code")} />
            </Datagrid>
        </ArrayField>
    );
};
const WFormShow = () => {
    const translate = useTranslate();
    return (
        <Show>
            <SimpleShowLayout>
                <TextField source="id" fullWidth />
                <TextField source="title" fullWidth />
                <TextField source="description" fullWidth />
                <ArrayField source="questions">
                    <Datagrid bulkActionButtons={false} expand={<Answers />}>
                        <TextField source="title" label={translate("resources.forms.fields.question.title")} />
                        <TextField source="type" label={translate("resources.forms.fields.question.type")} />
                        <BooleanField source="required" fullWidth />
                    </Datagrid>
                </ArrayField>
            </SimpleShowLayout>
        </Show>
    );
};

export default WFormShow;
