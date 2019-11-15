import React, { Component } from 'react';

export default class TopSection extends Component {
    render() {
        return (
            <section id="banner" data-video="images/banner">
                <div className="inner">
                    <header>
                        <h1>Hello, I'm <span className="highlight">Tri Ho</span>.</h1>
                        <br />
                        <h1>I'm a Software Engineer.</h1>
                        <h2>Brand statement will be here....</h2>
                        <p>
                        Here are some projects I've built.
                        </p>
                    </header>
                    <a href="#main" className="more">Learn More</a>
                </div>
      </section>
        )
    }
}
