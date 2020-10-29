export interface SystemlHealth {
    status: String;
    components: {
        db: {
            status: String,
            details: {
                database: String,
                validationQuery: String
            }
        },
        diskSpace: {
            status: String,
            details: {
                total: Number,
                free: Number | String,
                threshold: Number,
                exists:String
            }
        },
        ping:{
            status:String
        }

    };


}