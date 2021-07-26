const COMPANY_SERVICE_URL = 'http://localhost:8084/api/v1.0/market';

export const getCompany = async (code) => {
    const url = `http://localhost:8081/api/v1.0/market/company/info/${code}`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        
            return data;
    } catch (e) {
        console.log(e);
    }
    return {};
}

export const getAllCompany = async () => {
    const url = "http://localhost:8081/api/v1.0/market/company/getall";
    try {
        const response = await fetch(url);
        const data = await response.json();
        if (data.status === 200)
        console.log(data);
            return data;
    } catch (e) {
        console.log(e);
    }
    return [];
}
export const getStockDetailsByCode=async(companyCode)=>{
    const url=`${COMPANY_SERVICE_URL}/stock/getStock/${companyCode}`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        if (data.status === 200)
            return data;
    } catch (e) {
        console.log(e);
    }
    return {};

}
export const getStockDetailsByDate=async(companyCode,startDate,endDate)=>{
    const url=`${COMPANY_SERVICE_URL}/stock/get/${companyCode}/${startDate}/${endDate}`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        
            return data;
    } catch (e) {
        console.log(e);
    }
    return {};

}