import imageCharacter from '../image/wp4715522.webp'
import LayoutComponent from "./LayoutComponent"



const AboutComponent = () => {
  return (
    <LayoutComponent topic={'About'} idcomponent={'about'} bgopacity={'bg-opacity-[90%]'}>
        <div className=" flex flex-col-reverse lg:flex-row justify-between items-center mt-[2rem]">
            <p className=" text-white lg:text-[1rem] pl-[0.5rem] text-opacity-80  mt-[2rem] lg:w-[40%] font-Incluesive-Sans">
              <span className="pl-[1rem]">When I started traveling, I came across FullStack-Dev, and it made me realize my passion for this field.</span>
              <br /><span className="pl-[1rem]">The protagonist in the anime acquires new knowledge and applies it to defeat powerful monsters, constantly improving to overcome new challenges.</span>
              <br /><span className="pl-[1rem]">The concept of my favorite characters is similar to the life of a FullStack-Developer, who is constantly battling new code and errors. To overcome them, one must constantly learn and apply the knowledge gained in every situation.situation.</span>
              <br /><span className="pl-[1rem]">I have a strong desire to become a FullStack-Developer, mainly because it combines the skills of a swordsman and a wizard, just like in an anime. The Frontend Development is like the sword, while Backend Development is like magic. When these two skills are combined, they create a powerful synergy that I find fascinating</span>
            </p>
            <img src={imageCharacter} alt="" className=" lg:w-[50%] rounded-3xl" />
        </div>
    </LayoutComponent>
  )
}

export default AboutComponent