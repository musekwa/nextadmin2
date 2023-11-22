"use server"
import { revalidatePath } from "next/cache";
import { Product, User } from "./models";
import { connectToDB } from "./utils";
import { redirect } from "next/navigation";
import bcrypt from 'bcrypt';
import { signIn } from "../auth"


// Actions on User resource

export const addUser = async (FormData) => {
    const { username, email, password, phone, address, isAdmin, isActive } = Object.fromEntries(FormData);

    try {
        connectToDB();
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const newUser = new User({
            username,
            email,
            password: hashedPassword,
            phone,
            address,
            isAdmin,
            isActive,
        })
        await newUser.save();
    } catch (error) {
        console.log(error);
        throw new Error("Failed to save user.");
    }
    revalidatePath("/dashboard/users");
    redirect("/dashboard/users");
}


export const updateUser = async (FormData) => {
    const { id, username, email, password, phone, address, isAdmin, isActive } = Object.fromEntries(FormData);
    let hashedPassword = "";
    try {
        connectToDB();
        if (password) {
            const salt = password && await bcrypt.genSalt(10);
            hashedPassword = await bcrypt.hash(password, salt);
        }

        const updateFields = {
            username, email, password: hashedPassword, phone, address, isAdmin, isActive
        };

        Object.keys(updateFields).forEach(key => (updateFields[key] === "" || undefined) && delete updateFields[key])
        await User.findByIdAndUpdate(id, updateFields);

    } catch (error) {
        console.log(error);
        throw new Error("Failed to update user.");
    }
    revalidatePath("/dashboard/users");
    redirect("/dashboard/users");
}

export const deleteUser = async (FormData) => {

    const { id } = Object.fromEntries(FormData);

    try {
        connectToDB();
        await User.findByIdAndDelete(id)
    } catch (error) {
        console.log(error);
        throw new Error("Failed to delete user.");
    }
    revalidatePath("/dashboard/users");
}


// Actions on the Product resource

export const addProduct = async (FormData) => {

    const { title, price, stock, color, size, cat, desc } = Object.fromEntries(FormData);

    try {
        connectToDB();
        const newProduct = new Product({
            title,
            cat,
            price,
            stock,
            color,
            size,
            desc,
        })
        const savedProduct = await newProduct.save();
        console.log("product:", savedProduct);
    } catch (error) {
        console.log(error);
        throw new Error("Failed to save product.");
    }
    revalidatePath("/dashboard/products");
    redirect("/dashboard/products");
}

export const updateProduct = async (FormData) => {
    const { id, title, cat, price, stock, color, size, desc, } = Object.fromEntries(FormData);

    try {
        connectToDB();
        const updateFields = {
            title, cat, price, stock, color, size, desc,
        };

        Object.keys(updateFields).forEach(key => (updateFields[key] === "" || undefined) && delete updateFields[key])
        const updatedProduct = await Product.findByIdAndUpdate(id, updateFields, { new: true });
        console.log('updated:', updatedProduct)
    } catch (error) {
        console.log(error);
        throw new Error("Failed to update product.");
    }
    revalidatePath("/dashboard/products");
    redirect("/dashboard/products");
}

export const deleteProduct = async (FormData) => {

    const { id } = Object.fromEntries(FormData);

    try {
        connectToDB();
        await Product.findByIdAndDelete(id)
    } catch (error) {
        console.log(error);
        throw new Error("Failed to delete product.");
    }
    revalidatePath("/dashboard/products");
}


export const authenticate = async (prevState, formData) => {
    const { username, password } = Object.fromEntries(formData);

    try {
        await signIn("credentials", {
            username, password
        })
    } catch (error) {
        // if (error.message.includes('CredentialsSignin')){
        return "Wrong Credentials";
        // return error;
        // }
        // throw error;
    }
}