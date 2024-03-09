const axios = require('axios');
const formData = require('./form-data.json');

const getFormDetails = async (req, res) => {
    // axios.get('https://api.fillout.com/v1/api/forms/cLZojxk94ous', { headers: { 'Authorization': 'Bearer sk_prod_TfMbARhdgues5AuIosvvdAC9WsA5kXiZlW8HZPaRDlIbCpSpLsXBeZO7dCVZQwHAY3P4VSBPiiC33poZ1tdUj2ljOzdTCCOSpUZ_3912' } }) 
    // .then(response => {
    //     console.log(`Response status =============${response.status}`);
    //     console.log(`Response =============${response.statusCode}`);
    //     if(response && response.status === 200) {
    //         res.status(200).json(response);
    //     }
    // })[]
    // .catch(err => {
    //     console.log(err);
    // })
    const { filterParam } = req.query;
    let filteredData = formData;
    if (filterParam) {
        if(formData && formData.responses) {
            filteredData = formData.responses.map(ele => ({
                ...ele,
                questions: ele.questions.filter(item => item.value.toLowerCase().indexOf(filterParam.toLowerCase()) > -1),
                calculations: ele.calculations.filter(item => item.value.toLowerCase().indexOf(filterParam.toLowerCase()) > -1),
                urlParameters: ele.urlParameters.filter(item => item.value.toLowerCase().indexOf(filterParam.toLowerCase()) > -1),
            }));
        }
        res.status(200).json(filteredData);
    } else {
        res.status(200).json(filteredData);
    }
}

const getRawFormDetails = async (req, res) => {
    axios.get('https://api.fillout.com/v1/api/forms/cLZojxk94ous', { headers: { 'Authorization': 'Bearer sk_prod_TfMbARhdgues5AuIosvvdAC9WsA5kXiZlW8HZPaRDlIbCpSpLsXBeZO7dCVZQwHAY3P4VSBPiiC33poZ1tdUj2ljOzdTCCOSpUZ_3912' } }) 
    .then(response => {
        res.status(200).json(response);
    })
    .catch(err => {
        console.log(err);
    })
}

module.exports = { getFormDetails, getRawFormDetails };

