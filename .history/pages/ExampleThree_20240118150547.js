import { useEffect, useState} from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function ExampleThree() {

    const [number, setNumber] =useState(0);
    const colors = ["red", "orange", "yellow", "green", "blue", "violet"];
    useEffect(() => {
        console.log("changing number value: " + colors[number]);
    }, [number])


    return(
        <>
            <h1>Example 3</h1>
            <button>Increment Number</button>
            <div>
                {number}
            </div>
        
        </>
    )
}