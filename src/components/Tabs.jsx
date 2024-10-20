import React from 'react'
import Section from './Section'

function Tabs({children, buttons,ButtonsContainer = Section, ...props}) {
  return (
    <>
      <ButtonsContainer>
        {buttons}
      </ButtonsContainer>
      {children}
    </>
  )
}

export default Tabs