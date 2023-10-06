"use strict";

const mongoose = require("mongoose");
// const nameSchema = new mongoose.Schema(
//   {
//     // _id: //auto created
//     // fieldName: String //shorthand using

//     fieldName: {
//       type: String,
//       default: null,
//       trim: true,
//       select: true,
//       index: false,
//       unique: false,
//       required: [true, "error message"],
//       enum: [[0, 1, 2, 3], "error message"],
//       validate: [
//         function (data) {
//           return true;
//         },
//         "Error-Message",
//       ],
//       get: function (data) {
//         return true;
//       },
//       set: function (data) {
//         return true;
//       },
//     },
//   },

//   {
//     collection: "collectionName",
//     timestamps: true,
//   }
// );

const blogPostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      required: true,
    },
    content: {
      type: String,
      trim: true,
      required: true,
    },

    published: {
      type: Boolean,
      default: true,
    },
  },
  {
    collection: "blogPosts",
    timestamps: true
  }
);

 

module.exports = {
    //BlogCategory:
    BlogPost: mongoose.model("BlogPost", blogPostSchema)
}