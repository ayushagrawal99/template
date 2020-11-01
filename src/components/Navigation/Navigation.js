import React,{Component} from 'react';
import './Navigation.css';
import img from '../../assets/Images/a.jpg';

const navigation = (props) => {
    return(
        <div className="Navigation">
            <div className="Picture">
                <img src={img} alt="LOGO" />
            </div>
            <div style={{backgroundColor : "rgb(40,40,40)"}}>
                <ul className="BigItem">
                    <li className="BigListItem"><a href="#">Kard</a></li>
                    <li className="BigListItem"><a href="#">Kardless</a></li>
                    <li className="BigListItem"><a href="#">Security</a></li>
                    <li className="BigListItem"><a href="#">rewards</a></li>
                    <li className="BigListItem active"><a href="#">get the app</a></li>
                </ul>
                <div className="SmallScreenDiv">
                    <div>
                        <i className="fa fa-reorder big_screen"></i>
                    </div>
                    <div className="ItemDiv">
                        <ul className="Lists">
                            <li className="Items"><a href="#">Kard</a></li>
                            <li className="Items"><a href="#">Kardless</a></li>
                            <li className="Items"><a href="#">Security</a></li>
                            <li className="Items"><a href="#">rewards</a></li>
                            <li className="Items"><a className="active" href="#">get the app</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default navigation;