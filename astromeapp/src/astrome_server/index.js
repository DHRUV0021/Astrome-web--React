/* eslint-disable no-redeclare */
const express = require('express');
const cors = require('cors')
const app = express();
require('./config/db');
const multer = require('multer')
const mongoose = require('mongoose');
const parser = require("body-parser");


app.use(parser.json());
app.use(cors());
app.use(parser.urlencoded({ extended: true }))


//schema page
const Contact = require('./contact');
const Type_of_pros = require('./type_of_pro');
const Product = require('./product')
const Image = require('./image ')


//----------------------------------------------- contact -----------------------------------------------\\
//---------- post CONTACT API

app.post('/contact', async (req, res) => {
    let contact = new Contact(req.body);
    let result = await contact.save();
    res.send(result);
});

//---------- get CONTACT API

app.get("/contact", async (req, res) => {
    let contact = await Contact.find();
    if (contact.length > 0) {
        res.send(contact)
    } else {
        res.send({ result: "no contact data" })
    }
});

//---------- delete CONTACT API

app.delete("/contacts/:id", async (req, resp) => {
    const result = await Contact.deleteOne({ _id: req.params.id })
    resp.send(result);
});



//----------------------------------------------- type_of_pro ---------------------------------------------\\
//---------- get TYPE_OF_PRO API

app.get("/type_of_pro", async (req, res) => {
    let type_of_pro = await Type_of_pros.find();
    if (type_of_pro.length > 0) {
        res.send(type_of_pro)
    } else {
        res.send({ result: "no product data" })
    }
});


//---------- delete TYPE_OF_PRO API

app.delete("/type_of_pros/:id", async (req, resp) => {
    const result = await Type_of_pros.deleteOne({ _id: req.params.id })
    resp.send(result);
});


//---------- update TYPE_OF_PRO API

app.get('/type_of_pro/:id', async (req, res) => {
    let result = await Type_of_pros.findOne({ _id: req.params.id });
    if (result) {
        res.send(result);
    }
    else {
        res.send({ result: "no data found" });
    }
});


//------------------mullter using

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'upload/');
    },
    filename: function (req, file, cb) {
        const fileName = Date.now() + '-' + file.originalname
        cb(null, fileName)
        // cb(null, file.originalname);
    }
});
const upload = multer({ storage });


app.put('/type_of_pro/:id', upload.single('image'), async (req, res) => {
    // const filename = req.file.filename
    const litter = req.body.litter
    const url = req.protocol + '://' + req.get('host');

    if (!req.file) {
        let result = await Type_of_pros.findOne({ _id: req.params.id });
        var img = result.photo
        console.log(result.photo);
    } else {
        var filename = req.file.filename
        var img = `${url}/images/${filename}`
    }

    let result = await Type_of_pros.updateOne(
        { _id: req.params.id },
        {
            $set: { litter, photo: img }
        }
    )
    res.send(result);
});
app.use('/images', express.static('upload'));


//---------- image upload TYPE_OF_PRO API

app.post('/type_of_pro', upload.single('image'), async (req, res) => {
    const filename = req.file.filename
    const litter = req.body.litter

    if (!filename) {
        return res.status(400).send({ message: 'No file uploaded.' });
    }
    const url = req.protocol + '://' + req.get('host');
    const img = `${url}/images/${filename}`

    let portfolio = new Type_of_pros({ litter, photo: img });
    let result = await portfolio.save();
    console.log(result);
    res.send(result.photo);
});
app.use('/images', express.static('upload'));

//---------- image get TYPE_OF_PRO API

app.get("/type_of_image", async (req, res) => {
    try {
        let type_of_pros = await Type_of_pros.find();
        if (type_of_pros.length > 0) {
            res.send(type_of_pros)
            console.log(type_of_pros);
        }
        else {
            console.warn({ result: "sorry, no Contact found" })
        }
    } catch (e) {
        console.log("error=>" + e);
    }
})

//---------- single data get type_of_product API

app.get("/type_view/:id", async (req, res) => {

    console.log(req.params.id)
    console.log(req.params.id)

    let result = await Type_of_pros.findById({ _id: req.params.id });
    if (result) {
        res.send(result)
    }
    else {
        res.send({ result: "no data is hear" })
    }
})


// -------------------------single get data img &name 

app.get("/type_of_view/:id", async (req, res) => {
    let result = await Type_of_pros.findOne({ _id: req.params.id });
    if (result) {
        res.send(result)
    }
    else {
        res.send({ result: "no data is hear" })
    }
})



//-------------------------------------------------- PRODUCT ---------------------------------------------\\
//---------- get PRODUCT API

app.get("/product", async (req, res) => {
    let product = await Product.find();
    if (product.length > 0) {
        res.send(product)
    } else {
        res.send({ result: "no product data" })
    }
});

//---------- delete PRODUCT API

app.delete("/products/:id", async (req, resp) => {
    const result = await Product.deleteOne({ _id: req.params.id })
    resp.send(result);
});

//---------- update PRODUCT API

app.get('/product/:id', async (req, res) => {
    let result = await Product.findOne({ _id: req.params.id });
    if (result) {
        res.send(result);
    }
    else {
        res.send({ result: "no data found" });
    }
});


//--------------------------multer using

const storages = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'upload/');
    },
    filename: function (req, file, cb) {
        const fileName = Date.now() + '-' + file.originalname
        cb(null, fileName)
        // cb(null, file.originalname);
    }
});
const uploads = multer({ storage: storages });

app.put('/product/:id', uploads.single('image'), async (req, res) => {
    const url = req.protocol + '://' + req.get('host');
    const litter = req.body.litter
    // const product_text = req.body.product_text
    const layer = req.body.layer
    const color = req.body.color
    const size = req.body.size
    const waight = req.body.waight
    const all_details = req.body.all_details


    if (!req.file) {
        let result = await Product.findOne({ _id: req.params.id });
        var img = result.photo
        console.log(result.photo);
    } else {
        var filename = req.file.filename
        var img = `${url}/images/${filename}`
    }
    // console.log("imggggggggg" + req.body)
    let result = await Product.updateOne(
        { _id: req.params.id },
        {
            $set: { litter, photo: img, layer, color, size, waight, all_details }
        }
    )
    res.send(result);
});
app.use('/images', express.static('uploads'));



//---------- single data get PRODUCT API

app.get("/product/:id", async (req, res) => {
    let result = await Product.findOne({ _id: req.params.id });
    if (result) {
        res.send(result)
    }
    else {
        res.send({ result: "no data is hear" })
    }
});


//-------------------------- image upload PRODUCT API


app.post('/product_img', uploads.single('image'), async (req, res) => {
    const filename = req.file.filename
    const litter = req.body.litter
    const product_text = req.body.product_text
    const layer = req.body.layer
    const color = req.body.color
    const size = req.body.size
    const waight = req.body.waight
    const all_details = req.body.all_details

    if (!filename) {
        return res.status(400).send({ message: 'No file uploaded.' });
    }
    const url = req.protocol + '://' + req.get('host');
    const img = `${url}/images/${filename}`

    let portfolio = new Product({ litter, photo: img, product_text, layer, color, size, waight, all_details });
    let result = await portfolio.save();
    console.log(result);
    res.send(result.photo);
});
app.use('/images', express.static('uploads'));

//---------- image get PRODUCT API

app.get("/product_img", async (req, res) => {
    try {
        let product = await Product.find();
        if (product.length > 0) {
            res.send(product)
            console.log(product);
        }
        else {
            console.warn({ result: "sorry, no Contact found" })
        }
    } catch (e) {
        console.log("error=>" + e);
    }
})

//-------------------------------------------------- LOGIN ---------------------------------------------------\\

const userSchema = new mongoose.Schema({
    name: String,
    password: String
});
const User = new mongoose.model("Admin_login", userSchema)


//---------- POST LOGIN API 
app.post('/logIn', async (req, res) => {
    if (req.body.name && req.body.password) {
        let login = await User.findOne(req.body).select("-password");
        if (login) {
            res.send(login);
        }
        else {
            res.send({ result: ' no user found' })
        }
    }
    else {
        res.send({ result: ' no result found' })
    }
});


//----------------------------------------------------gallery-------------------------------------------//


const storagis = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'upload/');
    },
    filename: function (req, file, cb) {
        const fileName = Date.now() + '-' + file.originalname
        cb(null, fileName)
        // cb(null, file.originalname);
    }
});
const uploaded = multer({ storage: storagis });

app.post('/gallery', uploaded.single('image'), async (req, res) => {
    const filename = req.file.filename


    if (!filename) {
        return res.status(400).send({ message: 'No file uploaded.' });
    }
    const url = req.protocol + '://' + req.get('host');
    const img = `${url}/images/${filename}`

    let portfolio = new Image({ image: img });
    let result = await portfolio.save();
    console.log(result);
    res.send(result.photo);
});
app.use('/images', express.static('uploaded'));

//---------- image get PRODUCT API

app.get("/gallery", async (req, res) => {
    try {
        let image = await Image.find();
        if (image.length > 0) {
            res.send(image)
            console.log(image);
        }
        else {
            console.warn({ result: "sorry, no Contact found" })
        }
    } catch (e) {
        console.log("error=>" + e);
    }
})


//---------- delete PRODUCT API

app.delete("/gallery/:id", async (req, resp) => {
    const result = await Image.deleteOne({ _id: req.params.id })
    resp.send(result);
});








app.listen(5000);