import * as React from "react";
import { Admin, Resource, combineDataProviders, Layout } from 'react-admin';
import BaseDataProvider from "./data/providers/base";
import authProvider from "./data/providers/auth";
import { i18nProvider } from "./data/providers/i18n";
import { UIAppBar } from "./components/ui/UIAppBar";
import WAccountList from "./components/widgets/lists/WAccountList";
import WAccountShow from "./components/widgets/forms/WAccountShow";
import WAccountCreate from "./components/widgets/forms/WAccountCreate";
import WAccountEdit from "./components/widgets/forms/WAccountEdit";
import WResearchList from "./components/widgets/lists/WResearchList";
import WResearchShow from "./components/widgets/forms/WResearchShow";
import WResearchCreate from "./components/widgets/forms/WResearchCreate";
import WResearchEdit from "./components/widgets/forms/WResearchEdit";
import WSurveyList from "./components/widgets/lists/WSurveyList";
import WSurveyShow from "./components/widgets/forms/WSurveyShow";
import GroupIcon from '@mui/icons-material/Group';
import PollIcon from '@mui/icons-material/Poll';
import BallotIcon from '@mui/icons-material/Ballot';

const UILayout = (props) => <Layout { ...props } appBar={ UIAppBar } />;

const dataProvider = combineDataProviders(resource => {
    switch (resource) {
        default:
            return new BaseDataProvider();
    }
})

const App = () => (
    <Admin dataProvider={ dataProvider }
           authProvider={ authProvider }
           i18nProvider={ i18nProvider }
           layout={ UILayout }
           requireAuth>
        <Resource name="accounts"
                  list={ WAccountList }
                  show={ WAccountShow }
                  create={ WAccountCreate }
                  edit={ WAccountEdit }
                  icon={ GroupIcon } />
        <Resource name="researches"
                  list={ WResearchList }
                  show={ WResearchShow }
                  create={ WResearchCreate }
                  edit={ WResearchEdit }
                  icon={ PollIcon } />
        <Resource name="surveys"
                  list={ WSurveyList }
                  show={ WSurveyShow }
                  icon={ BallotIcon }/>
    </Admin>
);

export default App;
