import React from "react";
import styles from "../../ui/dashboard/users/users.module.css";
import Search from "../search/search";
import Link from "next/link";
import Image from "next/image";
import Pagination from '../../ui/dashboard/pagination/pagination'
import { fetchUsers } from '../../lib/data'


const UsersPage = async ({ searchParams })=> {

  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;

  const { users, count  }  = await fetchUsers(q, page);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder={"Search for a user..."} />
        <Link href={"/dashboard/users/add"}>
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      {/* <div > */}
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Created</td>
            <td>Role</td>
            <td>Status</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {
            users.map(user=>(
              <tr key={user._id}>
              <td>
                <div className={styles.user}>
                  <Image
                    src={user.img || "/noavatar.png"}
                    alt=""
                    width={40}
                    height={40}
                    className={styles.userImage}
                  />
                  {user.username}
                </div>
              </td>
              <td>{user.email}</td>
              <td>13.01.2022</td>
              <td>{user.isAdmin ? 'Admin' : "Client"}</td>
              <td>{user.isActive ? 'Active' : 'Passive'}</td>
              <td>
                <div className={styles.buttons}>
                  <Link href={`/dashboard/users/${user._id}`}>
                    <button className={`${styles.button} ${styles.view}`}>
                      View
                    </button>
                  </Link>
                  <button className={`${styles.button} ${styles.delete}`}>
                    Delete
                  </button>
                </div>
              </td>
            </tr>
            ))
          }
        </tbody>
      </table>
      <Pagination count={count} />
    </div>
  );
}

export default UsersPage;