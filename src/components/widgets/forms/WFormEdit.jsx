import { Edit } from "react-admin";
import WFormEditable from "@components/widgets/forms/WFormEditable";

const WFormEdit = () => (
    <Edit mutationMode="pessimistic">
        <WFormEditable />
    </Edit>
);

export default WFormEdit;
