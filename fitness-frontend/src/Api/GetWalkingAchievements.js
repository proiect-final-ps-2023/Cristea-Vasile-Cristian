import axios from "axios";
import { GET_WALKING_ACHIEVEMENTS_URL } from "../Utils/UrlConstants";

export default async (userId) => {
    try {
        const response = await axios.get(`${GET_WALKING_ACHIEVEMENTS_URL}${userId}`);
        return response.data
    } catch (error) {
        return {
            isError: true
        }
    }
}