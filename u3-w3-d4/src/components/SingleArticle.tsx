import { Article } from '../types/Article'
import { Card, Button, Container, Row, Col } from 'react-bootstrap'
import {Link} from 'react-router-dom'

interface SingleArticleProps {
    article: Article
}

const SingleArticle = ({ article }: SingleArticleProps) => {
    return (
        
           <Col md={3}>
            <Card >
                <Card.Img variant="top" src={article.imageUrl} />
                <Card.Body>
                    <Card.Title>{article.title}</Card.Title>
                    <Card.Text>
                        {article.description}
                    </Card.Text>
                    <Button variant="primary" ><Link className='text-white' to={`/Details/${article.id}`}>Details</Link></Button>
                </Card.Body>
            </Card>
            </Col>
       
    )
}

export default SingleArticle