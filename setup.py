from setuptools import find_packages
from setuptools import setup

with open("README.rst") as f:
    readme = f.read()

with open("LICENSE") as f:
    license = f.read()

setup(
    name="NBViewerPublish",
    version="0.1.0",
    description="Add Publish to NBViewer button",
    long_description=readme,
    author="Ian Allison",
    author_email="iana@pims.math.ca",
    url="https://github.com/ianabc/nbviewer_publish",
    license=license,
    packages=find_packages(exclude=("tests", "docs")),
    include_package_data=True,
    data_files=[
        (
            "share/jupyter/nbextensions/nbviewer_publish",
            ["nbviewer_publish/static/index.js"],
        ),
        (
            "etc/jupyter/nbconfig/notebook.d",
            ["jupyter-config/nbconfig/notebook.d/nbviewer_publish.json"],
        ),
    ],
    zip_safe=False,
)
