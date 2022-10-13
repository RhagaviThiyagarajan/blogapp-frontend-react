export const LoginStart=(userCredentials)=>(
    {
        type:"LOGIN_START"
    }
)


export const LoginSuccessful=(user)=>(
    {
        type:'LOGIN_SUCCESS',
        payLoad:user,
    }
);



export const LoginFailure=()=>(
    {
        type:'LOGIN_FAILURE',
    }
);

export const Logout=()=>(
    {
        type:'LOGOUT',
    }
);


export const updateStart=(userCredentials)=>(
    {
        type:"UPDATE_START"
    }
)


export const updateSuccess=(user)=>(
    {
        type:'UPDATE_SUCCESS',
        payLoad:user,
    }
);



export const updateFailure=()=>(
    {
        type:'UPDATE_FAILURE',
    }
);