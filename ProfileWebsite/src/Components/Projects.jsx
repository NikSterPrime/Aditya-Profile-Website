import task from "../assets/Projects/Task.png";
import musicgen from "../assets/Projects/music.jpg";
import podcast from "../assets/Projects/Podcast.png";

const Projects = () => {
    const Projectsindex = [
        {name:"Productivity Management",img:task,description:"A real-time activity tracking tool that helps users understand how they spend time on their computer by monitoring active windows and displaying the data through a clean web interface.",Techstack: "Python, MongoDB, HTML, CSS"},
        {name:"Music Generation",img:musicgen,description:"An AI-powered music generation system that learns from existing melodies to compose original musical sequences using deep learning.",Techstack:"  Python, TensorFlow/Keras, RNN (LSTM), Kaggle MIDI Dataset"},
        {name:"Atria Podcast Club",img:podcast,description:"A full-stack web platform developed for Atria Podcast Club to showcase podcast content, integrate video features, and provide an intelligent chatbot experience for users.",Techstack:"Frontend – React.js Backend – Express.js  APIs – YouTube Data API, DeepSeek API"},
        {name:"Smart Dustbin",img:"#",description:"An intelligent waste management system designed using Arduino and ultrasonic sensors, capable of detecting waste levels and communicating with other units via a mesh network.",Techstack:"Arduino Uno, Ultrasonic Sensor (HC-SR04),C++"},
    ]

    return(
        <div className="p-6 md:p-10 rounded-2xl m-6 md:m-10">
            <h1 className="text-[#6A9955] text-xl sm:text-2xl md:text-3xl font-semibold p-6">// Projects</h1>
            <div className="flex flex-col">
                <div className="flex gap-2">
                    {Projectsindex.map((skill, index) => (
                      skill.img !== "#" ? (
                        <div
                          key={index}
                          className="bg-[#1e1e1e] p-6 md:p-10 rounded-2xl shadow-2xl flex flex-col justify-center items-center w-1/4 text-justify border-1"
                        >
                          <img className="h-80" src={skill.img} alt={skill.name} />
                          <h2 className="p-6 text-[#DCDCAA] text-lg sm:text-xl md:text-2xl">
                            {skill.name}
                          </h2>
                          <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed w-full">
                            {skill.description}
                          </p>
                          <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed w-full">
                            Tech Stack: {skill.Techstack}
                          </p>
                        </div>
                      ) : (
                        <div
                          key={index}
                          className="bg-[#1e1e1e] p-6 md:p-10 rounded-2xl shadow-inner flex flex-col items-center justify-center w-1/4 text-justify border-1"
                        >
                          <h2 className="p-6 text-[#DCDCAA] text-lg sm:text-xl md:text-2xl">
                            {skill.name}
                          </h2>
                          <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed w-full">
                            {skill.description}
                          </p>
                          <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed w-full">
                            Tech Stack: {skill.Techstack}
                          </p>
                        </div>
                      )
                    ))}
                </div>
            </div>
            
        </div>
    )
}

export default Projects;