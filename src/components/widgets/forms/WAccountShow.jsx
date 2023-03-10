import { Show, TextField, SimpleShowLayout, DateField } from "react-admin";

const WAccountShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="id" fullWidth />
            <TextField source="userName" fullWidth />
            <TextField source="firstName" fullWidth />
            <TextField source="lastName" fullWidth />
            <TextField source="role" fullWidth />
            <DateField source="createdAt" showTime fullWidth />
            <DateField source="updatedAt" showTime fullWidth />
        </SimpleShowLayout>
    </Show>
);

export default WAccountShow;
