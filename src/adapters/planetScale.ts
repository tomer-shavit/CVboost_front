import { PrismaClient } from "@prisma/client";
import prisma from "../../prisma/client";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { AdapterUser } from "next-auth/adapters";

const INIT_RESUMES = 2;

const customGetUser: (
  user: Omit<AdapterUser, "id">
) => Promise<AdapterUser> = async (user) => {
  let resUser = await getUserByEmail(user.email);
  if (!resUser) {
    try {
      resUser = await prisma.user.create({
        data: {
          name: user.name,
          email: user.email,
          image: user.image,
          emailVerified: user.emailVerified,
          resumeBoostsAvailable: INIT_RESUMES,
          resumeBoostsTotal: INIT_RESUMES,
        },
      });
      return resUser;
    } catch (error) {
      console.log(error);
      return {} as AdapterUser;
    }
  }
  return resUser;
};

const getUserByEmail = async (email: string) => {
  try {
    const user = await prisma.user.findUnique({ where: { email: email } });
    return user;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export default function planetScaleAdapter(prismaClient: PrismaClient) {
  return {
    ...PrismaAdapter(prismaClient),
    createUser: customGetUser,
  };
}

// /** @return { import("next-auth/adapters").Adapter } */
// export default function planetScaleAdapter(client, options = {}) {
//   return {
//     async createUser(user) {
//       let resUser = getUserByEmail(user.email);
//       if (!resUser) {
//         try {
//           resUser = await prisma.user.create({
//             data: {
//               name: user.name,
//               email: user.email,
//               image: user.image,
//               emailVerified: user.emailVerified,
//               resumeBoostsAvailable: INIT_RESUMES,
//               resumeBoostsTotal: INIT_RESUMES,
//             },
//           });
//           return resUser;
//         } catch (error) {
//           console.log(error);
//           return null;
//         }
//       }
//       return resUser;
//     },

//     async getUser(id) {
//       return;
//     },
//     async getUserByEmail(email) {
//       return;
//     },
//     async getUserByAccount({ providerAccountId, provider }) {
//       return;
//     },
//     async updateUser(user) {
//       return;
//     },
//     async deleteUser(userId) {
//       return;
//     },
//     async linkAccount({
//       userId,
//       type,
//       provider,
//       providerAccountId,
//       refresh_token,
//       access_token,
//       expires_at,
//       token_type,
//       scope,
//       id_token,
//       session_state,
//     }) {
//       // Try to create a new account with the given data
//       try {
//         const account = await prisma.account.create({
//           data: {
//             userId,
//             type,
//             provider,
//             providerAccountId,
//             refresh_token,
//             access_token,
//             expires_at,
//             token_type,
//             scope,
//             id_token,
//             session_state,
//           },
//         });
//         // Return the account object
//         return account;
//       } catch (error) {
//         // Handle any errors
//         console.error(error);
//         return null;
//       }
//     },
//     async unlinkAccount({ providerAccountId, provider }) {
//       return;
//     },
//     async createSession({ sessionToken, userId, expires }) {
//       try {
//         const session = await prisma.session.create({
//           data: {
//             sessionToken,
//             userId,
//             expires,
//           },
//         });
//         return session;
//       } catch (error) {
//         console.log(error);
//         return null;
//       }
//     },
//     async getSessionAndUser(sessionToken) {
//       return;
//     },
//     async updateSession({ sessionToken }) {
//       return;
//     },
//     async deleteSession(sessionToken) {
//       return;
//     },
//   };
// }
