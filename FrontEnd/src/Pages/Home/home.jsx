import React, { useState } from 'react'
import './home.css'
import Header from '../../Components/Header/Header'
import ExploreMenu from '../../Components/ExploreMenu/ExploreMenu'


const home = () => {

const [category,setCategory] = useState('');

  return (
    <div>
      <Header/>
      <ExploreMenu/>
    </div>
  )
}

export default home
