import Link from "next/link"
import { MobileView, BrowserView } from "react-device-detect"
import { MenuItemModel } from "../../generic/models"
import styles from "./navbar.module.css"

type Props = {
    item: MenuItemModel,
    activeTab: string
}

export const MenuItemComponent = (props:Props) => {

    const activeTab = props.activeTab
    const item = props.item

    return (
      <>
      <MobileView>
        {activeTab === item.route ?
          <Link href={item.route}>
            <div className={styles.materialicons} style={{color:'white'}}>
              {item.mobileIcon}
            </div>
          </Link> :
          <Link href={item.route}>
            <div className={styles.materialicons} style={{color:'#949494'}}>
              {item.mobileIcon}
            </div>
          </Link>}
      </MobileView>
      <BrowserView>
        {activeTab === item.route ?
          <Link href={item.route}>
            <a style={{color:'white'}}>
              {item.name}
            </a>
          </Link> :
          <Link href={item.route}>
            <a style={{color:'#949494', textDecoration:'none'}}>
              {item.name}
            </a>
          </Link>}
      </BrowserView>
      </>
    )
  }