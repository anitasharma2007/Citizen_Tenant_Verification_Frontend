export class AddTenantVerificationRequestDTO {

    "stateCd": 19;
    "districtCd": number;
    "psCd": number;
    "applicantNum": 82300000001;
    "srTypeCd": 6;
    "personInfoDTOList" : PersonInfoDTO[] = [];
}

export class PersonInfoDTO{
    "stateCd": 19;
    "districtCd": number;
    "psId": number;
    "regYear": 2023;
    "personTypeCd": 8;
    "firstName": string;
    "personType" : number;
    "addressDTOList" : AddressDTO[] = [];
}

export class AddressDTO{
    "addrType": number;
    "districtCd": number;
    "addressType": string;
    "addressLine1": string;
}
