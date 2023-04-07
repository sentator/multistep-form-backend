import { Injectable } from '@nestjs/common';

@Injectable()
export class FilesService {
  uploadFiles(files: Express.Multer.File[]) {
    return files.map((file) => ({
      originalname: file.originalname,
      filename: file.filename,
    }));
  }
}
