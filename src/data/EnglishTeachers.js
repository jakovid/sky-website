import marioPic from '../images/english-teachers/mario.webp';
import andrewPic from '../images/english-teachers/andrew.webp';
import jacobPic from '../images/english-teachers/jacob.webp';
import emilyPic from '../images/english-teachers/emily.webp';
import markPic from '../images/english-teachers/mark.webp';
import samPic from '../images/english-teachers/sam.webp';
import usaFlag from '../images/english-teachers/usaFlag.webp';
import canadaFlag from '../images/english-teachers/canadaFlag.webp';
import ukFlag from '../images/english-teachers/ukFlag.webp';
import { v4 as uuidv4 } from 'uuid';

let EnglishTeachers = [
    {
        name: 'Mario',
        flag: canadaFlag,
        picture: marioPic,
        bio: 'Mario has worked as an English teacher in Taiwan for 25 years and been teaching and running Sky Education for 14 years.',
        id: uuidv4()
    },
    {
        name: 'Andrew',
        flag: canadaFlag,
        picture: andrewPic,
        bio: 'Andrew has worked as an English teacher in Taipei for about 4 years, and has been at Sky Education for more than 3 years.',
        id: uuidv4()
    },
    {
        name: 'Jacob',
        flag: usaFlag,
        picture: jacobPic,
        bio: 'Jacob has worked as an English teacher for 7 years, starting in Shanghai, China before coming to Sky Education 3 years ago.',
        id: uuidv4()
    },
    {
        name: 'Emily',
        flag: ukFlag,
        picture: emilyPic,
        bio: 'Emily is from the United Kingdom and has been teaching for more than 2 years in South Korea and China. She is new to Taiwan and also new to Sky.',
        id: uuidv4()
    },
    {
        name: 'Mark',
        flag: canadaFlag,
        picture: markPic,
        bio: 'Mark has worked as an English teacher and computer programmer in Taiwan for more than 4 years. He was born in Vancouver and new to Sky.',
        id: uuidv4()
    },
    {
        name: 'Sam',
        flag: usaFlag,
        picture: samPic,
        bio: 'Sam has worked as an English teacher and comedian for nearly 8 years, starting in South Korea before coming to Sky Education 5 years ago.',
        id: uuidv4()
    }
];

export { EnglishTeachers };