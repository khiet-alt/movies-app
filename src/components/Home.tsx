import React from 'react'
import { Jumpotron, CarouselWrapper } from '../styles/home.style'
import { Carousel, Button} from 'react-bootstrap'

const Main = () => (
    <div className="container">
        <CarouselWrapper fade>
            <Carousel.Item>
                <img className="d-block w-100" src="https://www.fullphimz.net/static/5fe2d564b3fa6403ffa11d1c/60ddc1a2085d2983a0be88fa_poster-toi-da-lo-yeu-muc-tieu-truy-sat-cua-minh.jpg" alt="First slide"/>
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img className="d-block w-100" src="https://www.fullphimz.net/static/5fe2d564b3fa6403ffa11d1c/60d5eaee9444ba4ccf11c156_poster-quyen-tu-luong.jpg" alt="Second slide" />
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img className="d-block w-100" src="https://www.fullphimz.net/static/5fe2d564b3fa6403ffa11d1c/60d44c5d758c24d1a6d08e89_poster-bo-vuc-cua-su-dien-ro.jpg" alt="First slide" />
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </CarouselWrapper>
    </div>
)
class Home extends React.Component<{}, {}> {
    
    render(){
        return (
            <>
                <Jumpotron>
                    <div className="container-fluid" style={{padding: '0px'}} >
                        <div className="col-12 col-sm-6">
                            <h1>Movie Website</h1>
                            <p>dasdaslkjdakjdkalsjdkalsjdklajslkdjaksldjaklsjd</p>
                            <hr/>
                            <p>asdadkajdlasjdlkajdlkajslkdasjdklajslkdajslkdasjlkdasjlkd</p>
                            <Button variant="danger" href="movies">Start</Button>
                        </div>
                    </div>
                </Jumpotron>
                <Main />
            </>
        )
    }
}

export default Home