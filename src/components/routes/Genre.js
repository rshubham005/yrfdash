import React from 'react'
import '../css/Genre.css'
import {Link} from 'react-router-dom'

function Genre() {
    return (
        <div className='genre'>
            <Link to='/genre-info/horror'><button>Horror</button></Link>
            <Link to='/genre-info/comedy'><button>Comedy</button></Link>
            <Link to='/genre-info/action'><button>Action</button></Link>
            <Link to='/genre-info/thriller'><button>Thriller</button></Link>
            <Link to='/genre-info/myestery'><button>Mystery</button></Link>
            <Link to='/genre-info/western'><button>Western</button></Link>
            <Link to='/genre-info/drama'><button>Drama</button></Link>
            <Link to='/genre-info/romantic'><button>Romance</button></Link>
            <Link to='/genre-info/sci-fi'><button>Science Fiction</button></Link>
        </div>
    )
}

export default Genre
