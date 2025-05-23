import { useState, useEffect } from "react"

const week =[
    "Sun.",'Mon.','Tue.',"Wen.", "Thu.", "Fri.", "Sat." 
]

function useTime<T = unknown>(input:string) {
    const today = new Date()

    const [day, setDay] = useState<T|null>(null)

    useEffect( () => {
        if (input === 'day') {
            setDay(week[today.getDay()] as T)
        } else {
            setDay(today.getHours() as T)
        }
        
    },[])

    return day
}



export default useTime