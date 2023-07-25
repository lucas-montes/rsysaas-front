import { env } from '$env/dynamic/public';

export const API_DOMAIN = env.PUBLIC_BACK_DOMAIN
export const CURRENT_VERSION = "v1"
export const API_URL = `${API_DOMAIN}/api/${CURRENT_VERSION}/recommendations/`
export const ASSETS_URL = `${API_DOMAIN}/assets/embed-widget.js`
export const NEW_USER_URL = `${API_DOMAIN}/save-new-user/`