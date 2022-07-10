import * as React from "react";
import { Admin, Resource, combineDataProviders, Layout } from 'react-admin';
import BaseDataProvider from "./data/providers/base";
import authProvider from "./data/providers/auth";
import { i18nProvider } from "./data/providers/i18n";
import { UIAppBar } from "./components/ui/UIAppBar";
import { WAccountList } from "./components/widgets/lists/WAccountList";
import GroupIcon from '@mui/icons-material/Group';

const UILayout = (props) => <Layout {...props} appBar={UIAppBar} />;

const dataProvider = combineDataProviders(resource => {
    switch (resource) {
        case "accounts":
            return new BaseDataProvider();
        default:
            return new BaseDataProvider();
    }
})

const App = () => (
    <Admin dataProvider={ dataProvider }
           authProvider={ authProvider }
           i18nProvider={i18nProvider}
           layout={UILayout}
           requireAuth>
        <Resource name="accounts" list={WAccountList} icon={GroupIcon}/>
    </Admin>
);

export default App;
