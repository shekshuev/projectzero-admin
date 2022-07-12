import { Show, TextField, DateField, SimpleShowLayout } from "react-admin";

const WResearchShow = () => (
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
        </SimpleShowLayout>
    </Show>
);

export default WResearchShow;