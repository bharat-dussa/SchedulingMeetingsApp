import React,{useState} from "react";
import DatePicker from "react-datepicker";
import setMinutes from "date-fns/setMinutes";
import setHours from "date-fns/setHours";
// import getDay from "date-fns/getDate";
import subDays from "date-fns/subDays";
import addDays from "date-fns/addDays";


// import bodyparser from 'body-parser';




const Datepicker = () => {

  const [startDate, setStartDate] = useState(
    setHours(setMinutes(new Date(), 30), 16)
  );
  // const isWeekday = date => {
  //   const day = getDay(date);
  //   return day!==0 && day!==6;
  // };
  let handleColor = time => {
    return time.getHours() > 12 ? "text-success" : "text-error";
  };


  return (
    <div>
      <DatePicker
        className="col  form-control"
        
        placeholderText="Please book a slot"
        isClearable
        // filterDate={isWeekday}
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        showTimeSelect
        required="required"
        //handle color of time
        timeClassName={handleColor}
        dateFormat="MMMM d, yyyy h:mm aa"
        // excludeDates={[new Date(), subDays(new Date(), 5)]}
        // includeDates={[new Date(), addDays(new Date(), 1)]}
        minDate={subDays(new Date(), 0)}
        maxDate={addDays(new Date(), 6)}
        // withPortal


        //Time
        timeIntervals={60}
        // showWeekNumbers
      />
    {/* {startDate} */}
    </div>
  );
};

export default Datepicker;
