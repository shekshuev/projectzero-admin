import { stringify } from "query-string";
import { API_URL } from "@data/common";
import httpClient from "@services/http";
import BaseDataProvider from "@data/providers/base";

class FormDataProvider extends BaseDataProvider {
    getList(resource, params) {
        const { page, perPage } = params.pagination;
        const query = {
            offset: (page - 1) * perPage,
            count: perPage
        };
        const url = `${API_URL}/${resource}?${stringify(query)}`;
        return httpClient(url).then(({ headers, json }) => ({
            data: json.forms,
            total: json.total
        }));
    }
}

export default FormDataProvider;
