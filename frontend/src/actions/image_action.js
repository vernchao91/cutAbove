import * as ImageApiUtil from "../util/image_api_util"

// export const fetchImage = 

export const uploadImage = async ({image, description}) => {
  const formData = new FormData();
  formData.append("image", image)
  formData.append("description", description)
  const result = await ImageApiUtil.uploadImage(formData);
  return result.data;
}