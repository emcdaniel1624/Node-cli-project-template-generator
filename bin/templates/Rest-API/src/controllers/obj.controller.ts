import { objService } from '../services';

export const getObjs = async (req:any, res:any) => {
  try {
    const retVal = await objService.getObjs();
    res.json(retVal);
  } 
  catch(e:any) {
    console.log(e.message);
    res.sendStatus(500);
  }
}

export const postObj = async (req:any, res:any) => {
  const { obj } = req.body
  try {
    const retVal = await objService.postObj(obj);
    res.json(retVal);
  } 
  catch(e:any) {
    console.log(e.message);
    res.sendStatus(500);
  }
}
