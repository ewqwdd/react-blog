import { useState } from "react"

export const useFetch=(callback)=>{
    let [loading, setLoading] = useState(true)
    let [error, setError]=useState()

    let func = async(...args)=>{
        setLoading(true)
        try{
            await callback(...args)
        }
        catch(err){
            setError(err)
        }
        finally{
            setLoading(false)
        }

    }
    return [func, loading, error, setError]
}