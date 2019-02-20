MongoDB Tutorial
----------------
In this tutorial we will cover the basics of MongoDB

### Documents
* This **README file** in PDF format [`here`](https://github.com/nirgeier/MongoDB_tutorial/blob/master/Resources/README.pdf?raw=true)
* **Slides** in PDF format [`here`](https://github.com/nirgeier/MongoDB_tutorial/blob/master/Resources/MongoDB.pdf?raw=true)
* **Syllabus** in PDF format [`here`](https://github.com/nirgeier/MongoDB_tutorial/blob/master/Resources/Syllabus.pdf?raw=true)

### Pre-requirements

* [NodeJS](https://nodejs.org/en/)
* [MongoDB](https://www.mongodb.com/download-center/community)
* [Visual Studio Code](https://code.visualstudio.com/download)

###  Using Visual Studio Code

* Download [Visual Studio Code](https://code.visualstudio.com/download)

* Open *Visual Studio Code* once it installed

* Install the [Azure Cosmos DB](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-cosmosdb) Extension

  ![](https://github.com/nirgeier/MongoDB_tutorial/blob/master/images/cosmosdb-extension.png?raw=true)

* The easiest way to install it is to use the **Extension icon** in the **Visual Studio Code**

  ![](https://github.com/nirgeier/MongoDB_tutorial/blob/master/images/install-cosmosdb-extension.png?raw=true)

### Connecting to MongoDB
* We will use the **Azure Cosmos DB** to connect to the MongoDB instance

* Click on the **Azure Cosmos DB** icon and click on the relevant sections as shown in the image below

* If the MongoDB is running you will be able to connect and you should see the default Databases

    ![](https://github.com/nirgeier/MongoDB_tutorial/blob/master/images/cosmosdb-connect-to-mongodb.png?raw=true)

Adding content to MongoDB Database
-----------------------
### Adding document(s) from within the GUI
* Under the CosmosDB connection from the previous step right click on the connection string

* Create new Database

    ![](https://github.com/nirgeier/MongoDB_tutorial/blob/master/images/cosmosdb-new-database.png?raw=true)

* Create new collection in your new database

    ![](https://github.com/nirgeier/MongoDB_tutorial/blob/master/images/cosmosdb-new-collection.png?raw=true)

* Last step is to create document

* Right clicking as before and choose **`Create Document`** and entering `JSON` key values

    ![](https://github.com/nirgeier/MongoDB_tutorial/blob/master/images/cosmosdb-new-document.png?raw=true) 

----

### Adding content with code
* In this tutorial we will use NodeJs & mongoose 

### Creating Nodejs Project
* Create new folder anywhere on your computer

* Click on the **`File > Open Folder`** and choose your folder

* Open the integrated terminal <kbd>Ctrl</kbd> + <kbd>`</kbd>

* In the terminal create a new NodeJS project
    `npm init -f`
* This command will initialize the new NodeJS project by creating and writing `package.json` file

* Install the required packages for this tutorial using npm 
    `npm i mongoose`  
* Now we can start and write some code to work with the MongoDB

* The code & Demos are in [`src`](https://github.com/nirgeier/MongoDB_tutorial/tree/master/src) folder

