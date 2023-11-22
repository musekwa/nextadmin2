import React from "react";
import styles from "../../../ui/dashboard/products/singleProduct/singleProduct.module.css";
import Image from "next/image";

function SingleProductPage() {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imageContainer}>
          <Image src="/noavatar.png" alt="" fill />
        </div>
        IPhone
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <label>Title</label>
          <input type="text" name="title" placeholder="John Doe" />

          <label>Price</label>
          <input type="number" name="price" placeholder="45.5" />

          <label>Stock</label>
          <input type="number" name="stock" placeholder="345" />

          <label>Color</label>
          <input type="text" name="color" placeholder="red" />

          <label>Size</label>
          <input type="text" name="size" placeholder="red" />


          <label>Cat</label>
          <select name="cat" id="cat">
            <option value="kitchen">Kitchen</option>
            <option value="computer">Computer</option>
            <option value="computer">Computer</option>
          </select>

          <label>Description</label>
          <textarea type="text" name="desc" rows="10" placeholder="Description" />

          <button >Update</button>
        </form>
      </div>
    </div>
  );
}

export default SingleProductPage;
