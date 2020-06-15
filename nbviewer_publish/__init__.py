def _jupyter_nbextension_paths():
    return [
        dict(
            section="notebook",
            src="static",
            dest="nbviewer_publish",
            require="nbviewer_publish/index",
        )
    ]
