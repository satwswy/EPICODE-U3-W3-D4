import React from 'react'
import { Jumbotron,  } from 'react-bootstrap'
import Fetch from './Fetch'

export default function MainPage() {
    return (
        <div>
            
            <Jumbotron>
                <h1>Hello, world!</h1>
                <p>
                    Welcome to our page!
                </p>
                
            </Jumbotron>;
            <Fetch />
        </div>
    )
}
