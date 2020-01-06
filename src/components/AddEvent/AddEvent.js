import React from 'react';
import './AddEvent.css';
import EventsApiService from '../../services/events-api-service';
import moment from 'moment';
import ContextManager from '../../context/context-manager';

export default class AddEvent extends React.Component{
    static contextType = ContextManager;

    addLeadingZero = (number) => {
        return number < 10 ? `0${number}` : number;
    }

    isLeapYear = (year)  => {
        if(year % 4 === 0 && (year % 400 === 0 || year % 100 !== 0)){
            return true;
        } else {
            return false;
        }
    }
    
    isValidDate = (month, day, year) => {
        let isValid = null;
        const validThirtyOneDays = ['January', 'March', 'May', 'July', 'August', 'October', 'December'];
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

        if(months.includes(month) && day <= 30){
            isValid = true;
        }
        
        if(day === 31){
            isValid = validThirtyOneDays.includes(month);
        }

        if(month === 'February' && day === 29){
            isValid = this.isLeapYear(year);
        } else if (month === 'February' && day > 28){
            isValid = false;
        }

        return isValid;
    }

    handleFormSubmit = e => {
        e.preventDefault();
        const { title, restaurant, restaurantAddress, eventDescription, month, day, year, hour, minute, meridiem, purpose } = e.target;
        const event_date = `${month.value}/${parseInt(day.value)}/${parseInt(year.value)} ${this.addLeadingZero(parseInt(hour.value))}:${this.addLeadingZero(parseInt(minute.value))} ${meridiem.value}`;

        const isDate = this.isValidDate(month.value, parseInt(day.value), parseInt(year.value));

        const newEvent = {
            title: title.value,
            event_purpose: purpose.value,
            restaurant: restaurant.value,
            address : restaurantAddress.value,
            date : moment(event_date).format('MM/DD/YYYY'),
            time : moment(event_date).format('hh:mm A'),
            description : eventDescription.value,
        }

        if(purpose.value.toLowerCase().includes('singles')){
            newEvent.singles_only = true;
        } else {
            newEvent.singles_only = false;
        }

        if(isDate){
            EventsApiService.postEvent(newEvent)
            .then((event) => {
                this.context.clearErrorMessage();
                this.context.getAllEventsForUser();
                this.props.history.push('/dashboard');
            })        
            .catch(res => {
                this.context.updateErrorMessage('Oops: '+ res.error);
                this.context.scrollToErrorMessage();
            })
        } else {
            this.context.updateErrorMessage('Oops: Invalid Date');
            this.context.scrollToErrorMessage();
        }
    }

    dateInputCreator = () => {
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

        const days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

        const currentYear = new Date().getFullYear();        
        const years = [currentYear, currentYear + 1]

        const hours = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

        const minutes = [ '00', 15, 30, 45 ];

        const meridiems = ['AM', 'PM'];

        const monthOptions = months.map((month, i) => {
                return <option key={i} value={month}>{month}</option>
            })

        const dayOptions = days.map((day, i) => {
            return <option key={i} value={day}>{day}</option>
        })

        const yearOptions = years.map((year, i) => {
            return <option key={i} value={year}>{year}</option>
        })

        const hoursOptions = hours.map((hour, i) => {
            return <option key={i} value={hour}>{hour}</option>
        })

        const minutesOptions = minutes.map((minute, i) => {
            return <option key={i} value={minute}>{minute}</option>
        })

        const meridiemOptions = meridiems.map((meridiem, i) => {
            return <option key={i} value={meridiem}>{meridiem}</option>
        })

        return (
            <>
                <div className="event-date">
                    <label>Date:</label>
                    <select className="date-month" name="month" required>
                    <option value="None">Select Month:</option>
                        {monthOptions}
                    </select>
                    <select className="date-day" name="day" required>
                    <option value="None">Select Day:</option>
                        {dayOptions}
                    </select>
                    <select className="date-year" name="year" required>
                    <option value="None">Select Year:</option>
                        {yearOptions}
                    </select>
                </div>
                <div className="event-time">
                    <label>Time:</label>
                    <select className="time-hour" name="hour" required>{hoursOptions}</select>
                    <select className="time-minute" name="minute" required>{minutesOptions}</select>
                    <select className="time-meridiem" name="meridiem" required>{meridiemOptions}</select>
                </div>
            </>
        )
    }

    render(){
        return(
            <form onSubmit={this.handleFormSubmit} id="add-event-form">
                <div className="error-message">{!!this.context.errorMessage && this.context.errorMessage}</div>
                <div className="info"><p>Please note: Once your event is created, you will only have the ability to update the title and description.</p></div>
                <div>
                    <label htmlFor="title">Title:</label>
                    <input type="text" id="title" placeholder="ex. Wine &amp; Networking" name="title"  required  />
                </div>
                <div>
                    <label htmlFor="restaurant">Restaurant:</label>
                    <input type="text" id="restaurant" placeholder="ex. Water Grill" name="restaurant"  required  />
                </div>
                <div>
                    <label htmlFor="restaurant-address">Restaurant Address:</label>
                    <input type="text" id="restaurant-address" placeholder="ex. 123 Restaurant Lane" name="restaurantAddress"  required  />
                </div>
                <div>
                    <label htmlFor="event-description">Description:</label>
                    <textarea id="event-description" placeholder="ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam iaculis finibus orci, vel auctor dolor vulputate vitae. In fringilla tristique dui vitae blandit." name="eventDescription"  required >
                    </textarea>
                </div>
                <div>
                    {this.dateInputCreator()}
                </div>
                <div>
                    <label htmlFor="purpose">Purpose:</label>
                    <select id="purpose" name="purpose"  required >
                        <option value="Social">Social</option>
                        <option value="Networking">Networking</option>
                        <option value="Game Night">Game Night</option>
                        <option value="Singles Night">Singles Night</option>
                    </select>
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>    
            </form>
        );
    }
}