import ItemCard from "../ItemCard/ItemCard"
import styles from "./ItemList.module.css"
import products from "../../data/products"

function ItemList() {
  return (
    <div className={styles.itemList}>
      {products.map((product) => {
        return <ItemCard key={product.id} {...product} />
      })}
    </div>
  )
}

export default ItemList
