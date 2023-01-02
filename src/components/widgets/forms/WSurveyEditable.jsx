import { Form, SaveButton, TextInput, ReferenceInput, AutocompleteInput } from "react-admin";
import { Grid } from "@mui/material";
import UIMapInput from "@components/ui/inputs/UIMapInput";
import UIDateTimeInput from "@components/ui/inputs/UIDateTimeInput";

const WSurveyEditable = () => (
    <Form>
        <Grid container columnSpacing={2} sx={{ p: 2 }}>
            <Grid item xs={12} md={6}>
                <UIDateTimeInput source="beginDate" variant="outlined" required fullWidth />
            </Grid>
            <Grid item xs={12} md={6}>
                <UIDateTimeInput source="endDate" variant="outlined" required fullWidth />
            </Grid>
            <Grid item xs={12}>
                <TextInput source="title" variant="outlined" required fullWidth />
            </Grid>
            <Grid item xs={12}>
                <TextInput
                    source="description"
                    multiline
                    minRows={3}
                    maxRows={10}
                    variant="outlined"
                    required
                    fullWidth
                />
            </Grid>
            <Grid item xs={12}>
                <ReferenceInput source="formId" reference="forms">
                    <AutocompleteInput optionText="title" variant="outlined" required fullWidth />
                </ReferenceInput>
            </Grid>
            <Grid item xs={12}>
                <UIMapInput width="100%" height="400px" source="area" />
            </Grid>
            <Grid item xs={12}>
                <SaveButton />
            </Grid>
        </Grid>
    </Form>
);

export default WSurveyEditable;
