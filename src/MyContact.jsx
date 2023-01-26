import React, {useState} from "react";
const MyContact = () => {
    const [data, setData]=useState({
        myname:'',
        phone:'',
        email:'',
        textarea:''
    });
    const inputEvent=(event)=>{
        const {name, value}=event.target;
        setData((preData)=>{
            return {
                ...preData,
                [name]:value
            }
        })
    }
    const formSubmit=(event)=>{
        event.preventDefault();
        console.log(data);
        alert(`name is - ${data.myname}, phone is - ${data.phone}, email is- ${data.email} and message is- ${data.textarea}`);
        setData({
        myname:'',
        phone:'',
        email:'',
        textarea:''
        });
    }
    return (
        <>
            <div className="my-5">
                <h1 className="text-center">Contact US</h1>
            </div>
            <div className="container contact_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form onSubmit={formSubmit}>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
                                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter your name" required name='myname' value={data.myname} onChange={inputEvent} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Phone</label>
                                <input type="number" className="form-control" id="exampleFormControlInput1" placeholder="Enter mobile no." required name='phone' value={data.phone} onChange={inputEvent} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" required name='email' value={data.email} onChange={inputEvent} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlTextarea1" className="form-label">Message</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" required name='textarea' value={data.textarea} onChange={inputEvent}></textarea>
                            </div>
                            <div className="col-12">
                                <button className="btn btn-outline-primary" type="submit">Submit form</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MyContact;