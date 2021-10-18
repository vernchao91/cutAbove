import React from 'react'
import { Link } from 'react-router-dom'

const SearchPage = (props) => {
    return (
        <>
        {props.stylists.map((stylist, i) => (
            <div className={`stylist-block`}>
                <Link to={`/stylists/${stylist.id}`}>
                    {/* <img src={stylist.photoUrl} className={`stylist`} /> */}
                </Link>
                <Link to={`/stylists/${stylist.id}`} className="stylist-link">{stylist.handle}</Link>
            </div>
            ))
        }
        </>
    )
}

export default SearchPage