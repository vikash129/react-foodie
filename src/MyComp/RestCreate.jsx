import React, { Component , useState } from 'react'

export default function RestCreate () {


    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')

    function create(e){
        e.preventDefault()

        let url = 'http://localhost:8000/restaurent'

        let options = {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({name , email ,address})
        }

        try {
            fetch(url, options).then((response) => {
                console.log(response)
                response.json().then((result) => {
                    console.log(result.name)
                    alert('restaurent ',result.name,'has been created')

                })
            })
        }
        catch (e) {
            console.log(e)
        }

    }

//     body: (...)
// bodyUsed: true
// headers: Headers {}
// ok: true
// redirected: false
// status: 201
// statusText: "Created"
// type: "cors"
// url: "http://localhost:8000/restaurent"


        return (
            <div className='RestCreate'>

                <h1 className='text-center'>Restaurent Create</h1>

                <form  onSubmit={create}>

                <div className="form-inline my-2 mt-4">
                  <label htmlFor="name" className='col-sm-2 col-form-label'>Restaurent Name :</label>
                  <input type="text"
                      className="form-control col-sm-8" name="" id="name" aria-describedby="helpId" placeholder="Name.."  onChange = { (e)=> setName(e.target.value) }/>
                </div>

                <div className="form-inline my-2">

                  <label htmlFor="email"  className='col-sm-2 col-form-label'>Email :</label>
                  <input type="email"
                      className="form-control col-sm-8" name="" id="email" aria-describedby="helpId" placeholder="email.." onChange = { (e)=> setEmail(e.target.value) }/>
                </div>

                <div className="form-inline my-2">

                  <label htmlFor="address"  className='col-sm-2 col-form-label'>Address :</label>
                  <input type="text"
                      className="form-control form-control-lg col-sm-8" name="" id="address" aria-describedby="helpId" placeholder="address" onChange = { (e)=> setAddress(e.target.value) } />
                </div>

                      <button className='btn btn-primary btn-block mt-2 mx-5'>Submit</button>

                </form>

            </div>
        )
}



