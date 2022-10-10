import React, { useContext, useState } from "react";
import "./Categorypage.css";
import SideBar from "../../layouts/sidebar/SideBar";
import keyImg from "../../assets/images/key_img.png";
import whiteArrow from "../../assets/images/whiteright.png";
import CarsCards from "../../components/carsCard/CarsCards";

import right from "../../assets/images/right.png";
import heartfil from "../../assets/images/fill--heart.png";
import heartnotfil from "../../assets/images/outline--hear.png";
import car1 from "../../assets/images/car1.png";
import car2 from "../../assets/images/car2.png";
import car3 from "../../assets/images/car3.png";
import car4 from "../../assets/images/car4.png";
import car5 from "../../assets/images/car5.png";
import car6 from "../../assets/images/car6.png";
import car7 from "../../assets/images/car7.png";
import car8 from "../../assets/images/car8.png";
import car9 from "../../assets/images/car9.png";
import car10 from "../../assets/images/car9.png";
import map from "../../assets/images/mappin.png";

import Slider from "react-slick";
import { provideContent } from "../../context/reducer/rootReducer";
const Categorypage = () => {
  const [list, setlist] = useState([
    {
      carImage: car1,
      cardName: "Q5 DESIGN LMTD ידואא",
      location: "נשר",
      heartFil: heartnotfil,
    },
    {
      carImage: car2,
      cardName: "TREND סוקופ דרופ",
      location: "נשר",
      heartFil: heartnotfil,
    },
    {
      carImage: car3,
      cardName: "PRIME PLUS ןוסוט יאדנוי",
      location: "נשר",
      heartFil: heartnotfil,
    },
    {
      carImage: car4,
      cardName: "AMBITION היבטקוא הדוקס",
      location: "נשר",
      heartFil: heartnotfil,
    },
    {
      carImage: car5,
      cardName: "LT קראפס טלורבש",
      location: "נשר",
      heartFil: heartfil,
    },
    {
      carImage: car6,
      cardName: "530E LINE 5 הרדס וו.מ.ב",
      location: "נשר",
      heartFil: heartfil,
    },
    {
      carImage: car7,
      cardName: "CX-5 LUXURY הדזאמ",
      location: "נשר",
      heartFil: heartfil,
    },
    {
      carImage: car8,
      cardName: "INTENSE רו'צפק ונר",
      location: "נשר",
      heartFil: heartfil,
    },
    {
      carImage: car9,
      cardName: "SPORT 3 הדזאמ",
      location: "נשר",
      heartFil: heartfil,
    },
    {
      carImage: car9,
      cardName: "SPORT 3 הדזאמ",
      location: "נשר",
      heartFil: heartfil,
    },
  ]);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  const values = useContext(provideContent);
  const hanldeOpenSidebar = (id) => {
    values.dispatch({
      type: "SIDEBARTOGGLE",
    });
    console.log(id);
  };

  const _hanldeChange = () => {};
  return (
    <div className={"Categorypage--page"}>
      <div className={"categy--page--sidebar--slide"}>
        <div className="categ--heroo">
          <div className="container-fluid p-0">
            <div className="row">
              <div className="col-12">
                <div className="gensil_sec d-flex justify-content-between">
                  <div className="right_section d-flex align-items-center">
                    <h3>הרזח</h3>{" "}
                    <img src={right} alt="right icon" className="blue" />
                    <img src={whiteArrow} alt="" className="white" />
                  </div>
                  <div className="key_section d-flex align-items-center">
                    {" "}
                    <h3>רתאב םישדח</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="category--listing">
          <div className="container-fluid">
            <div className="row">
              <div className="col overflow-hidden position-relative">
                <div
                  className={
                    "listin--item--wrapper d-flex justify-content-between"
                  }
                >
                  {list.slice(0, 4).map((element, index) => {
                    return (
                      <div
                        className="card_wrapper"
                        key={index}
                        
                      >
                        <div className="card--cars--slider--dection">
                          <span className="card--favourite--icon">
                            <img src={element.heartFil} alt="" /> אסור לפספס
                          </span>
                          <Slider {...settings}>
                            <div className="carImages">
                              <img src={element.carImage} alt="img" />
                            </div>
                            <div className="carImages">
                              <img src={element.carImage} alt="img" />
                            </div>
                            <div className="carImages">
                              <img src={element.carImage} alt="img" />
                            </div>
                            <div className="carImages">
                              <img src={element.carImage} alt="img" />
                            </div>
                          </Slider>
                        </div>
                        <div className="below_section">
                          <div className="name_section">
                            <h4>{element.cardName}</h4>
                            <p>
                              {element.location}{" "}
                              <img src={map} alt="map icon" />{" "}
                            </p>
                          </div>
                          <div className="detail d-flex justify-content-end">
                            <div className="left_detail">
                              <h6>תוספות לעיסקה:</h6>
                              <ul>
                                <li className="bullets-left">
                                  התחייבות לבדיקת גיר
                                </li>
                                <li className="bullets-left">מנוע ושילדה</li>
                                <li className="bullets-left">אחריות יצרן</li>
                              </ul>
                            </div>
                            <div className="right_detail">
                              <h6>הצעה למימון</h6>
                              <p>החל מהחזר חודשי</p>
                              <p>
                                של:<span> 300 ש״ח </span>
                              </p>
                            </div>
                          </div>
                          <div className="varient_model d-flex justify-content-between">
                            <div className="first_item">
                              <h5>ת.הילוכים</h5>
                              <p>אוטומטי</p>
                            </div>
                            <div className="second_item">
                              <h5>יד</h5>
                              <p>2</p>
                            </div>
                            <div className="third_item">
                              <h5>ק״מ</h5>
                              <p>3,000</p>
                            </div>
                            <div className="fourth_item">
                              <h5>שנת יצור</h5>
                              <p>2022</p>
                            </div>
                          </div>

                          <button
                            className="card_button"
                            onClick={() => hanldeOpenSidebar(index + 1)}
                          >
                            יצירת קשר
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <h3 className="cate---price--title">רכבים עד ₪50,000</h3>
              </div>
            </div>
            <div className="row">
              <div className="listin--item--wrapper d-flex justify-content-between">
                {list.slice(4, 8).map((element, index) => {
                  return (
                    <div
                      className="card_wrapper"
                      key={index}
                      style={{
                        width: "24%",
                      }}
                    >
                      <div className="card--cars--slider--dection">
                        <span className="card--favourite--icon">
                          <img src={element.heartFil} alt="" /> אסור לפספס
                        </span>
                        <Slider {...settings}>
                          <div className="carImages">
                            <img src={element.carImage} alt="img" />
                          </div>
                          <div className="carImages">
                            <img src={element.carImage} alt="img" />
                          </div>
                          <div className="carImages">
                            <img src={element.carImage} alt="img" />
                          </div>
                          <div className="carImages">
                            <img src={element.carImage} alt="img" />
                          </div>
                        </Slider>
                      </div>
                      <div className="below_section">
                        <div className="name_section">
                          <h4>{element.cardName}</h4>
                          <p>
                            {element.location} <img src={map} alt="map icon" />{" "}
                          </p>
                        </div>
                        <div className="detail d-flex justify-content-end">
                          <div className="left_detail">
                            <h6>תוספות לעיסקה:</h6>
                            <ul>
                              <li className="bullets-left">
                                התחייבות לבדיקת גיר
                              </li>
                              <li className="bullets-left">מנוע ושילדה</li>
                              <li className="bullets-left">אחריות יצרן</li>
                            </ul>
                          </div>
                          <div className="right_detail">
                            <h6>הצעה למימון</h6>
                            <p>החל מהחזר חודשי</p>
                            <p>
                              של:<span> 300 ש״ח </span>
                            </p>
                          </div>
                        </div>
                        <div className="varient_model d-flex justify-content-between">
                          <div className="first_item">
                            <h5>ת.הילוכים</h5>
                            <p>אוטומטי</p>
                          </div>
                          <div className="second_item">
                            <h5>יד</h5>
                            <p>2</p>
                          </div>
                          <div className="third_item">
                            <h5>ק״מ</h5>
                            <p>3,000</p>
                          </div>
                          <div className="fourth_item">
                            <h5>שנת יצור</h5>
                            <p>2022</p>
                          </div>
                        </div>
                        <button
                          className="card_button"
                          onClick={() => hanldeOpenSidebar(index + 1)}
                        >
                          יצירת קשר
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <SideBar />
    </div>
  );
};

export default Categorypage;
