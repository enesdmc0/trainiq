import { DashboardData } from "./types";

export const fetcher = async (url: string): Promise<DashboardData | undefined> => {
    try {
        const baseUrl = process.env.BASE_URL;
        const response = await fetch(`${baseUrl}${url}`);

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const {data} = await response.json();
        return data;
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
        return undefined;
    }
};
