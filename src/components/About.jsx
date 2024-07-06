
const About = () => {
  return (
    <>
      <div className="mt-12" id="About">
        <div className="bg-lime-50">
          <div className="py-4 px-12 ">
            <h1 className="text-3xl text-lime-500 font-bold pt-4 text-center lg:mb-12">About us</h1>
            <p className="text-xl text-slate-500 py-4 lg:w-[30%] inline-block">
              Our mission is to help you live a healthy life and better health by providing
              you with the right healthy food.
              <hr className="my-4 border-dotted border-lime-500"/>
              Better Health is mobile application that enables anyone to order healthy meals,
              as it greatly reduces time.  
            </p>
            <img
              src="https://cdn.cancercenter.com/-/media/ctca/images/others/blogs/2019/06-june/02-blog-healthy-food-l.jpg"
              alt=""
              className=" lg:w-[50%] inline-block lg:ml-28 border-b-8 border-lime-500"
            />
          </div>  
          <div className="py-2 px-12 ">
            <img
              src="https://cdn.pixabay.com/photo/2016/11/06/23/31/breakfast-1804457_1280.jpg"
              alt=""
              className=" lg:w-[40%] inline-block lg:mr-24 border-t-8 border-lime-500 pb-4 mb-8"
            />
            <p className="text-xl text-slate-500 lg:w-[50%] inline-block my-2">
              <h1 className="text-3xl text-lime-500 py-3">Our Story</h1>
              Our story begins with Mr. Zaghloul when he was returning from
              a long and exhausting day at work. When he arrived at his home,
              he was surprised that the elevator had broken down, forcing him to climb on his feet.
              When he arrived home, he felt unusually very tired, so he advised his wife to go to the doctor,
              who diagnosed his condition as suffering from high lipid levels.
              - Unhealthy due to eating fast and unhealthy foods. When he returned
              from the doctor`s office, he found a place full of people, and this place was
              Better Health, and it was a great opportunity for Mr.
              Zaghloul because he found the right place to prepare his healthy food because he did not have time
              to prepare his meals, which ultimately helped him adhere to his healthy regime without interruption.
            </p>
            </div>
        </div>
      </div>  
    </>
  )
}

export default About