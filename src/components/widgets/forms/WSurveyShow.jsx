import { Show, TextField, DateField, SimpleShowLayout, ArrayField, Datagrid, useTranslate } from "react-admin";
import UIMapField from "../../ui/fields/UIMapField";

const Answers = () => {
    const translate = useTranslate();
    return (
        <ArrayField source="answers">
            <Datagrid bulkActionButtons={false}>
                <TextField source="id"
                           label={ translate("resources.surveys.fields.question.answer.id") }/>
                <TextField source="text"
                           label={ translate("resources.surveys.fields.question.answer.text") }/>
                <TextField source="code"
                           label={ translate("resources.surveys.fields.question.answer.code") }/>
            </Datagrid>
        </ArrayField>);
}
const WSurveyShow = () => {
    const translate = useTranslate();
    return (
        <Show>
            <SimpleShowLayout>
                <TextField source="id"
                           fullWidth/>
                <DateField source="beginDate"
                           fullWidth/>
                <DateField source="endDate"
                           fullWidth/>
                <TextField source="title"
                           fullWidth/>
                <TextField source="description"
                           fullWidth/>
                <UIMapField width="100%" height="400px"/>
                <ArrayField source="questions">
                    <Datagrid bulkActionButtons={false}
                              expand={<Answers />}>
                        <TextField source="id"
                                   label={ translate("resources.surveys.fields.question.id") }/>
                        <TextField source="title"
                                   label={ translate("resources.surveys.fields.question.title") }/>
                        <TextField source="type"
                                   label={ translate("resources.surveys.fields.question.type") }/>
                    </Datagrid>
                </ArrayField>
            </SimpleShowLayout>
        </Show>);
}

export default WSurveyShow;