import { useEffect } from "react"



export const Pagination = (limit, setLimit, isLoading, total, bottom, step)=>{
    let observer;
    
    useEffect(()=>{
        if(observer!=undefined){
            observer.disconnect()
        }
        observer = new IntersectionObserver((entries, observer)=>{
            
            if(entries[0].isIntersecting){
                
                if(limit<total){
                    setLimit(limit+step)
                }
                
                
            }
        })
        if(!isLoading){
            observer.observe(bottom.current)
        }
        
    }, [isLoading, total])
}