import { stringify } from 'query-string';
import { API_URL } from "../common";
import httpClient from "../../services/http";

const accountProvider =  {
    getList: (resource, params) => {
        const { page, perPage } = params.pagination;
        // const { field, order } = params.sort;
        const query = {
            offset: (page - 1) * perPage,
            count: perPage
        };
        const url = `${API_URL}/${resource}?${stringify(query)}`;
        return httpClient(url).then(({ headers, json }) => ({
            data: json.items,
            total: json.total,
        }));
    },
};

export default accountProvider;