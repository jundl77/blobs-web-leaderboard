let ENV_VARS

if (process.env.NODE_ENV !== "production") {
    ENV_VARS = {
        BG_IMG_PATH: "resources/img/background.jpg"
    }
} else {
    ENV_VARS = {
        BG_IMG_PATH: "img/background.jpg"
    }
}

export default ENV_VARS