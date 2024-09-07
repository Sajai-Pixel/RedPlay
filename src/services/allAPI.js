import serverUrl from "./baseURL";
import commonAPI from "./commonAPI";

//upload video API must called by Add component
export const uploadVideoAPI = async (uploadVideo) => {
    return await commonAPI("POST", `${serverUrl}/allVideos`, uploadVideo)
}

//get all videos API must called by View Component
export const getAllVideosAPI = async () => {
    return await commonAPI("GET", `${serverUrl}/allVideos`, "")
}

//store watch history api must called by videocard 
export const storeHistoryAPI = async (videoDetails) => {
    return await commonAPI("POST", `${serverUrl}/history`, videoDetails)
}

// must called by history component
export const getHistoryAPI = async () => {
    return await commonAPI("GET", `${serverUrl}/history`, "")
}

// removeHistoryAPI called history component
export const removeHistoryAPI = async (historyId) => {
    return await commonAPI("DELETE",`${serverUrl}/history/${historyId}`,{})
}

// removeVideoAPI called by videocard component
export const removeVideoAPI = async (videoId) => {
    return await commonAPI("DELETE",`${serverUrl}/allVideos/${videoId}`,{})
}

//add category api
export const addCategoryAPI = async (categoryDetails) => {
    return await commonAPI("POST", `${serverUrl}/categories`, categoryDetails)
}

//get category api
export const getCategoryAPI = async () => {
    return await commonAPI("GET", `${serverUrl}/categories`, "")
}

//removecategory api
export const removeCategoryAPI = async (categoryId) => {
    return await commonAPI("DELETE", `${serverUrl}/categories/${categoryId}`, {})
}
