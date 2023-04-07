import { extname } from 'path';
import { v4 as uuidv4 } from 'uuid';

export const invoiceFileFilter = (req, file, callback) => {
  if (!file.originalname.match(/\.(jpg|jpeg|png|pdf)$/)) {
    return callback(
      new Error('Only jpg, jpeg, png, and pdf are allowed!'),
      false,
    );
  }
  callback(null, true);
};

export const editFileName = (req, file, callback) => {
  const name = uuidv4();
  const fileExtName = extname(file.originalname);

  callback(null, `${name}${fileExtName}`);
};
