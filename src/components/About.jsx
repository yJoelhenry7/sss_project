/* eslint-disable react/no-unescaped-entities */
// import { GitHub, LinkedIn } from '@mui/icons-material';
// import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div>
        <div className="flex justify-center p-8 flex-wrap">
            <div id="about" className="w-full md:w-1/2 animate-on-load animate-text">
                <h1 className="text-3xl font-bold">About </h1>
                <hr className="mb-8 mt-2" />

                <p className="text-lg mb-4">
                Hello, I'm Upendra.K, Assistant Professor in VIT(Vishnu Institute of Technology).
                An enthusiastic Assistant Professor at Vishnu Institute of Technology, where I passionately contribute to the realm of education. Armed with a Master's degree in Technology (M.Tech), my journey in academia has been guided by a relentless pursuit of knowledge and a commitment to nurturing the intellectual growth of my students.

                My academic journey has been marked by dedication and a thirst for excellence. I am proud to share that I have successfully qualified the National Eligibility Test (NET), a testament to my proficiency and expertise in my chosen field.

                This corner of the internet is a space where I aim to connect with fellow educators, students, and curious minds alike. Here, I'll be sharing insights, experiences, and knowledge gained through years of academic engagement. Whether you're looking for resources, educational discussions, or simply curious about the world of technology and academia, you've come to the right place.

                Join me on this journey of exploration and learning. Let's create a community where ideas flourish, and knowledge knows no bounds. Welcome to a space where education meets inspiration, and together, we can embark on a voyage of intellectual growth and discovery.

                Feel free to explore, engage, and connect. I look forward to sharing this educational odyssey with you!
                </p>
                <p className="text-lg"></p>
                {/* <div>
                   <Link to='https://github.com/yJoelhenry7' aria-label='Github Link'  target='_blank'> <GitHub style={{fontSize: '2.2rem'}} /></Link>
                   <Link to='https://www.linkedin.com/in/joel-henry-yellamelli/' aria-label='Linkedin Link' target='_blank'> <LinkedIn style={{fontSize: '2.2rem'}} /></Link>
                </div> */}
            </div>
        </div>
    </div>
  )
}

export default About