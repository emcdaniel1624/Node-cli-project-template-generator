import { objsDataAccess } from "../database";

export const getObjs = async () => {
  try {
    return await objsDataAccess.getObjs();
  } 
  catch(e:any) {
    throw new Error(e.message);
  }
}

export const postObj = async (todo:any) => {
    try {
      return await objsDataAccess.postObj();
    } 
    catch(e:any) {
      throw new Error(e.message);
    }
  }
