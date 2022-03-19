import React from "react";
import { useState, useEffect } from "react";
import "./member.css"
import { getteam } from "./api";

const url = "https://www.bootdey.com/img/Content/avatar/avatar7.png";
export default () => {

    const [member, setMember] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            let data = await getteam();
            console.log(data);
            setMember(data);
        }
        fetchData();
    }, []);


    return <>



        <div className="container">
            <div className="row text-center">

                {member && member.map((e) => (

                    (e.type == 0) &&
                    <div className="col-xl-3 col-sm-6 mb-5">
                        <div className="bg-white rounded shadow-sm py-5 px-4"><img src={e.url} alt="" width={100} onError={(e) => { e.target.onerror = null; e.target.src = url; }} className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                            <h5 className="mb-0">{e.name}</h5><span className="small text-uppercase text-muted">{e.about}</span>
                            <ul className="social mb-0 list-inline mt-3">
                                <li className="list-inline-item" ><a href={e.facebook} target="_blank" className="social-link"><i className="fa fa-facebook-f" /></a></li>
                                <li className="list-inline-item"><a href={e.github} target="_blank" className="social-link"><i className="fa fa-github" /></a></li>
                                <li className="list-inline-item"><a href={e.insta} target="_blank" className="social-link"><i className="fa fa-instagram" /></a></li>
                                <li className="list-inline-item"><a href={e.linkedin} target="_blank" className="social-link"><i className="fa fa-linkedin" /></a></li>
                            </ul>
                        </div>
                    </div>
                ))
                }

            </div>
        </div>
    </>
}