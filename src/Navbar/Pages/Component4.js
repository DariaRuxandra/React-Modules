// import React from 'react'
// import FilteredCard from '../../Components/Molecules/FilteredCard/FilteredCard'
import FilteredCard_organism from '../../Components/Organisms/FilteredCard-organism/FilteredCard-organism'
import '../PagesStyles/Component4.scss'
import Toggle from '../../Components/Molecules/CheckboxToggle/Toggle'
import Header from '../../Components/Molecules/FilteredCard/Header'
import HeaderOrganism from '../../Components/Organisms/FilteredCard-organism/HeaderOrganism'
export default function Component4() {
  return (
    <>
      <HeaderOrganism/>
      <FilteredCard_organism/>
    </>
  )
}

// <div className="component4-content ">
    //   <div className="header col-md-8">
    //     <p>Client cases</p>
    //     <h1>The platform behind millions of businesses lorem ipsum sectetur</h1>
    //     <Toggle/>
    //   </div>