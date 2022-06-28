import * as React from "react";
import { Admin, Resource, ListGuesser } from 'react-admin';
import authProvider from "./data/providers/auth";
import accountProvider from "./data/providers/account";

const App = () => (
    <Admin dataProvider={ accountProvider }
           authProvider={ authProvider }
           requireAuth>
        <Resource name="accounts" list={ListGuesser} />
    </Admin>
);

export default App;
