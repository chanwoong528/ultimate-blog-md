import http from "../http";

export const getAllCategory = async () => {
  try {
    const categoriesRes = await http.get("/api/category", {});
    const categoryData = await categoriesRes.data;
    return categoryData;
  } catch (error) {
    console.warn("getAllCategory[error]: ", error);
    return error;
  }
};
