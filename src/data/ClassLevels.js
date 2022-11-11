import ClassPic11 from '../images/ClassPic11.webp';
import ClassPic12 from '../images/ClassPic12.webp';
import ClassPic13 from '../images/ClassPic13.webp';
import { v4 as uuidv4 } from 'uuid';

let ClassLevels = [
    {
        name: 'Beginner Classes',
        picture: ClassPic11,
        info: 'At Sky, we believe that building a strong foundation is the most important step to becoming a strong English speaker. We start with a program of phonics that reinforces correct pronunciation from day one! We also introduce vocabulary words and important phrases that students can use in everyday conversations.',
        id: uuidv4()
    },
    {
        name: 'Intermediate Classes',
        picture: ClassPic12,
        info: 'Once students demonstrate a strong grasp of phonics and basic sentence patterns - we split our classes into one day of reading and one day of grammar. In our reading classes, students learn new vocabulary about interesting topics - and our teachers practice with students every day to learn to read with proper pronunciation, interesting pacing, and enthusiasm! Our grammar classes take students through verb tenses and learn to stay away from common mistakes for English learners. Above all, both classes emphasize speaking - and with our small class sizes, every student gets a lot of opportunity for practice!',
        id: uuidv4()
    },
    {
        name: 'Advanced Classes',
        picture: ClassPic13,
        info: 'At our highest levels, we focus our classes to maximize speaking and communication. Using monthly magazines written in Taiwan to introduce interesting topics we challenge students to speak for extended periods to demonstrate their knowledge and think critically about new topics and ideas. With our small class sizes, students can speak frequently, not just with the teacher but with each other in small groups, using materials that are interesting and unique.',
        id: uuidv4()
    }
];

export { ClassLevels }