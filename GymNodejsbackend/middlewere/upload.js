// const lll
import multer from "multer";

const storage = multer.diskStorage({
  destination: (req, file, cd) => {
    cd(null, "uploads/");
  },
  filename: (req, file, cd) => {
    const uniqueName = Date.now() + "-" + file.originalname;
    cd(null, uniqueName);
  },
});
const upload = multer({ storage });
export default upload;
