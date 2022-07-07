export async function get(){
    console.log("Hit endpoint!");
    return{
        body:{
            message: 'Hello world!'
        }
    };
}