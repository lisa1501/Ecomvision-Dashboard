import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        min:2,
        max:100,
    },
    email:{
        type:String,
        required:true,
        max:50,
        unique:true,
    },
    password:{
        type:String,
        required:true,
        min:6,

    },
    city: String,
    state: String,
    country: String,
    phoneNumber: String,
    occupation: String,
    transactions: Array,
    role:{
        type:String,
        enum:['user','admin',"superadmin"],
        default:'user'
        }
    },
    {
        timestamps: true,
    }
)

UserSchema.pre('save', function save(next) {
    const user = this
    console.log(this)
    // if (!user.isModified('password')) { return next() }
    bcrypt.genSalt(10, (err, salt) => {
      if (err) { return next(err) }
      bcrypt.hash(user.password, salt, (err, hash) => {
        if (err) { return next(err) }
        user.password = hash
        console.log(hash)
        next()
      })
    })
})

UserSchema.methods.comparePassword = function comparePassword(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
      cb(err, isMatch)
    })
  }

const User = mongoose.model('User', UserSchema);

export default User;