let ENV_VARS

if (process.env.NODE_ENV !== "production") {
    ENV_VARS = {
        BG_IMG_PATH: "resources/img/background.jpg",
        DATA_URL: "http://blobs-swing.azurewebsites.net/tables/highscore?zumo-api-version=2.0.0"
    }
} else {
    ENV_VARS = {
        BG_IMG_PATH: "img/background.jpg",
        DATA_URL: "http://blobs-swing.azurewebsites.net/tables/highscore?zumo-api-version=2.0.0"

    }
}

export default ENV_VARS