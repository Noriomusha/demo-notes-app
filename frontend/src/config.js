const config = {

    STRIPE_KEY: "pk_test_51Nb1toCBxSiMPdV4sNBrvNgwhYS8fhsb65UW0LX1YD0Vbd1RIRzmqgPLaZdZwiRbw1zSpJOvWx3MwNTUN10TYq6q00ijT6sGlQ",
    MAX_ATTACHMENT_SIZE:5000000, 
    //Backend config
    s3: {
        REGION: process.env.REACT_APP_REGION,
        BUCKET: process.env.REACT_APP_API_URL,
    },
    apiGateway: {
        REGION: process.env.REACT_APP_REGION,
        URL: process.env.REACT_APP_API_URL,
    },
    cognito: {
        REGION: process.env.REACT_APP_REGION,
        USER_POOL_ID: process.env.REACT_APP_USER_POOL_ID,
        APP_CLIENT_ID: process.env.REACT_APP_USER_POOL_CLIENT_ID,
        IDENTITY_POOL_ID: process.env.REACT_APP_IDENTITY_POOL_ID,
    },
};

export default config;