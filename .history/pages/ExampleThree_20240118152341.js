import { useEffect, useState} from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function ExampleThree() {

    const [number, setNumber] =useState(0);

    const colors = ["red", "orange", "yellow", "green", "blue", "violet"];
   
    useEffect(() => {
        console.log("changing number value: " + colors[number]);
    }, [number]o
        if (number > colors.length - 1) {
            setNumber(0);
            console.log("changing number value back to 0 " + colors(0));
            
        }
    )


    return(
        <>
            <h1>Example 3</h1>
            <button stylr={{backgroundCOlor: colors[number]}}
            onClick={() => setNumber(number + 1)}>
                Increment Number</button>
            <div>
                {number}
            </div>
        
        </>
    )
}