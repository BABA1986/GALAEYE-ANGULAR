import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import {Category, CategoryInfo, VideoInfo, VideoPageRequestPayload} from '../model/category.model';
import { Countryinfo } from '../../utchannels/menumodel/countryinfo.model';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Origin': '*' })
};


@Injectable({
  providedIn: 'root'
})

export class CategoryService {

  private mCategoryUrl = 'http://localhost:8080/api/categoriesInCountry';
  private mCategorVideoUrl = 'http://localhost:8080/api/videosInCategory';
  private mDeleteVideosUrl = 'http://localhost:8080/api/deleteCategoryVideos';
  private mAddVideosUrl = 'http://localhost:8080/api/addVideosInCategory';
  private mAddEditCategoryUrl = 'http://localhost:8080/api/addEditCategory';
  private mDeleteCategoryUrl = 'http://localhost:8080/api/deleteCategory';

  mCategoriesList: Array<CategoryInfo>;

  constructor(private http: HttpClient) {
    this.mCategoriesList = new Array<CategoryInfo>();
  }

    /** GET categories from the server */
  fetchCategories (countryInfo: Countryinfo): Observable<Category[]> {
    return this.http.post<Category[]>(this.mCategoryUrl, countryInfo, httpOptions);
  }

  getCategories (countryInfo: Countryinfo, callback: (data) => void) {
    this.mCategoriesList.splice(0, this.mCategoriesList.length);
      this.fetchCategories(countryInfo).subscribe(catagories => {
      this.initialiseCategoryInfo(catagories);
        callback(this.mCategoriesList);
    }, err => {
      callback(this.mCategoriesList);
    });
  }

  getCategoryInfoFor(category: Category): CategoryInfo {
    let lInfo = null;
    for (let lIndex = 0; lIndex < this.mCategoriesList.length; ++lIndex) {
      lInfo = this.mCategoriesList[lIndex];
      if (lInfo.mCategory.mCategoryId === category.mCategoryId) {
        break;
      }
    }

    return lInfo;
  }

  initialiseCategoryInfo(categories: Category[]) {
    for (let lIndex = 0; lIndex < categories.length; ++lIndex) {
      const lCategoryInfo = new CategoryInfo();
      lCategoryInfo.mCategory = categories[lIndex];
      this.mCategoriesList.push(lCategoryInfo);
      this.getVideosFrom(categories[lIndex], 0);
    }
  }

   fetchVideosFrom(categoryInfo: CategoryInfo, pageIndex: number): Observable<any> {
    console.log('Category Id is =' + categoryInfo.mCategory.mCategoryId);
    return this.http.post<any>(this.mCategorVideoUrl,
      new VideoPageRequestPayload(categoryInfo.mCategory.mCategoryId, 0),
      httpOptions);
  }

  getVideosFrom(category: Category, pageIndex: number) {
    const lCategoryInfo = this.getCategoryInfoFor(category);
    this.fetchVideosFrom(lCategoryInfo, pageIndex).subscribe(data => {
      this.initialiseAndLoadVideoPageFor(lCategoryInfo, data, pageIndex);
    });
  }

  initialiseAndLoadVideoPageFor(categoryInfo: CategoryInfo,
    videoList: any,
    pageIndex: number) {
     const response = JSON.parse(JSON.stringify(videoList));
     categoryInfo.loadVideos(response.content, pageIndex);
    }

  deleteVideos (videos: VideoInfo[]): Observable<any> {
    return this.http.post<any>(this.mDeleteVideosUrl, videos, httpOptions);
  }

  addVideos (videos: VideoInfo[]): Observable<any> {
    return this.http.post<any>(this.mAddVideosUrl, videos, httpOptions);
  }

  addEditCategory (category: Category): Observable<any> {
    return this.http.post<any>(this.mAddEditCategoryUrl, category, httpOptions);
  }

  deleteCategory (category: Category): Observable<any> {
    return this.http.post<any>(this.mDeleteCategoryUrl, category, httpOptions);
  }
}