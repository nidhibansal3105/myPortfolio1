import '../../src/index.css'
import ElectricBorder from '../BitsComponent/ElectricBorder'

function About(){
    return(
        <>
        <ElectricBorder
  color="#0065d1"
  speed={1}
  chaos={0.12}
  thickness={2}
  style={{ borderRadius: 16 }}
>
        <div className="aboutContainer flex justify-center items-center">
            <div className="rightAbout w-[40%] flex justify-center items-center">
                <div className="image flex justify-center items-center"></div>
            </div>
            <div className="leftAbout w-[50%]">
                <div className="name text-amber-50">
                    I'm <span>NIDHI BANSAL</span>
                    <p>A passionate Computer Science undergraduate who loves exploring algorithms, coding solutions, and building logical systems. Currently in my second year of B.Tech, I am focused on strengthening my fundamentals while actively learning modern technologies to become a skilled and adaptable software engineer.</p>
                </div>
                <a href="../../public/Resume.pdf" target="_blank"><button className="downloadCV">Download CV</button></a>
            </div>
        </div>
        </ElectricBorder>
        </>
    )
}
export default About;