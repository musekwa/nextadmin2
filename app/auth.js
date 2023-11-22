import NextAuth from 'next-auth';
import { authConfig } from './authconfig';
import CredentialsProvider from 'next-auth/providers/credentials';
import { connectToDB } from './lib/utils'
import { User } from './lib/models';
import bcrypt from "bcrypt";

const login = async (credentials)=>{
    try {
        connectToDB();
        const user = await User.findOne({
            username: credentials.username
        })

        if (!user || !user.isAdmin) throw new Error("Wrong credentials!");

        const isPasswordCorrect = await bcrypt.compare(credentials.password, user.password);
        if (!isPasswordCorrect) throw new Error("Wrong credentials!")

        return user;
        
    } catch (error) {
        // console.log(error);
        throw new Error("Failed to login");
    }
}
 
export const { signIn, signOut, auth, } = NextAuth({
    ...authConfig,
    providers: [
        CredentialsProvider({
            async authorize(credentials) {
                try {
                    const user = await login(credentials);
                    return user;
                } catch (error) {
                    // console.log("Failed to SignIn", { cause: error});
                    throw new Error("Failed to login");
                }
            },
        }),
    ],
    callbacks: {
        async jwt({ token, user }){
            if (user){
                token.username = user.username;
                token.img = user.img || "";
                token.phone = user.phone || "";
            }
            return token;
        },
        async session({ session, token }){
            if (token){
                session.user.username = token.username;
                session.user.img = token.img || "";
                session.user.phone = token.phone || "";
            }
            return session;
        }
    }
});