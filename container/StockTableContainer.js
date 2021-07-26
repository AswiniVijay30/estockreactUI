import moment from 'moment';

function StockTableContainer(props){
   
     const { stockDetails} = props;
     console.log(stockDetails); 
    return <div className="container"><table className='table table-bordered border border-dark table-hover w-100 p-3'>
    <thead>
        <tr>
            <th className="bg-primary"scope="col">Stock ID</th>
            <th className="bg-primary" scope="col">Stock Price</th>
            <th className="bg-primary" scope="col">Date and Time</th>
            
        </tr>
    </thead>
    <tbody>
        {stockDetails&& stockDetails.data&& stockDetails.data.stockDetails.map(stock=>
        <tr> <th>{stock.id}</th>
            <th>{stock.stockprice}</th>
        <th>{moment(stock.createdDate).format("dddd, MMM DD at HH:mm")}</th>
        </tr>)}
    </tbody>
    </table>
   
    <div className="row">
    <div className="col-sm-4"></div>
    <div className="col-sm-4">
    <table className='table table-bordered border border-dark table-hover w-25 p-3 '>
                            <tbody>
                               <tr><th className="table-info" scope="row">Average</th><th  className="table-info">{stockDetails&& stockDetails.data&&stockDetails.data.averageStock}</th></tr>
                               <tr><th className="table-info"scope="row">Minimum</th><th  className="table-info">{stockDetails&& stockDetails.data&&stockDetails.data.minimumStock}</th></tr>
                               <tr><th className="table-info"scope="row">Maximum</th><th  className="table-info">{stockDetails&& stockDetails.data&&stockDetails.data.maximumStock}</th></tr>
                            </tbody>
                        </table>
                        </div>
                        <div className="col-sm-4"></div>
                        </div>
                        
   
    </div>
    
    }
    export default StockTableContainer
