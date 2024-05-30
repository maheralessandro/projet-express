


const filter = (req,res,next)=>{
    let date = new Date(); 
    let min = date.getMinutes()
    if(min > 45){
        console.error('time off');
        res.end('time off')

    }else{
        next();
    }
};

const open = (req,res,next)=>{
    let date = new Date();
    let ore = date.getHours();
    let day = date.getDay();
    if(day > 5 || ore > 17 || ore < 9 ){
       res.send('is close')
    }else{
        next()
    }
};

module.exports = {filter , open} ;