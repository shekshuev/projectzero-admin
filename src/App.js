import * as React from "react";
import { Admin, Resource, combineDataProviders, Layout } from "react-admin";
import AccountDataProvider from "@data/providers/account";
import FormDataProvider from "@data/providers/form";
import SurveyDataProvider from "@data/providers/survey";
import ResultDataProvider from "@data/providers/result";
import authProvider from "@data/providers/auth";
import { i18nProvider } from "@data/providers/i18n";
import { UIAppBar } from "@components/ui/UIAppBar";
import WAccountList from "@components/widgets/lists/WAccountList";
import WAccountShow from "@components/widgets/forms/WAccountShow";
import WAccountCreate from "@components/widgets/forms/WAccountCreate";
import WAccountEdit from "@components/widgets/forms/WAccountEdit";
import WFormsList from "@components/widgets/lists/WFormsList";
import WFormShow from "@components/widgets/forms/WFormShow";
import WFormCreate from "@components/widgets/forms/WFormCreate";
import WFormEdit from "@components/widgets/forms/WFormEdit";
import WSurveyList from "@components/widgets/lists/WSurveyList";
import WSurveyShow from "@components/widgets/forms/WSurveyShow";
import WSurveyCreate from "@components/widgets/forms/WSurveyCreate";
import WSurveyEdit from "@components/widgets/forms/WSurveyEdit";
import WResultsList from "@components/widgets/lists/WResultList";
import WResultShow from "@components/widgets/forms/WResultShow";
import GroupIcon from "@mui/icons-material/Group";
import PollIcon from "@mui/icons-material/Poll";
import BallotIcon from "@mui/icons-material/Ballot";
import GradingIcon from "@mui/icons-material/Grading";

const UILayout = props => <Layout {...props} appBar={UIAppBar} />;

const dataProvider = combineDataProviders(resource => {
    switch (resource) {
        case "accounts":
            return new AccountDataProvider();
        case "forms":
            return new FormDataProvider();
        case "surveys":
            return new SurveyDataProvider();
        case "results":
            return new ResultDataProvider();
        default:
            throw new Error(`Not implemented data provider: ${resource}`);
    }
});

const App = () => (
    <Admin
        dataProvider={dataProvider}
        authProvider={authProvider}
        i18nProvider={i18nProvider}
        layout={UILayout}
        requireAuth>
        <Resource
            name="accounts"
            list={WAccountList}
            show={WAccountShow}
            create={WAccountCreate}
            edit={WAccountEdit}
            icon={GroupIcon}
        />
        <Resource
            name="forms"
            list={WFormsList}
            show={WFormShow}
            create={WFormCreate}
            edit={WFormEdit}
            icon={BallotIcon}
        />
        <Resource
            name="surveys"
            list={WSurveyList}
            show={WSurveyShow}
            create={WSurveyCreate}
            edit={WSurveyEdit}
            icon={PollIcon}
        />
        <Resource name="results" list={WResultsList} show={WResultShow} icon={GradingIcon} />
    </Admin>
);

export default App;
