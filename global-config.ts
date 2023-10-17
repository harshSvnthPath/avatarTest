export const HOST_API = process.env.NEXT_PUBLIC_HOST_API;

export const JWT_SECRET_KEY =
  process.env.NEXT_JWT_SECRET_KEY || "YACINE_TEST_2023";

export const AVATURN_PRODUCT_ID = process.env.AVATURN_PRODUCT_ID;

export const AVATURN_USER_ID = process.env.AVATURN_USER_ID;

const AVATURN_ENDPOINTS = {
  CREATE_USER: "https://api.avaturn.me/api/v1/users/new",
  CREATE_SESSION: "https://api.avaturn.me/api/v1/sessions/new",
};

export const APP_ENDPOINTS = {
  register: "/api/auth/register",
  avatar: {
    create: "/api/avatar",
    list: "/api/avatar",
  },
};

export const HEADER = {
  H_MOBILE: 64,
  H_DESKTOP: 80,
  H_DESKTOP_OFFSET: 80 - 16,
  H_MAIN_DESKTOP: 88,
  H_DASHBOARD_DESKTOP: 92,
  H_DASHBOARD_DESKTOP_OFFSET: 92 - 32,
};
