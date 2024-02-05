import NextAuth from "next-auth/next";
import KaKaoProvider from 'next-auth/providers/kakao'

export default NextAuth({
    providers:[
        KaKaoProvider({
            clientId: process.env.KAKAO_CLIENT_ID!,
            clientSecret: process.env.KAKAO_CLIENT_SECRET!,
        }),
    ]
})