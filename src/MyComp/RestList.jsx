import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressBook, faEdit, faStar, faTrash, faSearch } from '@fortawesome/free-solid-svg-icons'

class RestList extends Component {


    constructor() {
super()

        this.state = {
            RestList: null,
            total : null
        }
    }

    componentDidMount() {
        this.getData()
    }


    async getData() {

        let url = 'http://localhost:8000/restaurent'

        try {
            fetch(url).then((response) => {
                response.json().then((result) => {
                    // console.log(result)
                    this.setState({ RestList: result })
                })
            })
        }
        catch (e) {
            console.log(e)
        }
    }

    //delete
    delete(id) {
        let url = 'http://localhost:8000/restaurent/' + id

        let options = {
            method: 'delete'
        }

        fetch(url, options)

        alert('delete')
        this.getData()

    }

    //search
    search(key) {

        let url = 'http://localhost:8000/restaurent?q=' + key

        fetch(url).then((response) => {

            response.json().then((result) => {
                console.log(result)

                this.setState({ RestList: result })

                this.setState( {total : this.state.RestList.length } ) 

                if(!this.state.total){ this.setState({total : 'No Search Result'})}

            }
            )
        })

    }



    render() {
        let bgcol;

        return (
            this.state.RestList
                ?
                <div className='RestList container-fluid text-center'>

                    <h1>Restaurent List </h1>

                     <form className="d-flex my-3 style ">

                        <input type="search" className="form-control mx-2" name="" id="search" aria-describedby="helpId" placeholder="search todo" onChange={(e) => { this.search(e.target.value) }} style={{width:'20%'}}></input>


                        <button type="submit" className="btn btn-outline-primary"> <FontAwesomeIcon icon={faSearch} className='fa-lg' /></button>
                        { this.state.total ? <b> total results : {this.state.total} </b> :  <>  </>  } 

                    </form>


                    <table className='table table-striped table-bordered' >

                        <thead>
                            <tr>
                                <th>Sno.</th>
                                <th>Name</th>
                                <th>Rating</th>
                                <th>Email</th>
                                <th>Address <FontAwesomeIcon icon={faAddressBook} color='black' className='fa-md' /></th>
                                <th>Option</th>
                            </tr>
                        </thead>
                        <tbody>
                            {

                                this.state.RestList.map((Rest, i) =>

                                    <tr>

                                        <td className="bg-inf" key = {i + 1}> {i + 1}</td>

                                        <td className="bg-warnin">{Rest.name}</td>

                                        <td className="bg-dange">     <FontAwesomeIcon icon={faStar} color='yellow' /> </td>

                                        <td className="bg-succes"> {Rest.email}</td>

                                        <td className="bg-primar">{Rest.address}</td>

                                        <td className="bg-primar">

                                            <Link to={'/update/' + Rest.id}> <FontAwesomeIcon icon={faEdit} color='blue' className='fa-sm' />  </Link>/

                                            <button onClick={() => { this.delete(Rest.id) }}> <FontAwesomeIcon icon={faTrash} color='red' className='fa-sm' />  </button>

                                        </td>

                                    </tr>
                                )
                            }
                        </tbody>

                    </table>

                </div>
                :
                <h2>No Rest Available</h2>
        )
    }
}

export default RestList
