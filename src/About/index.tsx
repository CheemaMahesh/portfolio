
const About = () => {
    return (
        <div className="about flex w-full h-[700px] max-[900px]:h-[2200px] bg-[#000] max-[900px]:flex-col px-8 border-b-[1px] border-[#808080] border-solid">
            <div className="w-5/12 h-full flex flex-col p-2 max-[900px]:w-full max-[900px]:h-[700px] max-[900px]:items-center">
                <p className="aboutmeText text-4xl font-bold text-white p-4">
                    About Me
                </p>
                <div className="profile_container w-[400px] h-[500px] border-[1px] border-[#808080] border-solid rounded-md p-3">
                    <img className="w-full h-full rounded-md" src="src\assets\mahesh.jpg" />
                </div>
            </div>
            <div className="right_section text-[#ffffff] w-7/12 max-[900px]:w-full flex flex-col p-2 py-4 gap-4">
                <div className="flex mx-auto px-4 py-2 bg-[#2c3437] rounded-md font-bold">Welcome to the Mahesh Zone: Where Code Meets Creativity! 🌱💻</div>
                <div className="flex flex-col gap-2">
                    <p className="aboutmeText text-[#004830] text-lg font-bold">
                        Finally, we can talk about me, a blend of creativity with Tech.
                    </p>
                    <p>Born in the small village at Andhra Pradesh in India, I’ve always been curious and inventive. Growing up surrounded by nature, I tinkered with machines and dreamed of technology.</p>
                    <p>
                        After earning an undergraduate degree in B.Com Computer Applications, I took some time to reflect on my future and the domain I wanted to pursue. During this period, I decided to venture into the tech field. My journey began in January 2023, starting with Data Structures and Algorithms (DSA) in Java.

                        Initially, it was quite challenging, especially since I came from a commerce background. However, I was determined to succeed and dedicated myself to learning and mastering the subject. This experience was rewarding, as I realized the value of acquiring a new skill without prior experience.

                        After six months of studying DSA, I recognized the significance of web development and chose to focus on that area. It took considerable time and effort to learn and master web development, but I successfully built over 30 minor projects and 10 major projects.

                        In September 2023, I began seeking job opportunities and felt excited about my future. In January 2024, I landed my first position as a Front-End Intern at a reputable company. After six months of hard work, I was promoted to Associate Software Engineer, and I am eager to continue learning and growing in this field.
                    </p>
                    <p>
                        While working at my current company, I developed a keen interest in Web 3.0, which represents the next evolution of the internet, focusing on decentralization, blockchain technology, and enhanced user privacy. This innovative paradigm shift has captivated my attention, prompting me to delve deeper into its concepts and applications. I have started studying various aspects of Web 3.0, including decentralized applications (dApps), smart contracts, and the underlying technologies that power them. As I continue my learning journey, I am excited about the potential of Web 3.0 to transform industries and empower individuals, and I look forward to applying this knowledge in my future projects.
                    </p>
                </div>
            </div>
        </div>
    )
};

export default About;