import { format, addMinutes as fnsAddMinutes, differenceInMinutes, getDay } from 'date-fns';
import { toZonedTime } from 'date-fns-tz';
const DUBAI_TZ = 'Asia/Dubai';
export const getDubaiTime = () => {
    return toZonedTime(new Date(), DUBAI_TZ);
};
export const formatTime = (date) => {
    if (!date || isNaN(date.getTime()))
        return '--:-- --';
    return format(date, 'h:mm aa');
};
export const formatTime24 = (date) => {
    if (!date || isNaN(date.getTime()))
        return '--:--';
    return format(date, 'HH:mm');
};
export const getMinutesFromNow = (futureTime, currentTime) => {
    if (!futureTime || !currentTime)
        return 0;
    return differenceInMinutes(futureTime, currentTime);
};
export const isWithinServiceHours = (schedule, currentTime) => {
    return true;
};
export const isWeekendInDubai = (currentTime) => {
    const day = getDay(currentTime);
    return day === 5 || day === 6; //friday or staruday 
};
export const addMinutes = (date, minutes) => {
    if (!date || isNaN(date.getTime()) || isNaN(minutes))
        return new Date();
    return fnsAddMinutes(date, Math.round(minutes));
};
//# sourceMappingURL=timeHelper.js.map