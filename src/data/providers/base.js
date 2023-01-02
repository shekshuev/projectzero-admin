import { API_URL } from "@data/common";
import httpClient from "@services/http";

class BaseDataProvider {
    async getList(resource, params) {
        const paramsStr = new URLSearchParams({
            count: params.pagination.perPage,
            offset: (params.pagination.page - 1) * +params.pagination.perPage
        }).toString();
        const { json } = await httpClient(`${API_URL}/${resource}?${paramsStr}`);
        return {
            data: json.items,
            total: json.total
        };
    }

    async getOne(resource, params) {
        const { json } = await httpClient(`${API_URL}/${resource}/${params.id}`);
        return { data: json };
    }

    async update(resource, params) {
        const { json } = await httpClient(`${API_URL}/${resource}/${params.id}`, {
            method: "PUT",
            body: JSON.stringify(params.data)
        });
        return { data: json };
    }

    async create(resource, params) {
        const { json } = await httpClient(`${API_URL}/${resource}`, {
            method: "POST",
            body: JSON.stringify(params.data)
        });
        return { data: json };
    }

    async delete(resource, params) {
        await httpClient(`${API_URL}/${resource}/${params.id}`, {
            method: "DELETE"
        });
        return { data: params };
    }
}

export default BaseDataProvider;
