import styles from "./ItemCard.module.css"

function ItemCard({ productName, price, description }) {
  return (
    <div className={styles.itemCard}>
      <h3>{productName}</h3>
      <img className='' alt='Cyber vegies!' scr='/src/photos/Tomato.jpeg' />
      <p className={styles.discription}>{description}</p>
      <h4>Price: {price}</h4>
      <button className={styles.addButton} type='button'>
        Add to cart
      </button>
      <button className={styles.addButton} type='button' disabled=''>
        Delet from cart
      </button>
      <button className={styles.addButton} type='button'>
        Add to wish list
      </button>
    </div>
  )
}

export default ItemCard
