import React, { Component } from 'react'

export class RestUpdate extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: null,
            address: null,
            rating: null,
            email: null,
            id:null
        }
        this.id = this.props.match.params.id
        this.url = 'http://localhost:8000/restaurent/' + this.id
    }

    async componentDidMount() {
        let response = await fetch(this.url)
        let result = await response.json()


        this.setState({
            id:result.id,
            name: result.name ,
            address: result.address,
            email: result.email,
            rating: result.rating
        })

    };



    update(e) {
        e.preventDefault()

        let options = {
            method: 'put',
            headers: {
                'Accept': 'application/json',
                "Content-Type": 'application/json'
            },
            body: JSON.stringify(this.state)
        }

        try {
            fetch(this.url, options).then((response) => {

                response.json().then((result) => {

         alert('updated')
         window.location.href = 'http://localhost:3000/list'
                }
                )
            })
        }
        catch (e) {
            console.log(e)
        }
    }



    render() {
        // this.props
        // history: {length: 25, action: "PUSH", location: {…}, createHref: ƒ, push: ƒ, …}
        // location: {pathname: "/update/1", search: "", hash: "", state: undefined, key: "b36cjr"}
        // match: {path: "/update", url: "/update", isExact: false, params: {…}}
        // staticContext: undefined



        return (
            <div className='RestUpdate'>

                <h1 className='text-center'>Restaurent Update</h1>

                <form >

                    <div className="form-inline my-2 mt-4">
                        <label htmlFor="name" className='col-sm-2 col-form-label'>Restaurent Name :</label>
                        <input type="text"
                            className="form-control col-sm-8" name="" id="name" aria-describedby="helpId" placeholder="Name.." onChange={(e) => this.setState({ name: e.target.value })} value={this.state.name} />
                    </div>

                    <div className="form-inline my-2 mt-4">
                        <label htmlFor="ration" className='col-sm-2 col-form-label'>Rating :</label>
                        <input type="number"
                            className="form-control col-sm-8" name="" id="rating" aria-describedby="helpId" placeholder="Ration.." onChange={(e) => this.setState({ rating: e.target.value })} value={this.state.rating} />
                    </div>

                    <div className="form-inline my-2">

                        <label htmlFor="email" className='col-sm-2 col-form-label'>Email :</label>
                        <input type="email"
                            className="form-control col-sm-8" name="" id="email" aria-describedby="helpId" placeholder="email.." onChange={(e) => this.setState({ email: e.target.value })} value={this.state.email} />
                    </div>

                    <div className="form-inline my-2">

                        <label htmlFor="address" className='col-sm-2 col-form-label'>Address :</label>
                        <input type="text"
                            className="form-control form-control-lg col-sm-8" name="" id="address" aria-describedby="helpId" placeholder="address" onChange={(e) => this.setState({ address: e.target.value })} value={this.state.address} />
                    </div>

                    <button className='btn btn-primary btn-block mt-2 mx-5' onClick = {(e)=> this.update(e) } type='submit'>Submit</button>

                </form>

            </div>
        )
    }
}

export default RestUpdate
