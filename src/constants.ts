let PUBLIC_BACK_DOMAIN;
try {
    const module = await import('$env/static/public');
    PUBLIC_BACK_DOMAIN = module.PUBLIC_BACK_DOMAIN;

} catch {
    PUBLIC_BACK_DOMAIN = "https://api.elerem.com"
}
export const API_DOMAIN = PUBLIC_BACK_DOMAIN
export const CURRENT_VERSION = "v1"
export const API_URL = `${API_DOMAIN}/api/${CURRENT_VERSION}/recommendations/`
export const ASSETS_URL = `${API_DOMAIN}/assets/embed-widget.js`
export const NEW_USER_URL = `${API_DOMAIN}/save-new-user/`