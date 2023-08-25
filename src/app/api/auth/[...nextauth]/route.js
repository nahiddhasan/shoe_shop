import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
const handler= NextAuth({
  providers: [
    GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID,
        // clientId: "829366865983-mbpa2vovh1p4n0ad9kglldovk1dm8dru.apps.googleusercontent.com",
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      }),
  ],
  pages: {
    error: "/login",
  }
})


export { handler as GET, handler as POST };
