import { Injectable } from '@nestjs/common';
import { FileDto } from './dto/files.dto';
import { unlinkSync } from 'fs';

@Injectable()
export class FilesService {
  DIR = 'files';
  uploadFiles(files: Express.Multer.File[], fullUrl: string) {
    return files.map((file) => ({
      originalName: file.originalname,
      fileName: file.filename,
      fileUrl: fullUrl + '/' + file.filename,
    }));
  }

  removeFiles(files: FileDto[]) {
    try {
      files.forEach((file) => {
        const path = this.DIR + '/' + file.fileName;
        unlinkSync(path);
      });

      return {
        deletedFiles: files,
      };
    } catch (error) {
      throw new Error(error);
    }
  }
}
