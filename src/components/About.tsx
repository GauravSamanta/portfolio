function About() {
  return (
    <div className="about ml-80 mt-16">
      <div>
        <div className="">
            <div className="text-[#808080] text-6xl py-5"><span className="intro">I’m</span> <span className="first-name">Gaurav</span> <span className="last-name">Samanta</span></div>
      </div>
      <div className="font-Inter text-[#808080] text-2xl ">
      Passionate problem solver and computer engineering student <br />
      with a focus on game development and software engineering. <br />Committed to exceptional outcomes through coding expertise. </div>
      <div className="flex flex-row py-3.5 space-x-4 mt-5">
      <div className="basis-1/4 btn pr-px text-[#d9d9d9]"> <input type="button" value="My Resume" /></div>
      <div className="basis-1/4 btn text-[#d9d9d9]"> <input type="button" value="Contact Me" /></div>
      </div>

        </div>
    </div>
  );
}

export default About;
