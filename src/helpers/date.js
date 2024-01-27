const weekDays = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

const getFormatDateNow = () => {
    const now = new Date();
    const weekDay = weekDays[ now.getDay() ];
    const monthDay = now.getDate();
    const month = months[ now.getMonth() ];
    return `${weekDay} ${monthDay} ${month}`
}

export {
    getFormatDateNow
}



