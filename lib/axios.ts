import axios, { AxiosInstance } from "axios";

interface ApiParams {
  page: number;
  limit: number;
  customer_name?: string;
  order_date?: string;
}

// fungsi untuk membuat instance Axios
export const createApiInstance = (): AxiosInstance => {
  const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

  const apiInstance = axios.create({
    baseURL,
  });

  apiInstance.interceptors.request.use((config) => {
    // mendapatkan parameter dari konfigurasi permintaan
    const params: ApiParams = config.params || {};

    // menambahkan parameter-parameter default jika belum ditentukan
    params.page = params.page || 1;
    params.limit = params.limit || 10;

    // mengubah konfigurasi permintaan untuk menyertakan parameter
    config.params = params;

    return config;
  });

  return apiInstance;
};

export const api = createApiInstance();
