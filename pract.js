// const pulsar={name: "pulsar", colour: "black", cc: 150};
// const ktm={name: "ktm", colour: "white", cc: 220};
// const apache={name: "apache", colour: "yellow", cc: 180};

// const bikes=[pulsar,apache];
// bikes.push(ktm);
// ktm.colour="red";
// console.log(bikes);

// for (let i =0; i<bikes.length; i++){
//     console.log(bikes[i].name);

// }
//          http methods
// create - post
// update - put
// read - get
// delete - delete


// const bikes=["pulsar","apache","ktm"];
// bikes.push("honda");
// bikes[0]="pulsar 150";

// bikes.splice(2,1);




// console.log(bikes);


const pulsar={name:"pulsar",colour:"black",cc:150};
const apache={name:"apache",colour:"yellow",cc:180};
const honda={name:"honda",colour:"white",cc:150};

const bikes=[pulsar,apache];
bikes.push(honda);
honda.colour="red";
for (let i=0;i<bikes.length;i++){
    // console.log(bikes[i]);
    console.log(bikes.splice(0,1).cc);

}




// console.log(bikes);



