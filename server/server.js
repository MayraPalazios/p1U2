const net = require ('net');
//se crea el servidor
const servidor = net.createServer();

//se enciende el servidor
servidor.on('connection', (socket)=> {
    socket.on('data',(data)=>{
        
        console.log('mensaje recibido desde el cliente: ' + data )
        if(data == 'hola'){
            let dia = new Date();
            let hora = String (dia.getHours()).padStart(2,'0') + ':' + String(dia.getMinutes()).padStart(2,'0') + ':' + dia.getSeconds();
            socket.write('Hola buenos dias\n' + fecha);
        }
        if(data == '¿como estas?'){
            socket.write('muy bien, gracias a Dios\n')
        }
        if(data == '¿como vas en la escuela?'){
            socket.write('hasta el momento bien\n')
        }        
        if(data == 'familia'){
            socket.write('todos se encuentran bien\n')
        }
        if(data == 'y tu trabajo'){
            socket.write('muy pesado\n')
        }
        if(data == 'adios'){
            socket.write('hasta luego')
            socket.on('close',()=>{
                console.log('comunicación finalizada' )
            })
        }
    })

    //cierra el canal de comunicacion
   
    socket.on('error',(err)=>{
        console.log(err.message)
    })
})
//el servidor esta escuchando
servidor.listen(3000, ()=>{
    console.log('Servidor funcionando en el puerto ', servidor.address().port)
})
