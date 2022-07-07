import { useEffect, useState } from 'react'
import { Article } from '../types/Article'
import SingleArticle from './SingleArticle'
import { Container, Row } from 'react-bootstrap'

const Fetch = () => {
    // let's fetch the books from the Strivazon project
    // let's put them into a state variable
    // let's map them in the return statement

    const [articles, setArticles] = useState<Article[]>([])

    useEffect(() => {
        fetchArticles()
    }, [])

    const fetchArticles = async () => {
        try {
            let response = await fetch(
                'https://api.spaceflightnewsapi.net/v3/articles'
            )
            if (response.ok) {
                // let's take the books out of the body
                const articles = await response.json()
                setArticles(articles)
                console.log(articles)
            } else {
                console.log('error happened fetching the articles')
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <h2>Articles FETCHING</h2>
            <div>
                <Container>
                    <Row>
                        {articles.map((article, i) => (
                            <SingleArticle key={i} article={article} />
                        ))}
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default Fetch