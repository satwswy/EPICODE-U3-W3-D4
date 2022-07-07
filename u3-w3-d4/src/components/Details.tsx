import { useEffect, useState } from 'react'
import { Article } from '../types/Article'
import SingleArticle from './SingleArticle'
import { Container, Row, ListGroup } from 'react-bootstrap'
import { useParams } from 'react-router-dom'

const Details = () => {
    // let's fetch the books from the Strivazon project
    // let's put them into a state variable
    // let's map them in the return statement
    const params = useParams()
    console.log(params)
    let movieId = params.movieId
    const [article, setArticle] = useState<Article|null>(null)

    useEffect(() => {
        fetchArticles()
    }, [])

    const fetchArticles = async () => {
        try {
            let response = await fetch(
                'https://api.spaceflightnewsapi.net/v3/articles/'+movieId
            )
            if (response.ok) {
                // let's take the books out of the body
                const articles = await response.json()
                setArticle(articles)
                console.log(articles)
            } else {
                console.log('error happened fetching the articles')
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        article &&
        <ListGroup>
  <ListGroup.Item>Title :{article.title} </ListGroup.Item>
  <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
  <ListGroup.Item>Morbi leo risus</ListGroup.Item>
  <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
  <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
</ListGroup> )
}

export default Details