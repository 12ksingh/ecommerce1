import React from 'react'
import Container from './Container'

export default function Footer() {
  return (
    <>
      <Footerr/>
      <hr />
      <Payment/>
    </>
  )
}

const Footerr = () => {
  const footerCat = [
    {
      name:"Infomation",
      type1:"About Us",
      type2:"Infomation",
      type3:"Privacy Policy",
      type4:"Terms & Conditions"
    },
    {
      name:"Service",
      type1:"About Us",
      type2:"Infomation",
      type3:"Privacy Policy",
      type4:"Terms & Conditions"
    },
    {
      name:"Extras",
      type1:"About Us",
      type2:"Infomation",
      type3:"Privacy Policy",
      type4:"Terms & Conditions"
    },
    {
      name:"My Account",
      type1:"About Us",
      type2:"Infomation",
      type3:"Privacy Policy",
      type4:"Terms & Conditions"
    },
    {
      name:"Userful Links",
      type1:"About Us",
      type2:"Infomation",
      type3:"Privacy Policy",
      type4:"Terms & Conditions"
    },
    {
      name:"Our Offers",
      type1:"About Us",
      type2:"Infomation",
      type3:"Privacy Policy",
      type4:"Terms & Conditions"
    },
  ]
  return (
    <Container extraClass="hidden my-[40px] md:grid grid-cols-6">
      {
        footerCat.map((item, index) => {
          return (
            <div key={index}>
              <h3 className='my-[20px] text-[#22262A] text-[18px] font-[600]'>{item.name}</h3>
              <div className='text-[#262626] text-[14px]' >
              <p className='my-[20px]'>{item.type1}</p>
              <p className='my-[20px]'>{item.type2}</p>
              <p className='my-[20px]'>{item.type3}</p>
              <p className='my-[20px]'>{item.type4}</p>
              </div>
            </div>
          )
        })
      }
    </Container>
  )
}
const Payment = () => {
  return(
    <Container extraClass=" hidden mb-[100px] mt-[40px] md:flex justify-end gap-[10px]" >
    <img src="img/Western_union.png" alt="" />
    <img src="img/visa.png" alt="" />
    <img src="img/Paypal.png" alt="" />
    <img src="img/master_card.png" alt="" />
    </Container>
  )
}
