# ...existing code...

from decouple import config

DATABASES = {
    "default": {
        "ENGINE": "djongo",
        "NAME": config("DB_NAME", default="octofit_db"),
        "ENFORCE_SCHEMA": False,
        "CLIENT": {
            "host": config("DB_HOST", default="localhost"),
            "port": config("DB_PORT", default=27017, cast=int),
            "username": config("DB_USERNAME", default=""),
            "password": config("DB_PASSWORD", default=""),
            "authSource": config("DB_AUTH_SOURCE", default="admin"),
        },
    }
}

# ...existing code...
