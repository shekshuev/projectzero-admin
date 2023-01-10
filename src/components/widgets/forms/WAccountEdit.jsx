import { Edit } from "react-admin";
import WAccountEditable from "@components/widgets/forms/WAccountEditable";

const WAccountEdit = () => (
    <Edit mutationMode="pessimistic">
        <WAccountEditable />
    </Edit>
);

export default WAccountEdit;
