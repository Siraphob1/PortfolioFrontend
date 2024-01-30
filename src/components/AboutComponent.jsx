import LayoutComponent from "./LayoutComponent";
import aboutImg from "../image/other/ImageCharacter.jpg";
const AboutComponent = () => {
  return (
    <LayoutComponent
      topic={"About"}
      idcomponent={"about"}
      bgopacity={"bg-opacity-[90%]"}
    >
      <div className=" flex flex-col-reverse lg:flex-row justify-between items-center mt-[2rem]">
        <div className="  text-white lg:text-[1rem] pl-[0.5rem] text-opacity-80  mt-[2rem] lg:w-[40%] font-Incluesive-Sans flex flex-col gap-y-[0.5rem]">
          <p className="indent-[2rem]">
            Dynamic Junior Software Developer specializing in game development,
            adept at creating feature-rich games post-graduation. Experienced in
            NPC item trading, character control, inventory management, and user
            interfaces.
          </p>
          <p className="indent-[2rem]">
            Graduated from Generation Thailand&apos;s Junior Software Developer
            bootcamp (cohort 5), proficient in React.js, HTML, CSS, JavaScript,
            Git, Bootstrap, Tailwind, Node.js, and Express.js. Passionate about
            immersive experiences and committed to continuous learning.
          </p>
          <p className="indent-[2rem]">
            Recently concluded short term contract Frontend Developer. Eager to
            contribute creative coding skills to a dynamic team and help bring
            innovative projects to life.
          </p>
        </div>
        <img src={aboutImg} alt="" className=" lg:w-[50%] rounded-3xl" />
      </div>
    </LayoutComponent>
  );
};

export default AboutComponent;
