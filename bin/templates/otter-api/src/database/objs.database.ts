import { Obj } from "./models";
import { connectDB } from ".";

export const getObjs = async () => {
    connectDB();
    const objs = await Obj.find();
    return objs;
}

export const postObj = () => {
    connectDB();
    return 1;
}