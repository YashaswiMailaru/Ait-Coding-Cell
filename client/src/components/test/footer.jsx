import React from "react"

export default function footer() {
    return (
        <div className = "siteFooter" >
            <div className = "socialLinks">
                <a href ="https://www.facebook.com/groups/AIT.CP"> <i className = "fab fa-facebook"></i> </a>
                <a href ="#instagram"> <i className = "fab fa-instagram"></i> </a>
                <a href ="https://codeforces.com/ratings/organization/6008"> <span className ="iconify" data-icon="simple-icons:codeforces" data-inline="false"></span> </a>
                <a href ="https://www.codechef.com/ratings/all?filterBy=Institution%3DArmy%20Institute%20of%20Technology&order=asc&sortBy=global_rank"> <span className="iconify" data-icon="simple-icons:codechef" data-inline="false"></span>  </a>
            </div>
            <div className = "footer-bottom">
                Made with ❤️ by <a href="#about"> <span className = "CpClub"> CP Club </span> </a>.
            </div>
        </div>
    )
}