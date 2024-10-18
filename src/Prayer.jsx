import React, { useEffect, useState } from 'react'
import pic from "./imgs/bg.jpg"
import fajr from './imgs/fajr.png'
import duhr from './imgs/dhuhr.png'
import axios from 'axios';
export default function Prayer() {
  const [city, setCity] = useState("cairo");
  const [time, setTime] = useState();
  const [date, setDate] = useState();


  async function getCity(date, adress) {
    let res = await axios.get(`https://api.aladhan.com/v1/timingsByAddress/${date}?address=${adress}`);
    let result = res.data.data.timings;
    console.log(res);
    setTime(res?.data.data.timings);
    setDate(res.data.data.date.gregorian.date);




  }
  useEffect(() => {
    getCity(date, city);


  }, [date, city])
  return (
    <>
      <section>

        <div className="container">
          <div className="data-top">
            <div className="city">
              <h3>المدينه</h3>
              <select name="" id="" onChange={(e) => setCity(e.target.value)}>
                <option value="cairo">cairo</option>
                <option value="dubai">Dubai</option>
                <option value="america">America</option>
              </select>
            </div>
            <div className="date">
              <h3>التاريخ</h3>
              <p>{date}</p>
            </div>
          </div>



          <div className="bottom">
            <div className="totall">
              <div className="img"><img src={fajr} />
                <p className='name'>{time?.Fajr}</p>
                <p className='names'>الفجر</p>

              </div>
            </div>
            <div className="totall">
              <div className="img"><img src={fajr} />
                <p className='name'>{time?.Sunrise}</p>
                <p className='names'>الشروق</p>
              </div>
            </div>

            <div className="totall">
              <div className="img"><img src={fajr} />
                <p className='name'>{time?.Dhuhr}</p>
                <p className='names'>الظهر</p>
              </div>
            </div>
            <div className="totall">
              <div className="img"><img src={fajr} />
                <p className='name'>{time?.Asr}</p>
                <p className='names'>العصر</p>

              </div>
            </div>
            <div className="totall">
              <div className="img"><img src={fajr} />
                <p className='name'>{time?.Maghrib}</p>
                <p className='names'>المغرب</p>
              </div>
            </div>
            <div className="totall">
              <div className="img"><img src={fajr} />
                <p className='name'>{time?.Isha}</p>
                <p className='names'>العشاء</p>
              </div>
            </div>



          </div>








        </div>
      </section >
    </>


  )
}
