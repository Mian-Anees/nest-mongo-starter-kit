export enum ResponseCode {
    CREATED_SUCCESSFULLY = 201,
    SUCCESS = 200,
    CONTENT_NOT_FOUND = 204,
    NOT_FOUND = 404,
    BAD_REQUEST = 400,
    UN_AUTHORIZED = 401,
    FORBIDDEN_RESOURCE = 403
}

export enum ResponseMessage {
    CREATED_SUCCESSFULLY = "Created Successfully!",
    SUCCESS = "Success",
    CONTENT_NOT_FOUND = "Content Not Found",
    NOT_FOUND = "Not Found",
    BAD_REQUEST = "Bad Request",
    UN_AUTHORIZED = "Un-Authorized",
    FORBIDDEN_RESOURCE = "Forbidden Resource"
}

export enum Gender {
    MALE = "male",
    FEMALE = "female"
}

export enum ErrorMessage {
    USER_EXISTS = "User Already Exists",
    INVALID_CREDIENTIALS = "Invalid Credientials",
    EMAIL_NOT_FOUND = "Email Not Exists"
}


export enum Role {
    MASTER_ADMIN = "MasterAdmin",
    COMPANY_ADMIN = "CompanyAdmin",
    GENERAL_MANAGER = "GeneralManager",
    FINANCE_MANAGER = "FinanceManager",
    RIDER_USER = "Rider",
    COURIER_CLERK = "CourierClerk"
}


export enum NodeEnv {
    DEVELOPMENT = "development",
    STAGING = "staging",
    TESTNG = "testing",
    PRODUCTION = "production"
}