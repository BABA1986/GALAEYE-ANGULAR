import { catchError, map, tap } from 'rxjs/operators';

export class Category {
  mId: number;
  mCategoryId: number;
  mCategoryName: string;
  mCountryId: string;
  mCountryCode: string;
  mCategoryIndex: number;
}

export class VideoInfo {
  mId: number;
  mVideoId: string;
  mCategoryId: number;
  mPublishedOn: string;
}

export class VideoPageCursor {
  mOffset: number;
  mSize: number;
  constructor() {
    this.mOffset = 0;
    this.mSize = 20;
  }
}

export class CategoryInfo {
  mCategory: Category;
  mPageCursor: VideoPageCursor;
  mVideos: VideoInfo[];

  constructor() {
    this.mVideos = new Array<VideoInfo>();
    this.mPageCursor = new VideoPageCursor();
  }

  loadVideos(videos: VideoInfo[], atIndex: number) {
    this.mPageCursor.mOffset = atIndex;
    for (let lIndex = 0; lIndex < videos.length; ++lIndex) {
      const lVideoInfo = new VideoInfo();
      console.log(videos[lIndex].mId);
      lVideoInfo.mId = videos[lIndex].mId;
      lVideoInfo.mCategoryId = videos[lIndex].mCategoryId;
      lVideoInfo.mVideoId = videos[lIndex].mVideoId;
      lVideoInfo.mPublishedOn = videos[lIndex].mPublishedOn;
      this.mVideos.push(lVideoInfo);
    }
  }
}

export class VideoPageRequestPayload {
  categoryId: number;
  pageIndex: number;
  pageSize: number;

  constructor(categoryId: number, pageIndex: number) {
    this.categoryId = categoryId;
    this.pageIndex = pageIndex;
    this.pageSize = 20;
  }
}
