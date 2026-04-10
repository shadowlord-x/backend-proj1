import mongoose, {Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new Schema({
  videoFile: {
    type: String,
    rquired: true
  },
  thumbnail: {
    type: String,
    rquired: true
  },
  title: {
    type: String,
    rquired: true
  },
  description: {
    type: String,
    rquired: true
  },
  duration: {
    type: Number, // this will be given by cloudinary as well, not by user
    rquired: true
  },
  views: {
    type: Number,
    defaukt: 0
  },
  isPublished: {
    type: Boolean,
    default: true
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
},{timestamps: true})

videoSchema.plugin(mongooseAggregatePaginate)

export const Video = mongoose.model("Video",videoSchema)