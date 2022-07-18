import React from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

export interface AuthInterface {
    role: string,
    loading: JSX.Element | string,
    unauthorized: string
}

export default function Auth({children, authOptions} : {children: React.ReactNode, authOptions: AuthInterface}){
    const router = useRouter();
    const { status, data } = useSession({ required: true,
        onUnauthenticated() {
            return router.replace(authOptions.unauthorized ?? '/auth/login')
        },
    })

    // console.log(data);

    if (status === "loading") {
      return <div>{ authOptions.loading ?? 'Loading' }</div>
    }
  
    return children
}