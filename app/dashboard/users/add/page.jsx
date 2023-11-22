import React from "react";
import styles from "../../../ui/dashboard/users/addUser/addUser.module.css";
import { addUser } from "../../../lib/actions";

function AddUserPage() {
  return (
    <div className={styles.container}>
      <form action={addUser} className={styles.form}>
      <input type="text" placeholder="username" name="username" required />
        <input type="email" placeholder="email" name="email" required />
        <input type="password" placeholder="password" name="password" required />
        <input type="phone" placeholder="phone" name="phone" />

        <select name="isAdmin" id="isAdmin">
          <option value={false} >Is Admin?</option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <select name="isActive" id="isActive">
          <option value={true} >Is Active?</option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <textarea
          name="desc"
          id="desc"
          // cols="30"
          rows="16"
          placeholder="Description"
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddUserPage;
