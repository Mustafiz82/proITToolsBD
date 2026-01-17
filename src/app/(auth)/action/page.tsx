"use client"
import { useSearchParams } from "next/navigation";
import React from "react";
import VerifyEmail from "@/components/Auth/VerifyEmail";
import ResetPassword from "@/components/Auth/ResetPassword";
import EmailVerifying from "@/components/Auth/EmailVerifying";
import ForgotPassword from "@/components/Auth/ForgetPassword";
import ErrorPage from "@/components/Error/ErrorPage";

const page = () => {

  const searchParams = useSearchParams();

  const oobCode = searchParams.get("oobCode")
  const mode = searchParams.get("mode")

  console.log({mode , oobCode})


  if(mode == "resetPassword"){

    if(oobCode){

        return  <ResetPassword oobCode={oobCode}/>
    }

    else {
        return  <ForgotPassword/>
    }
  }

  else if(mode == "verifyEmail"){

    if(oobCode){
        return <EmailVerifying oobCode={oobCode}/>
    }

    else {
        return <VerifyEmail  />
    }
  }

  else {
    return <ErrorPage/>
  }






  return <div></div>;
};

export default page;
