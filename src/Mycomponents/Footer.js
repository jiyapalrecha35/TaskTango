import React from 'react'


export default function Footer(props) {
  let footerStyle={width:'100%',border:"1px solid #c5f0d0"}
  return (
    <div className={`bg-${props.mode}py-2`} style={footerStyle}>
      <p className='mx-2 my-2 text-center'>CopyRight &copy; TaskTango.com</p>

    </div>
  )
}
