
export default function Reviews() {
  return (
    <div>
      {/* If not doing multi-colored, change to h-full and remov h-screen */}
      <div className="contain h-900px lg:h-70vh grid grid-cols-2 items-center justify-center content-center pt-5 lg:pt-0">
        <div className="col-span-2 lg:col-span-1 mx-auto top-8 order-2">
          {/* Reviews from houzz */}
          <iframe className="order-2" scrolling="no"  height="500" width="290" src="https://www.houzz.com/reviewWidget/distinctive7930/" />
        </div>
        <div className="col-span-2 lg:col-span-1 order-1">
          <div className="grid-rows-2 gap-y-4">
              <p className="body-text">Houzz Awards</p>
            <div className="row-span-1 flex justify-around my-10">
              <img className="h-20 w-20 md:h-32 md:w-32" src="https://sk.hzcdn.com/assets/en-US/20210318162023/jpics/badge_54_7@2x.png" alt="Best of Houzz 2021" />
              <img className="h-20 w-20 md:h-32 md:w-32" src="https://st.hzcdn.com/static/badge_49_8@2x.png" alt="Emanuel Villa, Luis Zamarron in San Antonio, TX on Houzz" width="80" height="80" border="0" />
              <img className="h-20 w-20 md:h-32 md:w-32" src="https://sk.hzcdn.com/assets/en-US/20210318162023/jpics/badge_44_7@2x.png" alt="Best of Houzz 2018" />
            </div>
          </div>
          <p className="body-text pb-10 lg:pb-0 ">We are driven and motivated to do our very best to ensure complete customer satisfaction. Our prices are competitive and our service and attention to detail is outstanding.</p>
        </div>
      </div>
    </div>
  )
};




{/* <div>
<div className="block lg:flex items-center justify-center content-center h-screen pt-20 lg:pt-0">
  <div className="order-1">
    <p className="order-1 text-2xl font-light pr-10 pb-10 lg:pb-0">We are driven and motivated to do our very best to ensure complete customer satisfaction. Our prices are competitive and our service and attention to detail is outstanding.</p>
    {/* Houzz Badge 
    <img src="https://st.hzcdn.com/static/badge_49_8@2x.png" alt="Emanuel Villa, Luis Zamarron in San Antonio, TX on Houzz" width="80" height="80" border="0" />
  </div>
  <div className="order-2">
    Reviews from houzz 
    <iframe className="order-2 text-center mx-auto" scrolling="no" width="300" height="435" src="https://www.houzz.com/reviewWidget/distinctive7930/" />
  </div>
</div>
</div> */}
