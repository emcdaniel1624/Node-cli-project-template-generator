import { MenuItemModel } from '../../generic/models/menu-item.model';
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<MenuItemModel[]>
) {
  res.status(200).json([
    {
      id: 1,
      name:"Home",
      route:"/",
      mobileIcon:"home"
    },
    {
      id: 2,
      name:"About",
      route:"/about",
      mobileIcon:"info"
    },
  ])
}