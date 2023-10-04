import { v4 } from "uuid";
import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const storage = multer.diskStorage({
  destination: path.join(__dirname, "../public/img"),
  filename: (req, file, cb) => {
    cb(null, v4() + path.extname(file.originalname).toLocaleLowerCase());
  },
});

export const upload = multer({
  storage,
  dest: path.join(__dirname, "public/img"),
  limits: { fileSize: 2000000 },
  fileFilter: (req, file, cb) => {
    const filetypes = /jpeg|jpg|png|webp/;
    const mimetype = filetypes.test(file.mimetype);
    const extname = filetypes.test(path.extname(file.originalname));

    if (mimetype && extname) {
      return cb(null, true);
    } else {
      cb("Solo se permiten archivos (jpeg, jpg, png, webp)", false);
    }
  },
}).single("image");
