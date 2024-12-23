import react from "react";

const Contact= ()=>{

    return (
        <>
        <div className="container d-flex flex-column">
        <input className="w-50" type="text" name="username" placeholder="FullName"/>
        <input className="w-50" type="email" name="email" placeholder=" Email"/>
        <input className="w-50" type="text" name="username" placeholder="phoneNumber"/>
        </div>
        <div className="bg-secondary">
        <div className="d-flex container ">
            <div className="mx-3">
                <h2 className="text-light">Location
                </h2>
                <p className="text-light">2215 John Daniel Drive
                Clark, MO 65243 </p>
            </div>
            <div>
                <h2 className="text-light">
                Around the Web

                </h2>
            </div>
            <div>
                <h2 className="text-light">
                About Freelancer

                </h2>
                <p className="text-light">
                Freelance is a free to use, MIT licensed Bootstrap theme created by Start Bootstrap .
                </p>
            </div>
            </div>
        </div>

 


       
        </>
    )
}
export default Contact;