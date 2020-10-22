let personArray = [
    {
        id: 1,
        name: 'anil',
        age: 20
    },
    {
        id: 2,
        name: 'sunil',
        age: 30
    },
    {
        id: 3,
        name: 'joy',
        age: 40
    }
];

export const getPersonList = (updatedPersonList) => {
    if (updatedPersonList !== null && updatedPersonList !== undefined) {
        personArray = updatedPersonList;
    }
    return personArray;
}