import {
    Form,
    TextInput,
    SelectInput,
    SaveButton,
    ArrayInput,
    SimpleFormIterator,
    BooleanInput,
    useRecordContext,
    RecordContextProvider
} from "react-admin";
import { Grid } from "@mui/material";

const WFormEditable = () => {
    const record = useRecordContext();
    if (record) {
        record.questions = record.questions.map(q => ({
            ...q,
            isIgnoreString: q.isIgnore?.join(" ") || ""
        }));
    }

    return (
        <RecordContextProvider value={record}>
            <Form>
                <Grid container columnSpacing={2} sx={{ p: 2 }}>
                    <Grid item xs={12}>
                        <TextInput source="title" variant="outlined" required fullWidth />
                    </Grid>
                    <Grid item xs={12}>
                        <TextInput
                            multiline={true}
                            minRows={3}
                            maxRows={10}
                            source="description"
                            variant="outlined"
                            required
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <ArrayInput source="questions">
                            <SimpleFormIterator inline>
                                <TextInput
                                    label="resources.forms.fields.question.title"
                                    source="title"
                                    required
                                    variant="outlined"
                                />
                                <SelectInput
                                    source="type"
                                    label="resources.forms.fields.question.type"
                                    choices={[
                                        { id: "single", name: "resources.forms.questionTypes.single" },
                                        { id: "multiple", name: "resources.forms.questionTypes.multiple" },
                                        { id: "open", name: "resources.forms.questionTypes.open" }
                                    ]}
                                    required
                                    variant="outlined"
                                />
                                <TextInput
                                    label="resources.forms.fields.question.isIgnoreString"
                                    source="isIgnoreString"
                                    variant="outlined"
                                    fullWidth
                                />
                                <BooleanInput label="resources.forms.fields.question.required" source="required" />
                                <ArrayInput label="resources.forms.fields.question.answers" source="answers" fullWidth>
                                    <SimpleFormIterator inline>
                                        <TextInput
                                            label="resources.forms.fields.question.answer.code"
                                            source="code"
                                            required
                                            variant="outlined"
                                        />
                                        <TextInput
                                            label="resources.forms.fields.question.answer.text"
                                            source="text"
                                            required
                                            variant="outlined"
                                        />
                                    </SimpleFormIterator>
                                </ArrayInput>
                            </SimpleFormIterator>
                        </ArrayInput>
                    </Grid>
                    <Grid item xs={12}>
                        <SaveButton />
                    </Grid>
                </Grid>
            </Form>
        </RecordContextProvider>
    );
};

export default WFormEditable;
