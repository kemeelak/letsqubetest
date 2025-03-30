const FE_API_BASE = process.env.REACT_APP_API_BASE || ""

export const SAVE_QUBE_ENDPOINT = FE_API_BASE + "/api/save.php";
export const SHOW_QUBE_ENDPOINT = FE_API_BASE + "/api/show.php";
export const CONTACT_ENDPOINT = FE_API_BASE + "/api/contact.php";

export const SAVE_QUBE_SUCCESS = "QUBE CREATED";
export const CONTACT_SUCCESS = "WE HAVE RECEIVED YOUR EMAIL!";
