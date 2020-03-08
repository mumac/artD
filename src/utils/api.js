import axios from "axios";

export const getSliderImages = () => axios.get("api/tokens");

export const getStatistics = () => axios.get("api/statistics");

