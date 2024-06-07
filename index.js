const express= require('express');
const app =express();
const port=process.env.PORT||3000;
const Elect=require('./store1/routesStore1/electricity');
const wood=require('./store1/routesStore1/Wood');
const Plumbing=require('./store1/routesStore1/Plumbing');
const YouthCare=require('./store1/routesStore1/Youth Care');
const furniture=require('./store1/routesStore1/furniture');
const notif=require('./notif/route');
const mongo=require('mongoose');
const auth=require('./user/authRoute');
const ink=require('./store2/routesStore2/ink');
const publicate=require('./store2/routesStore2/publicate');
const write=require('./store2/routesStore2/write');
const clean=require('./store2/routesStore2/clean');
const custody=require('./store1/routesStore1/custody');
const CustodyModel=require('./store1/models/custody');








app.use(express.json());
app.use('/Elect',Elect);
app.use('/Wood',wood);
app.use('/Plumbing',Plumbing);
app.use('/furniture',furniture);
app.use('/YouthCare',YouthCare);
app.use('/notif',notif);
app.use('/auth',auth);
app.use('/clean',clean);
app.use('/write',write);
app.use('/publicate',publicate);
app.use('/ink',ink);
app.use('/custody',custody);

app.get('/mm',(req,res)=>{
    res.send('cccccc')
})

 
// mongo.connect('mongodb+srv://Admincollege:5iBoWy3hOzPsD9YZ@atlascluster.ytbxqwi.mongodb.net/CollegeStore?retryWrites=true&w=majority')
// .then(()=>{console.log('connected mongoose successfull')},)
// .catch((error)=>
//     console.log(error)

// )




mongo.connect("mongodb://Admincollege:5iBoWy3hOzPsD9YZ@ac-pka8jeg-shard-00-00.ytbxqwi.mongodb.net:27017,ac-pka8jeg-shard-00-01.ytbxqwi.mongodb.net:27017,ac-pka8jeg-shard-00-02.ytbxqwi.mongodb.net:27017/?ssl=true&replicaSet=atlas-d5fq1b-shard-0&authSource=admin&retryWrites=true&w=majority&appName=AtlasCluster")
 .then(()=>{console.log('connected mongoose successfull')},)
.catch((error)=>
    console.log(error)

)
// mongo.connect("mongodb://localhost:27017/StoreCollage",
// {
//     useNewUrlParser: true,
//      useUnifiedTopology: true
//   }

// )

app.listen(port,()=>console.log('server is running') );