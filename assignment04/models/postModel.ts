import { Schema,model } from "mongoose";

const postSchema = new Schema({
    user : {type : Schema.Types.ObjectId,required : true,ref : 'user'},
    title : {type : String,required : true},
    desc : {type : String,required : true},
    createdAt : {type : Date,default : Date.now}
});

export default model('post',postSchema);