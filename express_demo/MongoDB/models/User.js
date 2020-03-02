let mongoose=require("mongoose");
let bcrypt=require("bcrypt-nodejs");
const SALT_FACTOR=10;
let userSchema=mongoose.Schema({
    username:{type:String,require:true,unique:true},
    password:{type:String,require:true},
    displayName:String,
    createAt:{type: Date, default: Date.now },
    bio:String,
});

userSchema.methods.name=function () {
    return this.username|| this.displayName
};
let noop=function(){};
userSchema.pre("save",function (done) {
   let user=this;
   if(!this.isModified("password")){
       return done()
   }
   bcrypt.genSalt(SALT_FACTOR,function (err,salt) {
       if(err){
           return done(err)
       }
       bcrypt.hash(user.password,salt,noop,function (err,hashPassword) {
           if(err){
               return done(error)
           }
           user.password=hashPassword;
           done();
       })
   })
});

userSchema.methods.checkPassword=function(guess,done){
    bcrypt.compare(guess,this.password,function (error,isMatch) {
        done(error,isMatch)
    })
}
let User=mongoose.model("User",userSchema);
module.exports=User;
