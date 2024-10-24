import ItemCard from '../ItemCard/ItemCard'
import styles from './ItemList.module.css'

function ItemList() {
  return (
    <div className={styles.itemList}>
      <ItemCard />
    </div>
  )
}

export default ItemList
