import { getFormatDateNow } from "../../helpers/date";

const dataInitialState = [
    {
        title:'default todo list',
        id: 1,
        todos: [
            {
                title: 'string',
                id: 1,
                listId: 1,
                completed: false,
                important: null,
                deadlineDate: '22 22 22',
                createDate: getFormatDateNow(),
                note: 'string'
            }
        ]
    }
];

export default dataInitialState; 
