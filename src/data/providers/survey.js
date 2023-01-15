import { API_URL } from "@data/common";
import httpClient from "@services/http";
import BaseDataProvider from "@data/providers/base";

class SurveyDataProvider extends BaseDataProvider {
    getList(resource, params) {
        const { filter, sort } = params;
        const { page, perPage } = params.pagination;
        const url = new URL(`${API_URL}/${resource}`);
        url.search = new URLSearchParams({
            ...filter,
            offset: (page - 1) * perPage,
            count: perPage,
            sortDirection: sort?.order,
            sortBy: sort?.field?.split(".").shift()
        })?.toString();
        return httpClient(url).then(({ json }) => ({
            data: json.surveys,
            total: json.total
        }));
    }

    export(resource, id) {
        const url = new URL(`${API_URL}/${resource}/export`);
        url.search = new URLSearchParams({
            id
        })?.toString();
        return httpClient(url).then(({ json }) => json);
    }
}

export default SurveyDataProvider;
