import {
  Controller,
  Get,
  Param,
  Post,
  Res,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';

import { editFileName, invoiceFileFilter } from 'src/utils/file-upload.utils';
import { FilesService } from './files.service';
import { Response } from 'express';

@Controller('files')
export class FilesController {
  constructor(private readonly filesService: FilesService) {}

  @Post()
  @UseInterceptors(
    FilesInterceptor('files', 5, {
      storage: diskStorage({
        destination: './files',
        filename: editFileName,
      }),
      fileFilter: invoiceFileFilter,
    }),
  )
  async uploadMultipleFiles(
    @UploadedFiles() files: Express.Multer.File[],
    @Res() res: Response,
  ) {
    const response = await this.filesService.uploadFiles(files);

    if (!response) {
      return res.status(400).send({ message: 'Files have not been uploaded' });
    }

    return res.send(response);
  }

  @Get(':filepath')
  seeUploadedFile(@Param('filepath') file, @Res() res: Response) {
    return res.sendFile(file, { root: './files' });
  }
}