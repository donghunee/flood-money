import React from 'react';
import './dash.css';
import { Button } from 'react-bootstrap';


class Dash extends React.Component {

  render() {

    return(
      <div className="dash-wrap">
        <div className="dash-item">
          <div className="day">
            01.23<br />
            <span style={{color:"gray" ,fontWeight:100}}>12:35</span>
          </div>
          <div className="dash-content">
            <span className="dash-title">1인분 장보기 (고기)1인분 장보기 (고기)1인분 장보기 (고기)1인분 장보기 (고기)</span><br />
            <span className="dash-money" style={{fontSize:19}}>- 12,000원</span>
          </div>
          <div className="close-wrap">
           <i style={{fontSize:25}} className="icon close ion-md-close"></i>
          </div>
        </div>
        <div className="dash-item">
          <div className="day">
            01.23<br />
            <span style={{color:"gray" ,fontWeight:100}}>12:35</span>
          </div>
          <div className="dash-content">
            <span className="dash-title">전체 회비 모음</span><br />
            <span style={{fontSize:19, color:"blue"}}>+ 12,000원</span>
          </div>
          <div className="close-wrap">
           <i style={{fontSize:25}} className="icon close ion-md-close"></i>
          </div>
        </div>
        <div className="dash-item">
          <div className="day">
            01.23<br />
            <span style={{color:"gray" ,fontWeight:100}}>12:35</span>
          </div>
          <div className="dash-content">
            <span className="dash-title">1인분 장보기 (고기)1인분 장보기 (고기)1인분 장보기 (고기)1인분 장보기 (고기)</span><br />
            <span style={{fontSize:19}}>- 12,000원</span>
          </div>
          <div className="close-wrap">
           <i style={{fontSize:25}} className="icon close ion-md-close"></i>
          </div>
        </div>
      </div>
    )
  }
}

export default Dash;
