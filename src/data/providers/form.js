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

    async update(resource, params) {
        const data = { ...params.data };
        data.questions = data.questions?.map(question => {
            const { isIgnoreString, ...rest } = question;
            rest.isIgnore = isIgnoreString
                .trim()
                .split(/\s+/)
                .filter(s => s.length > 0);
            return rest;
        });
        const { json } = await httpClient(`${API_URL}/${resource}/${params.id}`, {
            method: "PUT",
            body: JSON.stringify(data)
        });
        return { data: json };
    }

    async create(resource, params) {
        const data = { ...params.data };
        data.questions = data.questions?.map(question => {
            const { isIgnoreString, ...rest } = question;
            rest.isIgnore = isIgnoreString
                .trim()
                .split(/\s+/)
                .filter(s => s.length > 0);
            return rest;
        });
        const { json } = await httpClient(`${API_URL}/${resource}`, {
            method: "POST",
            body: JSON.stringify(data)
        });
        return { data: json };
    }
}

export default FormDataProvider;
