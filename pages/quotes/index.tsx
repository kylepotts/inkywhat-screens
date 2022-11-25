import { useEffect, useState } from "react"

const apiUrl = "https://api.quotable.io/random"

const Weather = () => {
    const [quote, setQuote] = useState("")
    const [author, setAuthor] = useState("")
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(apiUrl)
            const json = await response.json()
            setQuote(json.content)
            setAuthor(json.author)
        }
        
    fetchData()
    }, [])
    console.log(quote)
    console.log(author)
    return (
        <div style={{height: 300, width: 400, display: "flex",  flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
            <h1 style={{textAlign: "center"}}>{quote}</h1>
            <div> <span style={{fontSize: 30}}> - </span><span style={{fontSize: 40}}>{author}</span></div>
        </div>
    )
}

export default Weather