import { v4 as uuidv4 } from 'uuid';

let ClassTimes = [
    {
        days: 'Monday & Thursday',
        start: '1:15 pm',
        end: '3:45 pm',
        id: uuidv4()
    },
    {
        days: 'Wedneday & Friday',
        start: '1:15 pm',
        end: '3:45 pm',
        id: uuidv4()
    },
    {
        days: 'Monday & Thursday',
        start: '4:40 pm',
        end: '7:10 pm',
        id: uuidv4()
    },
    {
        days: 'Wedneday & Friday',
        start: '4:40 pm',
        end: '7:10 pm',
        id: uuidv4()
    }
];

let SemesterTimes = [
    {
        name: 'Spring Semeseter',
        start: 'February',
        end: 'June',
        id: uuidv4()
    },
    {
        name: 'Fall Semeseter',
        start: 'September',
        end: 'January',
        id: uuidv4()
    }
]

export { ClassTimes, SemesterTimes };