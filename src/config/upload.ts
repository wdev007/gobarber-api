import path from 'path';
import crypto from 'crypto';
import multer from 'multer';

const pathDestination = path.resolve(__dirname, '..', '..', 'tmp');

export default {
  directory: pathDestination,

  storage: multer.diskStorage({
    destination: pathDestination,
    filename(request, file, callback) {
      const fileHash = crypto.randomBytes(10).toString('HEX');
      const fileName = `${fileHash}-${file.originalname}`;

      return callback(null, fileName);
    },
  }),
};
