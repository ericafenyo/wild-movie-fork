/**
 * @license
 * Copyright (C) 2019 Eric Afenyo
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { genres } from "./genres";
import noImage from './no_poster.png';

/**
 * @class
 * This class provides some mapper functions for parsing the raw encoded 
 * response from the server.
 * 
 * @see 
 */
class Mapper {
    /**
     * Build a working image URL, using 3 pieces of data;
     * 1. A base url.
     * 2. Image file size.
     * 3. Image path.
     * The first two pieces can be retrieved by calling the 
     * [TMDb configuration]{@link https://developers.themoviedb.org/3/configuration/get-api-configuration} API 
     * and the third is the file path you're wishing to grab on a particular media object. 
     * Example: `poster_path` or `backdrop_path`
     * 
     * @param {string} imagePath The file path(poster_path or backdrop_path) from a TMDb movie response. 
     * @param {string} fileSize Image file size.
     */
    buildImageUrl = (imagePath, fileSize = "w500") => {
        // Base image url
        const BASE_URL = "https://image.tmdb.org/t/p/";

        if (!imagePath) {
            return noImage;
        }
        return `${BASE_URL}${fileSize}${imagePath}`;
    }

    /**
     * Build a working youtube URL from a provided video key.
     * @param {string} videoKey The `key` included in TMDb video response.
     */
    buildYouTubeUrl = (videoKey) => {
        const YOUTUBE_BASE_URL = "https://www.youtube.com/watch";
        return `${YOUTUBE_BASE_URL}?v=${videoKey}`;
    }

    parseYoutubeUrl = (videos) => {
        if (!videos.results.length) {
            return "";
        }
        const youtubeKey = videos.results[0].key;
        return this.buildYouTubeUrl(youtubeKey);
    }
    /**
     * Converts genre ids from a TMDb movie response to its corresponding String value.
     */
    parseGenres = (genreIds) => {
        const result = []
        genreIds.forEach(genreId => {
            genres.forEach(genre => {
                if (genreId === genre.id) {
                    result.push(genre.name)
                }
            })
        })
        return result;
    }

    parseDirector = (crew)  => {
        const director = crew.filter(item => {
           return item.job === 'Director';
        } )

      if(!director.length){
          return "N/A";
      }

      return director[0];
    }
}

export const mapper = new Mapper();