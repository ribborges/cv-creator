import { AxiosError } from "axios";

import { api } from "../api";

async function askData(dataString: string) {
    try {
        const response = await api.post("/ai", { dataString });
        return response.data.data;
    } catch (error) {
        if (error instanceof AxiosError && 'response' in error) {
            return error.response;
        }
    }
}

export { askData };