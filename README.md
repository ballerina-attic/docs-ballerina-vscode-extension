# Ballerina Visual Studio Code Extension Documentation

This is the Ballerina VS Code extension documentation repository. This repository is open and we welcome your contributions!

To see the documentation site, go to [https://wso2.com/ballerina/vscode/docs/](https://wso2.com/ballerina/vscode/docs/).

## Contribute to Ballerina VS Code extension documentation

Before you contribute, read the following guidelines to understand how you can start contributing:

Accept the contributor license agreement (CLA)

You need to accept the contributor license agreement (CLA) when you are prompted via a GitHub email notification on sending your first pull request (PR). Subsequent PRs will not require CLA acceptance.

If there are CLA changes for some (unlikely) reason, you'll have to accept the new CLA text when you send your first PR after the change.

Fork this repository, make your changes, and send in a pull request.

We look forward to your contributions.

## Run the project locally

Follow the steps given below to set up the documentation site locally.

### Step 1 - Install Python

See the instructions relevant to your operating system.

#### MacOS
If you are using macOS, you probably already have a version of Python installed on your machine. Run the following command to verify:

```shell
$ python --version
Python 2.7.2
```

If your version of Python is 2.x.x, you need to install Python3. Follow the instructions in [this guide](https://docs.python-guide.org/starting/install3/osx/) to install Python3.

Once you are done, you should see two versions of Python on your machine; python2 and python3.

#### Ubuntu and other versions of Debian Linux

Python 3 is pre-installed in these versions, which you can verify using the `python3 -V` command. Run `sudo apt install -y python3-pip` to install `pip` and verify using `pip3 -V`.

### Step 2 - Install pip
>
> **INFO**
>
> If pip is not already installed on your machine, run `get-pip.py` to install pip. Then run the following command to install it:
> ```shell
> $ python get-pip.py
> ```
>

Pip is most likely installed by default. However, you may need to upgrade pip to the latest version:

```shell
$ pip install --upgrade pip
```

### Step 3 - Install the pip packages

To clone the GitHub repository for this documentation and to run the site on your local server, follow these steps:

1. Fork `https://github.com/wso2/docs-ballerina-vscode-extension.git`.
2. Navigate to the location where you want to clone the repo and clone the forked repository.

    ```shell
    $ git clone https://github.com/wso2/docs-ballerina-vscode-extension.git
    ```

3. Navigate to the directory where you cloned the repo.

    For example:

    ```shell
    $ cd docs-ballerina-vscode-extension/<Language-folder>/
    ```

    ```shell
    $ cd docs-ballerina-vscode-extension/en/
    ```

4. Install the required pip packages.

    This step installs MkDocs together with the required theme, extensions, and plugins.

    - If you are using Python2, run the following command:

      ```shell
      $ pip install -r requirements.txt
      ```

    - If you are using Python3, run the following command:

      ```shell
      $ pip3 install -r requirements.txt
      ```

### Step 4 - Run MkDocs

1. To start the server and view the site on your local server, run the following command:

    ```shell
    $ mkdocs serve
    ```

    > **NOTE:**
    >
    > If you want to make changes and see them on the fly, run the following command to start the server and view the site on your local server:
    > 1. Navigate to the `mkdocs.yml` file.
    > 2. Set the following configuration: 
    >     ```
    >     #Breaks build if there's a warning
    >     strict: false
    >     ```
    > 3. To start the server, make it load the changes, and display the changes faster, run the following command: 
    >
    >    `mkdocs serve --dirtyreload`
  
2. To view the documentation site locally, open the following URL on a new browser window:

    [http://localhost:8000/](http://localhost:8000/)

> **NOTE:**
>
> If you are using the `mkdocs serve --dirtyreload` command to run the MkDocs server, be sure to change the configuration in the `mkdocs.yml` file as follows before sending a pull request:
>
> `strict: true` 

## License

Licenses this source under the Apache License, Version 2.0 ([LICENSE](LICENSE)), You may not use this file except in compliance with the License.

