import wilmaPic from "../images/taiwan-teachers/wilma.webp";
import amyPic from "../images/taiwan-teachers/amy.webp";
import viviPic from "../images/taiwan-teachers/vivi.webp";
import alizaPic from "../images/taiwan-teachers/aliza.webp";
import lunaPic from "../images/taiwan-teachers/luna.webp";
import tinaPic from "../images/taiwan-teachers/tina.webp";
import meijiaPic from '../images/taiwan-teachers/meijia.webp';
import { v4 as uuidv4 } from 'uuid';

let TaiwanTeachers = [
    {
        name: 'Wilma',
        picture: wilmaPic,
        id: uuidv4()
    },
    {
        name: 'Amy',
        picture: amyPic,
        id: uuidv4()
    },
    {
        name: 'Vivi',
        picture: viviPic,
        id: uuidv4()
    },
    {
        name: 'Aliza',
        picture: alizaPic,
        id: uuidv4()
    },
    {
        name: 'Luna',
        picture: lunaPic,
        id: uuidv4()
    },
    {
        name: 'Tina',
        picture: tinaPic,
        id: uuidv4()
    },
    {
        name: 'Mei-Jia',
        picture: meijiaPic,
        id: uuidv4()
    },
    {
        name: 'Irene',
        picture: null,
        id: uuidv4()
    }
];

export { TaiwanTeachers };