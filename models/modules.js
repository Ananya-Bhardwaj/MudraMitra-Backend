import mongoose from "mongoose";

const ModulesSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: false,
    },
    desc: {
      type: String,
      required: true,
    },
    slide1: {
      title: {
        type: String, 
        required: true
      },
      content: {
        type: String,
        required: true
      }
    },
    slide2: {
      title: {
        type: String, 
        required: true
      }, 
      content: {
        type: String, 
        required: true
      }
    },
    slide3: {
      title: {
        type: String, 
        required: true
      }, 
      content: {
        type: String, 
        required: true
      }
    },
    slide4: {
      title: {
        type: String, 
      }, 
      content: {
        type: String, 
      }
    },
    slide5: {
      title: {
        type: String, 
      }, 
      content: {
        type: String, 
      }
    },
    isYouth: {
      type: Boolean,
    },
    isAdult: {
      type: Boolean,
    },
  },
  { timestamps: true },
);

export default mongoose.model("Modules", ModulesSchema);
