import '../../App.css';
import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';


const images = [
    "images/img-1.jpg",
    "images/img-2.jpg",
    "images/img-3.jpg",
    "images/img-4.jpg",
    "images/img-5.jpg",
    "images/img-6.jpg",
    "images/img-7.jpg",
    "images/img-8.jpg",
    "images/img-9.jpg",
    "images/img-10.jpg",
    "images/img-11.jpg",
    "images/img-12.jpg",
    "images/img-13.jpg",
    "images/img-14.jpg",
    "images/img-15.jpg",
    "images/img-16.jpg",
    "images/img-17.jpg",
];

export default class LightboxExample extends Component {
    constructor(props) {
        super(props);

        this.state = {
            photoIndex: 0,
            isOpen: false,
        };
    }

    render() {
        const { photoIndex, isOpen } = this.state;

        return (
            <div>
                <text>
                    An angle was born on August 28th, 1999.Tran Thuy Bao Tran is a very beautiful and cute person.<br/>
                    She is very skinny and eat very little. She is very smart and super cute.
                </text>
                <br/><br/>
                <button type="button" onClick={() => this.setState({ isOpen: true })}>
                    Open Pics of my bebi
                </button>
                {isOpen && (
                    <Lightbox
                        mainSrc={images[photoIndex]}
                        nextSrc={images[(photoIndex + 1) % images.length]}
                        prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                        onCloseRequest={() => this.setState({ isOpen: false })}
                        onMovePrevRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + images.length - 1) % images.length,
                            })
                        }
                        onMoveNextRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + 1) % images.length,
                            })
                        }
                    />
                )}
            </div>
        );
    }
}