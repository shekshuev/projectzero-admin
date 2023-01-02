import { Form, TextInput, SelectInput, SaveButton, ArrayInput, SimpleFormIterator, BooleanInput } from "react-admin";
import { Grid } from "@mui/material";

const WFormEditable = () => (
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
                        <TextInput source="title" required variant="outlined" />
                        <SelectInput
                            source="type"
                            choices={[
                                { id: "single", name: "resources.forms.questionTypes.single" },
                                { id: "multiple", name: "resources.forms.questionTypes.multiple" },
                                { id: "open", name: "resources.forms.questionTypes.open" }
                            ]}
                            required
                            variant="outlined"
                        />
                        <BooleanInput source="required" />
                        <ArrayInput source="answers" fullWidth>
                            <SimpleFormIterator inline>
                                <TextInput source="code" required variant="outlined" />
                                <TextInput source="text" required variant="outlined" />
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
);

export default WFormEditable;
