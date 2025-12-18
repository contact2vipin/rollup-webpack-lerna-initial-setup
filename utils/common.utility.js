const pickIf = (condition, valueIfTrue, valueIfFalse) => condition ? valueIfTrue : valueIfFalse;

export const ifDev = pickIf.bind(null, process.env.NODE_ENV === 'development');
export const ifProd = pickIf.bind(null, process.env.NODE_ENV === 'production');

export const appPaths = {
    "WAP": "/",
    "WEM": "/enquiry-mgmt",
};