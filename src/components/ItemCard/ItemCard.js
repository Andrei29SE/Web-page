import styles from './ItemCard.module.css'

function ItemCard() {
  return (
    <div className={styles.itemCard}>
      <h1>Item discription</h1>
      <img className='' alt='item' />
      <article>Information about particular item</article>
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
