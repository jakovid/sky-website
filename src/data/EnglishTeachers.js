import marioPic from '../../../images/english-teachers/mario.webp';
import andrewPic from '../../../images/english-teachers/andrew.webp';
import jacobPic from '../../../images/english-teachers/jacob.webp';
import emilyPic from '../../../images/english-teachers/emily.webp';
import markPic from '../../../images/english-teachers/mark.webp';
import samPic from '../../../images/english-teachers/sam.webp';
import usaFlag from '../../../images/english-teachers/usaFlag.webp';
import canadaFlag from '../../../images/english-teachers/canadaFlag.webp';
import ukFlag from '../../../images/english-teachers/ukFlag.webp';
import { v4 as uuidv4 } from 'uuid';

let EnglishTeachers = [
    {
        name: 'Mario',
        flag: canadaFlag,
        picture: marioPic,
        description: 'hi',
        id: uuidv4()
    },
    {
        name: 'Andrew',
        flag: canadaFlag,
        picture: andrewPic,
        description: 'hi',
        id: uuidv4()
    },
    {
        name: 'Jacob',
        flag: usaFlag,
        picture: jacobPic,
        description: 'hi',
        id: uuidv4()
    },
    {
        name: 'Emily',
        flag: ukFlag,
        picture: emilyPic,
        description: 'hi',
        id: uuidv4()
    },
    {
        name: 'Mark',
        flag: canadaFlag,
        picture: markPic,
        description: 'hi',
        id: uuidv4()
    },
    {
        name: 'Sam',
        flag: usaFlag,
        picture: samPic,
        description: 'hi',
        id: uuidv4()
    }
];

export { EnglishTeachers };