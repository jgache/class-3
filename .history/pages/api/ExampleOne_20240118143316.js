import { useEffect, useState } from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function ExampleOne() {
    const [number, setNumber] = useState(0);

    return(
        <>
            <Header/>
            <main>
                <h1>Example 1</h1>
                <div>Infinite loop</div>

            </main>
            <Footer/>

        </>
    )
}