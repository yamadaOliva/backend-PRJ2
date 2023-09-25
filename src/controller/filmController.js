import {getListShowing,  getUpcomingList} from "../service/filmService.js";
const getListShowingController = async (req, res) => {
    const {limit,page} = req.query;
    console.log(limit,page);
    try {
        const result = await getListShowing(limit,page);
        return res.status(200).json(result);
    } catch (error) {
        console.log(error);
    }
}
const getListUpcomingController = async (req, res) => {
    const {limit,page} = req.query;
    console.log(limit,page);
    try {
        const result = await getUpcomingList(limit,page);
        return res.status(200).json(result);
    } catch (error) {
        console.log(error);
    }
}
module.exports = {
    getListShowingController,
    getListUpcomingController
}
