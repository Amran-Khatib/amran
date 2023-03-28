import React from 'react'
import { Link } from 'react-router-dom'

export default function Menu() {
  return (
    <div>

        <Link to={'/'}><button>page1</button></Link>
        <Link to={'/page2'}><button>page2</button></Link>

    </div>
  )
}
