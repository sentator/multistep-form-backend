import { Injectable } from '@nestjs/common';

@Injectable()
export class FilesService {
  uploadFiles(files: Express.Multer.File[], fullUrl: string) {
    return files.map((file) => ({
      originalName: file.originalname,
      fileName: file.filename,
      fileUrl: fullUrl + '/' + file.filename,
    }));
  }
}
