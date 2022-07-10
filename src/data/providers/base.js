import { API_URL } from "../common";
import httpClient from "../../services/http";


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
        }
    }

}

export default BaseDataProvider