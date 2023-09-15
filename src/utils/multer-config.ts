import { FileTypeValidator, MaxFileSizeValidator, ParseFilePipe } from "@nestjs/common";
import { diskStorage } from "multer";
import crypto from 'node:crypto'

export const multerConfig = {
  storage: diskStorage({
    destination: './uploads',
    filename: (req, file, cb) => {

      const fileName = 
        new Date().toISOString().replace(/\D/g, '').slice(0,14)  + 
        '-' +
        file.originalname.replace(/ /g, '')

      cb(null, fileName)
    }
  })
}

export const validation = new ParseFilePipe({
  validators:[
    new MaxFileSizeValidator({maxSize: 1000 * 1000}),
    new FileTypeValidator({ fileType: '.(jpeg|png)'})
  ]
})