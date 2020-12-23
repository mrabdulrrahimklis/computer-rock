import axios from 'axios';
import { getPin } from "../../pin/actions";

export function requestGetPin() {
    return axios.request({
        method: "GET",
        url: ``
    })
}