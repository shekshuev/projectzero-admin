import {
    Show,
    TextField,
    DateField,
    SimpleShowLayout,
    ReferenceField,
    BooleanField,
    ArrayField,
    Datagrid,
    SelectField,
    useRecordContext,
    RecordContextProvider
} from "react-admin";
import UIMapField from "@components/ui/fields/UIMapField";

const Answers = () => {
    const record = useRecordContext();
    record.question.answers = record.question.answers.map(answer => {
        if (record.question.type === "open") {
            return {
                ...answer,
                inputText: record?.selectedAnswer
            };
        } else if (record.question.type === "single") {
            return {
                ...answer,
                selected: record?.selectedAnswer === answer.code
            };
        } else if (record.question.type === "multiple") {
            return {
                ...answer,
                selected: record?.selectedAnswer?.includes?.(answer.code)
            };
        } else {
            return answer;
        }
    });
    return (
        <RecordContextProvider value={record}>
            <ArrayField source="question.answers">
                <Datagrid bulkActionButtons={false}>
                    <TextField source="text" label="resources.results.fields.question.answer.text" />
                    <TextField source="code" label="resources.results.fields.question.answer.code" />
                    {record?.question?.type === "open" ? (
                        <TextField source="inputText" label="resources.results.fields.question.answer.inputText" />
                    ) : (
                        <BooleanField source="selected" label="resources.results.fields.question.answer.selected" />
                    )}
                </Datagrid>
            </ArrayField>
        </RecordContextProvider>
    );
};

const WResultShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="id" fullWidth />
            <DateField source="beginDate" fullWidth showTime />
            <DateField source="endDate" fullWidth showTime />
            <BooleanField source="completed" />
            <ReferenceField
                label="resources.results.fields.account"
                source="accountId"
                reference="accounts"
                link="show">
                <TextField source="userName" />
            </ReferenceField>
            <UIMapField width="100%" height="400px" source="point" />
            <ReferenceField label="resources.results.fields.survey" source="surveyId" reference="surveys" link="show">
                <TextField source="title" />
            </ReferenceField>
            <ArrayField source="questions">
                <Datagrid bulkActionButtons={false} expand={<Answers />}>
                    <DateField label="resources.results.fields.question.beginDate" source="beginDate" showTime />
                    <DateField label="resources.results.fields.question.endDate" source="endDate" showTime />
                    <TextField source="question.title" label="resources.results.fields.question.title" />
                    <SelectField
                        source="question.type"
                        label="resources.results.fields.question.type"
                        choices={[
                            { id: "single", name: "resources.forms.questionTypes.single" },
                            { id: "multiple", name: "resources.forms.questionTypes.multiple" },
                            { id: "open", name: "resources.forms.questionTypes.open" }
                        ]}
                    />
                    <BooleanField source="question.required" label="resources.results.fields.question.required" />
                </Datagrid>
            </ArrayField>
            <DateField source="createdAt" showTime fullWidth />
            <DateField source="updatedAt" showTime fullWidth />
        </SimpleShowLayout>
    </Show>
);

export default WResultShow;
