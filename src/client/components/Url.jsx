import React, { Component } from 'react';

class Url extends Component {

    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);

        fetch('http://localhost:8080/api/form-submit-url', {
            method: 'POST',
            body: data,
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="username">Enter username</label>
                    <input id="username" name="username" type="text" />

                    <label htmlFor="email">Enter your email</label>
                    <input id="email" name="email" type="email" />

                    <label htmlFor="birthdate">Enter your birth date</label>
                    <input id="birthdate" name="birthdate" type="text" />

                    <button>Send data!</button>
                </form>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="username">Enter username</label>
                    <input id="username" name="username" type="text" />

                    <label htmlFor="email">Enter your email</label>
                    <input id="email" name="email" type="email" />

                    <label htmlFor="birthdate">Enter your birth date</label>
                    <input id="birthdate" name="birthdate" type="text" />

                    <button>Send data!</button>
                </form>
            </div>
        );
    }
}

export default Url;
