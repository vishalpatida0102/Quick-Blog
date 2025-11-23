
import ImageKit from "imagekit";

 
 

var imagekit = new ImageKit({
    publicKey : process.env.PUBLIC_KIT,
    privateKey :process.env.PRIVATE_KIT,
    urlEndpoint :process.env.URL_ENDPOINT
});


export default imagekit;