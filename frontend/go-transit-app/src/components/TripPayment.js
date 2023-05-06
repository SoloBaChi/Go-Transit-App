import '../styles/tp.css';
import money from '../images/naira.png';
import flut from '../images/flutter.png';
import pay from '../images/paystack.png';



export default function App() {
  return (
    <div className="container">

      <div className="tripBody">
        <div className="body">
          
          <div className="title">
            <h3>Trip Payment</h3>
          </div>
    
          <div className="subtitle">
            <h5>You are about to fund this app</h5>
          </div>
    
          <div className="amt">
            <img src={money} height="11px" width="10px" color="white" />
            <h4>15,600.00</h4>
          </div>
    
          <div className="subtit">
            <h5>Selecting any of the payment method will redirect you to their </h5>

            <div className="sub">
              <h5>payment platform.</h5>
            </div>
          </div>
    
        </div>
  
        <div className="payment">
          <div className="pay">
            <img src={flut} height="30px" width="200px"/>
    
            <div className="check">
              <input type="checkbox" id="myCheckbox" required/>
              <label for="myCheckbox"></label>
            </div>
          </div>
  
          <div className="pay">
            <img src={pay} height="30px" width="200px" />
    
            <div className="check">
              <input type="checkbox" id="miCheckbox" required/>
              <label for="miCheckbox"></label>
            </div>
          </div>
          
        </div>
        
      </div>
      
      
      
    </div>
  )
}
