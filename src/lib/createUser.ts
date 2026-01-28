import axiosPublic from "./axiosPublic"


export const createUser = async (name: string, email: string, photoUrl?: string) => {
    try {
        const response = await axiosPublic.post("/user" , {name , email , photoUrl})
        console.log(response.data)

    } catch (error) {
        console.log(error)
    }
}