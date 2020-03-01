import express from "express";
import routes from "../routes";
import {
    getUpload,
    postUpload,
    videoDetail,
    deleteVideo,
    getEditVideo,
    postEditVideo
} from "../controllers/videoController";
import { uploadVideo } from "../middlewares";

const videoRouter = express.Router();

videoRouter.get(routes.upload, getUpload);
videoRouter.post(routes.upload, uploadVideo, postUpload);

videoRouter.get(routes.videoDetail(), videoDetail);

videoRouter.get(routes.editVideo(), getEditVideo);
videoRouter.post(routes.editVideo(), postEditVideo);

videoRouter.get(routes.deleteVideo, deleteVideo);

export default videoRouter

// export default는 이 파일 전체
// export const는 이 변수만 export 
