function addParamsToRequest(params){
    let count = 0;
    return function (data) {
        return {
            ...params,
            ...data,
            count: count++,
        }
    }
}

const sendData = addParamsToRequest({'access-token': 'qwerty'});
const result = sendData({'data': '123', 'otherData': '12345'});
console.log(result);
const otherResult = sendData({'data': 'someData', 'otherData': 'someOtherData'});
console.log(otherResult);
const sendOtherData = addParamsToRequest({'access-token': '12345', 'user-id': '123'});
const otherDataResult = sendOtherData({'data': 'someData', 'otherData': 'someOtherData'});
console.log(otherDataResult);