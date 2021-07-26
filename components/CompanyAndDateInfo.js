import React, { Component } from 'react'
import StockTableContainer from '../container/StockTableContainer';
import { getStockDetailsByDate,getStockDetailsByCode} from '../services/StockService';


class CompanyAndDateInfo extends Component {
    constructor(props) {
      super(props);
        this.state =
        {
            startDate:'',
             endDate:'',
             stockDetails:{}
        };
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

      handleChange(event) {
        console.log(event.target.value);
        this.setState({ ...this.state, [event.target.name]: event.target.value })
    
      }
      handleSubmit = () => {
       getStockDetailsByDate(this.props.companyCode,this.state.startDate,this.state.endDate).then(res => {
        console.log("response stock =>"+JSON.stringify(res));
        console.log(this.state);
          this.setState({...this.state, stockDetails:res});
          console.log(this.state);
        }
        );
    }
      
    render() {
        return (
            <div className="container">
                <div className="row">
                <div className="w-50 p-3 h3"><b>Company Code:</b></div>
                <div className="w-50 p-3 h3" name="companyCode"><b>{this.props.companyCode}</b></div>
                </div>
                <div className="row">
                <div className="w-50 p-3 h3"><b>Company Name:</b></div>
                <div className="w-50 p-3 h3" name="companyName"><b>{this.props.companyName}</b></div>
                </div>
               
                <div className="row">
                <div className="col-sm">
                <label htmlFor="startDate" className="h4">From:</label>
                        <br />
                        <input className="form-control w-50"
                          name="startDate"
                          value={this.state.startDate}
                          onChange={this.handleChange}
                          type="date"
                          /> 
                          </div>
                          <div className="col-sm">
                <label htmlFor="endDate" className="h4">To:</label>
                        <br />
                        <input className="form-control w-50"
                          name="endDate"
                          value={this.state.endDate}
                          onChange={this.handleChange}
                          type="date"
                          /> 
                          </div>
                          </div>
                          <br/>
                        
                          <div className="row">
                          <div className="col-sm"></div>
                          <div className="col-sm">
                          <button className="btn btn-primary btn-sm w-25 form-control float-right" variant="outline-light" onClick={this.handleSubmit}>Submit</button>
                          </div>
                          </div>
                          <br/>
                {this.state.stockDetails && this.state.stockDetails.data ? 
                <StockTableContainer stockDetails={this.state.stockDetails}/>
                : ' '}
            </div>
           
          
        )
    }
}

export default CompanyAndDateInfo;
