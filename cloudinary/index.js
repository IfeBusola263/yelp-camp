import { v2 as cloudinary } from 'cloudinary'
import { CloudinaryStorage } from 'multer-storage-cloudinary';

// console.log('Running...')
cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_KEY, 
  api_secret: process.env.CLOUDINARY_SECRET
});


export const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params:{
        folder: 'YelpCamp',
        allowedFormat: ['jpeg', 'jpg', 'png'],
    }
})

// console.log('Done...')
// console.log('PRINTING: ',process.env.CLOUDINARY_CLOUD_NAME, process.env.CLOUDINARY_KEY, process.env.CLOUDINARY_SECRET)