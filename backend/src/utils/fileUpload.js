import multer from 'multer';
import path from 'path';

const storage = multer.diskStorage({
    destination: "src/uploads/documents",
    filename: (req, file, cb) => {
        const uniqueName = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, uniqueName + path.extname(file.originalname));
    }
})

export const upload = multer({
    storage,
    limits: { fileSize: 10 * 1024 * 1024 }
});