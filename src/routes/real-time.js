import prisma from '@prisma/client'

export const db = new prisma.PrismaClient()


export async function get(){
    console.log("real-time");
    // Find all sensors with region = fyrrebakken
    const sensors = await db.sensor.findMany({
        where: {region: "Fyrrebakken", name:"Kontor"},
    })
    if (!sensors) {
        console.log("no sensors exist")
    }
    console.log(sensors)
    return{
        body:{
            message: 'Hello world!'
        }
    }
}
