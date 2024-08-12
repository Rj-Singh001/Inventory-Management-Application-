// import multer from "multer";

// const storages = multer.diskStorage({
//     destination:(req,res,cb=>{
//         cb(null,"public/images/")
//     }),

// filename:(req,file,cb)=>{

//     const date =Date.now()+"-"+file.originalname

//     cb(null,date)
// },


// })


// export const uploadFile = multer({storage:storages});