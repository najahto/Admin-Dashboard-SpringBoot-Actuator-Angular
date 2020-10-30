export interface SystemCPU {
    name: String;
    description: String;
    baseUnit: any;
    measurements: {
        statistic: String,
        value: Number[]
    };
    availabale: any[];


}